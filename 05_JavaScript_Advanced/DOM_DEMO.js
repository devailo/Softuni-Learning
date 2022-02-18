function demo() {
    let h1Element = document.getElementsByTagName('h1')

    for (const iterator of h1Element) {
        console.log(iterator.textContent);
        iterator.textContent = iterator.textContent + ` ${counter} `;
    }
    if (h1Element[1].style.display === 'none') {
        h1Element[1].style.display = '';
    } else {
        h1Element[1].style.display = 'none';
    }
    counter++;
    let text = 'gugu gaga';
    let newEl = document.createElement("div");
    newEl.appendChild(document.createTextNode(text));
    h1Element[1].parentNode.appendChild(newEl);

    newEl.addEventListener('onclick', clickMe);

    function clickMe(event){
        newEl.textContent.style.color = red;
    }
}