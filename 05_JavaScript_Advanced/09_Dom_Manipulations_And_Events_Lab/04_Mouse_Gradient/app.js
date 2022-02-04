function attachGradientEvents() {
    let gradientEl = document.getElementById('gradient');
    let resultEl = document.getElementById('result');

    const gradientMousemoveHandler = (e) => {
       let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
       resultEl.textContent = `${percent}%`;
    };

    gradientEl.addEventListener('mousemove', gradientMousemoveHandler);
    gradientEl.addEventListener('mouseout', gradientOut);

    function gradientOut(event) {
        resultEl.textContent = '';
    }

}