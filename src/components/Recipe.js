import React from 'react';
import '../css/recipe.css';

const Recipe = ({ key, recipe, loading, onClickHandler }) => {
  return (
    <>
      {recipe && !loading ? (
        <div className="recipe-card" key={key}>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <div className="meal-details">
            <h2>{recipe.recipe.label}</h2>
            <p>
              <strong>Total Calories:</strong>{' '}
              {recipe.recipe.calories.toFixed(0) + ' kcal'}
            </p>
            <div>
              {recipe.recipe.dishType?.map((item) => (
                <p>
                  <strong>Dish Type:</strong> {item}
                </p>
              ))}
            </div>

            <div>
              {recipe.recipe.mealType.map((item) => (
                <p>
                  <strong>Meal Type: </strong> {item}
                </p>
              ))}
            </div>

            <div>
              {recipe.recipe.cuisineType.map((item) => (
                <p>
                  <strong>Cuisine Type: </strong> {item}
                </p>
              ))}
            </div>
            <button
              className="show-more-btn"
              onClick={() => onClickHandler(recipe.recipe.label)}
            >
              Show More
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Recipe;
