export class SomeAPI {
  async getCocktailByName(drinkName) {
    try {
      let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}/search.php?s=${drinkName}`);
      let jsonifiedResponse = await response.json();
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
