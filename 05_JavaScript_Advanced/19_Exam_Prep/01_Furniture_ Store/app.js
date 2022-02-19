window.addEventListener('load', solve);

function solve() {
    const addBtnElement = document.getElementById('add');

    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');
    let totalPriceElement = document.querySelector('.total-price');

    addBtnElement.addEventListener('click', addClickHandler);

    function addClickHandler(e) {
        e.preventDefault();

        let model = modelElement.value;
        let description = descriptionElement.value;
        let year = Number(yearElement.value);
        let price = Number(priceElement.value);

        modelElement.value = '';
        descriptionElement.value = '';
        yearElement.value = '';
        priceElement.value = '';

        if (!model || !description) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }

        let trRowElement = document.createElement('tr');
        trRowElement.classList.add('info');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actoinsCellElement = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        let buyBtn = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');

        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                e.currentTarget.textContent = 'Less Info';
                contentsRowElement.style.display = 'contents';
            } else {
                e.currentTarget.textContent = 'More Info';
                contentsRowElement.style.display = 'none';
            }
        });

        buyBtn.textContent = 'Buy it';
        buyBtn.classList.add('buyBtn');
        buyBtn.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            trRowElement.remove();
            contentsRowElement.remove();
        });

        actoinsCellElement.appendChild(moreInfoBtn);
        actoinsCellElement.appendChild(buyBtn);

        trRowElement.appendChild(modelCellElement);
        trRowElement.appendChild(priceCellElement);
        trRowElement.appendChild(actoinsCellElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(trRowElement);
        furnitureListElement.appendChild(contentsRowElement);


    }
}