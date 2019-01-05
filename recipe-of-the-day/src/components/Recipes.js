import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {

    renderRecipes() {
        const recipeDetails = recipes.map((recipe,index) => {
            return (
            <Recipe recipes={recipe} key={index}/>
            );
        });
        return recipeDetails;
    }

    render() {
        return (
            <div className="recipes">
                <h1>Recipes</h1>
                {this.renderRecipes()};
            </div>
        );
    }
}

export default Recipes;

