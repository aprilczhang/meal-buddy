apiKey = "57991a26a3374e2689fb241bc4e5960a";
rUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=";
extra = "&ingredients=";

submitButton = document.getElementById("submit");
likes = document.getElementById("likes");
recipeimg = document.getElementById("recipeimg");
recipelink = document.getElementById("recipelink");
recipeimg1 = document.getElementById("recipeimg1");
recipelink1 = document.getElementById("recipelink1");
likebutton = document.getElementsByClassName("btn")[0];
likebutton1 = document.getElementsByClassName("btn1")[0];
cover = document.getElementById("cover");
meallist = document.getElementById("list");


submitButton.addEventListener("click", function () {
  likebutton.style.backgroundColor = '#EFECE4';
  likebutton1.style.backgroundColor = '#EFECE4';
  if (likes.value != "") {
    setRecipe(likes.value);
  }
  setTimeout(() => {cover.style.opacity = "0.0"; }, 500);
});

likebutton.addEventListener("click", function () {
  likebutton.style.backgroundColor = 'rgb(255, 202, 243)';
  const meal = document.createElement('li')
  meal.innerHTML = recipelink.innerText;
  meallist.appendChild(meal);
});

likebutton1.addEventListener("click", function () {
  likebutton1.style.backgroundColor = 'rgb(255, 202, 243)';
  const meal = document.createElement('li')
  meal.innerHTML = recipelink1.innerText;
  meallist.appendChild(meal);
});

async function setRecipe(ingredients) {
    let recipeData = await getRecipe(ingredients)
    const img = recipeData.img
    const lnk = recipeData.lnk
    const img1 = recipeData.img1
    const lnk1 = recipeData.lnk1

    recipelink.innerHTML = lnk;
    recipelink1.innerHTML = lnk1;
    recipeimg.src = img;
    recipeimg1.src = img1;
  }


async function apiCall(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}


async function getRecipe(ingredients) {
  let formattedUrl = rUrl + apiKey + extra + ingredients + "&number=5";
  let data = await apiCall(formattedUrl)
  return {
    "img": data[0].image,
    "lnk": data[0].title,
    "img1": data[1].image,
    "lnk1": data[1].title
  }
}


