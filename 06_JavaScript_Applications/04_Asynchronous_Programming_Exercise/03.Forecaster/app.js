const url = `http://localhost:3030/jsonstore/forecaster/locations`;
const urlToday = `http://localhost:3030/jsonstore/forecaster/today/`;
const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

function attachEvents() {
    const locationEl = document.getElementById('location');
    const submitBtnEl = document.getElementById('submit');
    const forecastEl = document.getElementById('forecast');
    const currentEl = document.getElementById('current');
    const upcomingEl = document.getElementById('upcoming');

    function getSymbol(condition) {
        switch (condition) {
            case "Sunny":
                return "&#x2600";
            case "Partly sunny":
                return "&#x26C5";
            case "Overcast":
                return "&#x2601";
            case "Rain":
                return "&#x2614;";
        }
    }

    submitBtnEl.addEventListener('click', async (e) => {
        // e.preventDefault();
        forecastEl.style.display = 'block'
        let input = locationEl.value;

        const res = await fetch(url);
        const data = await res.json();

        let code = 'invalid';

        Object.values(data).forEach(c => {
            let currCode = c.code;
            let currName = c.name;

            if (input === currName) {
                code = currCode;
            }
        });
        const res1 = await fetch(urlToday + code);

        if (res1.status !== 200) {
            currentEl.textContent = 'Error';
            upcomingEl.remove();
        }

        const data1 = await res1.json();

        const res2 = await fetch(urlUpcoming+code);
        const data2 = await res2.json();

        const name = data1.name;
        const condition = data1.forecast.condition;
        const high = data1.forecast.high;
        const low = data1.forecast.low;

        let weatherSym = getSymbol(data1.forecast.condition);
        let degreesSymbol = "&#176";

        const forecastDivEl = document.createElement('div');
        forecastDivEl.classList.add('forecasts');
        currentEl.appendChild(forecastDivEl);

        const conditionSymEl = document.createElement('span');
        conditionSymEl.classList.add('condition-symbol');
        conditionSymEl.innerHTML = weatherSym;
        forecastDivEl.appendChild(conditionSymEl);

        const conditionEl = document.createElement('span');
        conditionEl.classList.add('condition');
        forecastDivEl.appendChild(conditionEl);

        const conditionNameEl = document.createElement('span');
        const conditionTempEl = document.createElement('span');
        const conditionCondEl = document.createElement('span');

        conditionNameEl.classList.add('forecast-data');
        conditionTempEl.classList.add('forecast-data');
        conditionCondEl.classList.add('forecast-data');

        conditionNameEl.innerText = name;
        conditionTempEl.innerHTML = `${low}${degreesSymbol}/${high}${degreesSymbol}`;
        conditionCondEl.innerText = condition;

        conditionEl.appendChild(conditionNameEl);
        conditionEl.appendChild(conditionTempEl);
        conditionEl.appendChild(conditionCondEl);

        let upcomingDivEl = document.createElement("div");
        upcomingDivEl.classList.add("forecast-info");

        data2.forecast.forEach((x) => {
            weatherSym = getSymbol(x.condition);

            let upcomingSpanEl = document.createElement("span");
            upcomingSpanEl.classList.add("upcoming");

            let weatherSymSpan = document.createElement("span");
            weatherSymSpan.classList.add("symbol");
            weatherSymSpan.innerHTML = weatherSym;

            let degreesSpanEl = document.createElement("span");
            degreesSpanEl.classList.add("forecast-data");
            degreesSpanEl.innerHTML = `${x.low}${degreesSymbol}/${x.high}${degreesSymbol}`;

            let conditonSpanEl = document.createElement("span");
            conditonSpanEl.classList.add("forecast-data");
            conditonSpanEl.textContent = x.condition;

            upcomingSpanEl.appendChild(weatherSymSpan);
            upcomingSpanEl.appendChild(degreesSpanEl);
            upcomingSpanEl.appendChild(conditonSpanEl);

            upcomingDivEl.appendChild(upcomingSpanEl);
        });

        upcomingEl.appendChild(upcomingDivEl);
    });
}
attachEvents();