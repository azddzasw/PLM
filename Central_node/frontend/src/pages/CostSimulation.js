import React, { useEffect, useState } from "react";
import { getCostSimulation } from "../services/api";

function CostSimulation() {
  const [simulation, setSimulation] = useState(null);

  useEffect(() => {
    const fetchSimulation = async () => {
      const data = await getCostSimulation();
      setSimulation(data);
    };
    fetchSimulation();
  }, []);

  return (
    <div>
      <h2>Cost Simulation</h2>
      {simulation ? (
        <div>
          <p>Material Costs: ${simulation.material_costs}</p>
          <p>Labor Costs: ${simulation.labor_costs}</p>
          <p>Total Cost: ${simulation.total_cost}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CostSimulation;
