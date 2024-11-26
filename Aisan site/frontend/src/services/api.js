import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getInspirations = () => axios.get(`${API_URL}/inspiration`).then((res) => res.data);
export const addInspiration = (data) => axios.post(`${API_URL}/inspiration`, data);

export const getRecipes = () => axios.get(`${API_URL}/recipes`).then((res) => res.data);
export const addRecipe = (data) => axios.post(`${API_URL}/recipes`, data);

export const validateCompliance = (data) =>
  axios.post(`${API_URL}/compliance`, data).then((res) => res.data);
