import React, { useEffect, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Search from './components/Search';
import './App.css';
import RecipeModel from './components/RecipeModel';
import RecipeList from './components/RecipeList';
import Header from './components/Header';

const API_URL = 'https://api.edamam.com/search'; // Corrected API URL
const API_KEY = 'ad5484c78bad591ed696677458768aff';
const APP_ID = '66ebbe62'; // Replace with your App ID

const App = () => {
  const [searchQuery, setSearchQuery] = useState('noodles');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const fetchData = debounce(async () => {
      try {
        setShowRecipe(false);
        setIsOffline(false);
        setLoading(true);

        const response = await axios.get(
          `${API_URL}?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}`
        );
        setRecipes(response.data.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }, 300);

    fetchData();

    // Cleanup function to cancel debounce on unmount or when searchQuery changes
    return () => {
      fetchData.cancel();
    };
  }, [searchQuery, setLoading, setRecipes]);

  const getRecipe = (recipeTitle) => {
    const filteredRecipe = recipes.filter(
      (recipe) => recipe.recipe.label === recipeTitle
    );
    setRecipe(filteredRecipe);
    setShowRecipe(true);
  };

  const toggleHandler = async () => {
    const getOfflineData = async (query) => {
      try {
        setShowRecipe(false); // Hide recipes while loading
        // Set loading state to true

        const response = await axios.get(
          `${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
        );
        return response.data.hits; // Return the recipes
      } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array on error
      }
    };

    // Toggle the offline/online state
    setIsOffline(!isOffline);
    setLoading(true);

    if (!isOffline) {
      // Offline mode: fetch random recipes
      try {
        const [cakeRecipes, biryaniRecipes, pizzaRecipes] = await Promise.all([
          getOfflineData('Cake'),
          getOfflineData('biryani'),
          getOfflineData('pizza'),
        ]);

        // Merge the results into one array
        const randomRecipes = [
          ...cakeRecipes,
          ...biryaniRecipes,
          ...pizzaRecipes,
        ];

        // Update the recipes with random offline data
        setRecipes(randomRecipes);
      } catch (error) {
        console.error('Error in toggleHandler (offline):', error);
      }
    } else {
      // Online mode: fetch data based on the current search query
      try {
        const defaultData = await getOfflineData(searchQuery);
        setRecipes(defaultData); // Set the recipes to online data
      } catch (error) {
        console.error('Error in toggleHandler (online):', error);
      }
    }
    setLoading(false); // Turn off loading when done
  };

  return (
    <div className="app">
      <div className="nav-header">
        <h1>Recipe App</h1>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      {recipes.length > 0 && !loading && (
        <Header
          isOffline={isOffline}
          searchQuery={searchQuery}
          toggleHandler={toggleHandler}
        />
      )}
      {/* Render your recipes here */}

      <RecipeList
        loading={loading}
        recipes={recipes}
        getRecipe={getRecipe}
        searchQuery={searchQuery}
      />
      {showRecipe && (
        <RecipeModel setShowRecipe={setShowRecipe} recipe={recipe} />
      )}
    </div>
  );
};

export default App;
