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
            });
        // Don't forget to set the default case!
        default:
            return favoriteRecipes;
    }
}