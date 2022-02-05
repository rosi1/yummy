import React from 'react';
import {useState, useEffect} from 'react';
import Recipes from './components/Recipes';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState(null);
  // const [recipes, setRecipes] = useState({ hits: []});
  const [calories, setCalories] = useState(1600);
  const [diet, setDiet] = useState("vegan")

  const handleCalories = (e)=>{
    setCalories(e.target.value);
  }

  const handleDiet = (value)=>{
    setDiet(value);
  }

  const getRecipes = () =>{
   
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=shellfish`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "da3723f82bmsh3dc5f8698b1e71ap11f51bjsn64bafde9c87c"
	}
})
.then(response => {
  console.log(response)
  return response.json();
})
.then(data=>{
  console.log(data);
  setRecipes(data);
  // 
})
.catch(err => {
	console.error(err);
});
};

  return (
    <div className="App">
      <div className="title">
        <h1>Yummy in my Tummy!</h1>
      </div>
      <div className="all-user-options">
        <input type="number" placeholder="Calories (e.g. 1600)" onChange={handleCalories}/>
        
        <select className="labels" onChange={(e)=> handleDiet(e.target.value)}>
          <option value="vegan">vegan</option>
          <option value="vegetarian">vegetarian</option>
          <option value="paleo">paleo</option>
          <option value="gluten-free">gluten-free</option>
          <option value="peanut-free">peanut-free</option>
          <option value="low-sugar">low-sugar</option>
          <option value="egg-free">egg-free</option>
          <option value="soy-free">soy-free</option>
        </select>
        
        <button onClick={getRecipes}>Daily Meal Plan</button>
      </div>
      
      <div className="recipes-list">
        {
         recipes && <Recipes recipes={recipes}/>
        }
      </div>
    </div> 
  );
}

export default App;
