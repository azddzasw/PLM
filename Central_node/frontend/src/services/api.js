import axios from "axios";

const API_URL = "http://localhost:8080"; // 后端 API URL

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipe);
    return response.data;
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

export const getCostSimulation = async () => {
  try {
    const response = await axios.get(`${API_URL}/costs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cost simulation:", error);
  }
};
