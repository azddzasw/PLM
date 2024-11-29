import { useEffect, useState } from "react";
import { getRecipes, addRecipe } from "../services/api";

function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: "", cost: 0 });

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  const handleAddRecipe = async () => {
    await addRecipe(newRecipe);
    setRecipes(await getRecipes());
    setNewRecipe({ name: "", cost: 0 });
  };

  return (
    <div>
      <h1>Recipe Management</h1>
      <input
        value={newRecipe.name}
        onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
        placeholder="Recipe Name"
      />
      <input
        value={newRecipe.cost}
        onChange={(e) => setNewRecipe({ ...newRecipe, cost: Number(e.target.value) })}
        placeholder="Cost"
        type="number"
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>: ${recipe.cost.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipePage;
