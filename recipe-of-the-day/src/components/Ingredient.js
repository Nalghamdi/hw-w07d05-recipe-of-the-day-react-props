import React from 'react';

const Ingredients = (props) => {

    const ingredients = props.ingredient;

    return (
        <div className="ingredients">
            <p> {ingredients.ingredient} | {ingredients.amount}</p>
        </div>
    )
}

export default Ingredients;