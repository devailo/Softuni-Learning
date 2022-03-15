import * as request from './request.js';

const baseUrl = 'http://localhost:3030';
const recipesUrl = `${baseUrl}/data/recipes`;
const loginUrl = `${baseUrl}/users/login`;

export const getRecipes = () => request.get(recipesUrl).then(data => Object.values(data));

export const createRecipe = (recipeData) => request.post(recipesUrl, data);

export const login = (email, password) => request.post(loginUrl, { email, password });


