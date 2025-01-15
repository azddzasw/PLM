const API_BASE_URL = "http://127.0.0.1:8080";

export const getRecipes = async () => {
  const response = await fetch(`${API_BASE_URL}/recipes`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
};

export const addRecipe = async (recipe) => {
  const response = await fetch(`${API_BASE_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });
  if (!response.ok) {
    throw new Error("Failed to add recipe");
  }
  return response.json();
};
