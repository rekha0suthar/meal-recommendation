import React from 'react';
import '../css/recipe-model.css';

const RecipeModel = ({ setShowRecipe, recipe }) => {
  return (
    <div class="overlay" onClick={() => setShowRecipe(false)}>
      <div class="popup" onClick={(e) => e.stopPropagation()}>
        <span class="popup-close" onClick={() => setShowRecipe(false)}>
          &times;
        </span>
        {recipe.map((recipe) => {
          return (
            <div className="recipe-model">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <div className="recipe-meal-details">
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
                {recipe.recipe.dietLabels.length > 0 && (
                  <>
                    {' '}
                    <h4>Diet Labels: </h4>
                    <ul>
                      {recipe.recipe.dietLabels?.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>{' '}
                  </>
                )}
                <h4>Ingredients List: </h4>
                <ul>
                  {recipe.recipe.ingredientLines.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeModel;
