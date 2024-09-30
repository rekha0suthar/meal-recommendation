import React from 'react';
import '../css/recipe-model.css';

const RecipeModel = ({ setShowRecipe, recipe }) => {
  return (
    <div className="overlay" onClick={() => setShowRecipe(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={() => setShowRecipe(false)}>
          &times;
        </span>
        {recipe.map((recipe) => {
          return (
            <div className="recipe-model">
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <div className="recipe-meal-details">
                <h2>{recipe.recipe.label}</h2>
                <div className="wrapper">
                  <p>
                    <strong>Total Calories:</strong>{' '}
                    {recipe.recipe.calories.toFixed(0) + ' kcal'}
                  </p>
                  {recipe.recipe.cuisineType.map((item) => (
                    <p>
                      <strong>Cuisine Type: </strong> {item}
                    </p>
                  ))}
                </div>
                <div className="wrapper">
                  {recipe.recipe.dishType?.map((item) => (
                    <p>
                      <strong>Dish Type:</strong> {item}
                    </p>
                  ))}
                  {recipe.recipe.mealType.map((item) => (
                    <p>
                      <strong>Meal Type: </strong> {item}
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

                <h4>Nutrients List: </h4>
                <ul>
                  <li>
                    {recipe.recipe.totalNutrients.CA.label} -{' '}
                    {recipe.recipe.totalNutrients.CA.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.CA.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.CHOLE.label} -{' '}
                    {recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.CHOLE.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.ENERC_KCAL.label} -{' '}
                    {recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(
                      2
                    )}{' '}
                    {recipe.recipe.totalNutrients.ENERC_KCAL.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.FAT.label} -{' '}
                    {recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.FAT.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.PROCNT.label} -{' '}
                    {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.PROCNT.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.SUGAR.label} -{' '}
                    {recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.SUGAR.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.FIBTG.label} -{' '}
                    {recipe.recipe.totalNutrients.FIBTG.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.FIBTG.unit}
                  </li>
                  <li>
                    {recipe.recipe.totalNutrients.CHOCDF.label} -{' '}
                    {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}{' '}
                    {recipe.recipe.totalNutrients.CHOCDF.unit}
                  </li>
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
