import React, { useState, useEffect } from 'react';

export const Meal = ({meal}) => {
    const [img,setImg] = useState('');

    useEffect(() =>{
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${meal.id}/information`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "da3723f82bmsh3dc5f8698b1e71ap11f51bjsn64bafde9c87c"
	}
})
.then(response => {
	// console.log(response);
    return response.json()
})
.then(data => {
    setImg(data.image)
})
.catch(err => {
	console.error(err);
});
},[meal.id])

  return(
    <div className="meal-info">
      <h3 className="meal-title">{meal.title}</h3>
      <img className="recipe-img" src={img} alt="recipe-img"/>
      <div className="countaty-list">
        <ul>
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Servings: {meal.servings}</li>
        </ul>
      </div>
      <a href={meal.sourceUrl}>Go to recipe</a>
    </div>
  )
};

const imgStyle ={
    height:'200px',
    width:'200px'
}

export default Meal;