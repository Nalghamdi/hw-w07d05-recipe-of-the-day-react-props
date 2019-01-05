import React, { Component } from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay'
import Ingredient from './Ingredient';


class RecipeOfTheDay extends Component {

    renderIngredients(){
        const recipeOfTheDayIngredients = recipeOfTheDay.ingredients.map((ingredient, index) => {
            return (
            <Ingredient ingredient={ingredient} key={index}/>
            )
        })
        return recipeOfTheDayIngredients;
    }

    render() {
        return(
            <div className="recipeOfTheDay">
                <h2>Recip of the Day</h2>
                <h2>{recipeOfTheDay.name}</h2>
                <h2>Description: </h2>
                <p>{recipeOfTheDay.description}</p>
                <h2>Ingredients: </h2>
                {this.renderIngredients()}
            </div>
        )
    }
}

export default RecipeOfTheDay; 