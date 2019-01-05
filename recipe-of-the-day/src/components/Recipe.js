import React from 'react';


const Recipe = (props) => {
    
    const recipeDetails = props.recipes;

    return (
        <div className="recipe">
            <li>Name: {recipeDetails.name}</li>
            <li>Serves: {recipeDetails.servings}</li>
            <li>Category: {recipeDetails.category}</li>
            <hr></hr>
        </div>
    )
}

export default Recipe;
