function solve() {
  let wrapper = document.querySelector(".wrapper tbody");
  let buttons = document.querySelectorAll("#exercise button");
  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate(ev) {
    let furniture = JSON.parse(ev.currentTarget.previousElementSibling.value);


    for (const item of furniture) {
      let trElement = document.createElement('tr');

      let pictureTdElement = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.src = item["img"];
      pictureTdElement.appendChild(imgElement);
      trElement.appendChild(pictureTdElement);

      let nameTdElement = document.createElement("td");
      let nameParagraph = document.createElement("p");
      nameParagraph.textContent = item["name"];
      nameTdElement.appendChild(nameParagraph);
      trElement.appendChild(nameTdElement);

      let priceTdElement = document.createElement("td");
      let priceParagraph = document.createElement("p");
      priceParagraph.textContent = item["price"];
      priceTdElement.appendChild(priceParagraph);
      trElement.appendChild(priceTdElement);

      let decFactorTdElement = document.createElement("td");
      let decFactorParagraph = document.createElement("p");
      decFactorParagraph.textContent = item["decFactor"];
      decFactorTdElement.appendChild(decFactorParagraph);
      trElement.appendChild(decFactorTdElement);

      let checkboxTdElement = document.createElement("td");
      let checkboxInputElement = document.createElement("input");
      checkboxInputElement.type = "checkbox";
      checkboxTdElement.appendChild(checkboxInputElement);
      trElement.appendChild(checkboxTdElement);

      wrapper.appendChild(trElement);
    }
  }

  function buy(ev) {
    let textareaElement = ev.currentTarget.previousElementSibling;
    let inputFields = Array.from(textareaElement.previousElementSibling.querySelectorAll("input"));
    let boughtFurniture = [];
    let totalPrice = 0;
    let decFactors = 0;

    for (const field of inputFields) {
      if (field.checked) {
        let elements = Array.from(field.parentNode.parentNode.children);
        console.log(elements);
        boughtFurniture.push(elements[1].textContent);
        totalPrice += Number(elements[2].textContent);
        decFactors += Number(elements[3].textContent);
      }
    }
    textareaElement.value = `Bought furniture: ${boughtFurniture.join(", ")}\n`;
    textareaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textareaElement.value += `Average decoration factor: ${decFactors / boughtFurniture.length}`;
  }
}