rUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=';
extra = "&ignorePantry=true&ranking=1";
//extraa = "apples%2Cflour%2Csugar&number=5"

submitButton = document.getElementById("submit");
likes = document.getElementById("likes");
recipeimg = document.getElementById("recipeimg");
recipelink = document.getElementById("recipelink");

submitButton.addEventListener("click", function () {
  if (likes.value != "") {
    setRecipe(likes.value);
  }
});

async function setRecipe(ingredients) {
    let recipeData = await getRecipe(ingredients)
    const img = recipeData.img
    const lnk = recipeData.lnk
    recipelnk.innerHTML = lnk;
    recipeimg.innerHTML = img;
  }


async function apiCall(url) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd525aa0c5emsh30cae1757cc95afp1cb69ejsn5a56dd9bdd05',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}


async function getRecipe(ingredients) {
  const str = ingredients.split(",");
  const spliced = str[0] + "%2C" + str[1] + "%2C" + str[2] + "&number=5";
  let formattedUrl = rUrl + spliced + extra;
  let data = await apiCall(formattedUrl)
  return {
    "img": data[0].image,
    "lnk": data[0].title
  }
}