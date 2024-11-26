import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { getRecipes } from "../services/api";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Button variant="primary" className="mb-3">
        <Link to="/add-recipe" className="text-white text-decoration-none">
          Add New Recipe
        </Link>
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Cost</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients.join(", ")}</td>
              <td>{recipe.cost}</td>
              <td>{recipe.version}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RecipeList;
