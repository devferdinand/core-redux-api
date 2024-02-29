import { createStore, combineReducers } from 'redux';
import allRecipesData from './data.js';

// Action Creators
////////////////////////////////////////

export const addRecipe = (recipe) => {
    return { 
        type: 'favoriteRecipes/addRecipe', 
        payload: recipe 
    };
}

export const removeRecipe = (recipe) => {
    return { 
        type: 'favoriteRecipes/removeRecipe', 
        payload: recipe 
    };
}

export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }; 
}

export const loadData = () => {
    return { 
        type: 'allRecipes/loadData', 
        payload: allRecipesData
    }; 
}

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
    switch(action.type) {
        case 'allRecipes/loadData':
            return action.payload
        default:
            return allRecipes;
    }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch(action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default: 
            return searchTerm;
    }
}

// Create the initial state for this reducer.
const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
    switch(action.type) {
        // Add action.type cases here.
        case 'favoriteRecipes/addRecipe':
            return [...favoriteRecipes, action.payload];
        case 'favoriteRecipes/removeRecipe':
            return favoriteRecipes.filter((recipe) => {
                recipe.id !== action.payload.id
            })
            
        // Don't forget to set the default case!
        default:
            return favoriteRecipes;
    }
}


const reducers = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer
}

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);