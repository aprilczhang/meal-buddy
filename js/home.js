apiKey = "57991a26a3374e2689fb241bc4e5960a";
rUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=";
extra = "&ingredients=";

submitButton = document.getElementById("submit");
likes = document.getElementById("likes");
recipeimg = document.getElementById("recipeimg");
recipelink = document.getElementById("recipelink");
recipeimg1 = document.getElementById("recipeimg1");
recipelink1 = document.getElementById("recipelink1");

submitButton.addEventListener("click", function () {
  if (likes.value != "") {
    setRecipe(likes.value);
  }
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


