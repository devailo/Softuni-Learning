window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addClickHandler);

    function addClickHandler(e) {
        e.preventDefault();
        console.log('button clicked');
    }
}
