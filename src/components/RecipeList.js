import React from 'react';
import Recipe from './Recipe';
import Spinner from '../assets/loading.gif';

const RecipeList = ({ loading, recipes, getRecipe, searchQuery }) => {
  return (
    <div className="recipe-list">
      {loading ? (
        <div className="spinner">
          <img src={Spinner} alt="Loading ..." />
        </div>
      ) : recipes.length > 0 ? (
        recipes.map((recipe) => (
          <>
            <Recipe
              key={recipe.recipe.label}
              recipe={recipe}
              loading={loading}
              onClickHandler={getRecipe}
            />
          </>
        ))
      ) : (
        <h1 className="dummy-message">No recipes found for "{searchQuery}".</h1>
      )}
    </div>
  );
};

export default RecipeList;
