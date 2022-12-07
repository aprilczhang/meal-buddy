const food = document.getElementById("fooditem");
const foodList = document.getElementById("items");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

submitButton.addEventListener("click", () => {
    if (food.value != "") {
    const f = document.createElement('li')
    f.innerHTML = food.value;
    foodList.appendChild(f);
    }
});

clearButton.addEventListener("click", () => {
    foodList.replaceChildren();
    food.value = "";
});