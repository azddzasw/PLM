import { useState } from "react";

function RecipeList({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredRecipes = recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc" ? a.cost - b.cost : b.cost - a.cost
    );

  return (
    <div>
      <h2>Recipe List</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputStyle}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={inputStyle}
        >
          <option value="asc">Sort by Cost (Low to High)</option>
          <option value="desc">Sort by Cost (High to Low)</option>
        </select>
      </div>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong>: ${recipe.cost.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  marginRight: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default RecipeList;
