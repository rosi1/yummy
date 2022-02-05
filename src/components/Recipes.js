import React from 'react';
import Meal from './Meal';

const Recipes = ({recipes}) => {
    const nutrients = recipes.nutrients;

  return(
    <>
      <section className="nutrients">
        <ul>
            <li>Calories: {nutrients.calories.toFixed()}</li>
            <li>Protein: {nutrients.protein}</li>
            <li>Fat: {nutrients.fat}</li>
            <li>Carbohydrates: {nutrients.carbohydrates.toFixed()}</li>
        </ul>
      </section>
      <section className="meals">
        {recipes.meals.map((meal)=>{
            return <Meal key={meal.id} meal={meal}/>
        })}
      </section>
    </>
  ) 
};

export default Recipes;