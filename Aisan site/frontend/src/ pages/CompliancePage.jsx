import { useState } from "react";
import { validateCompliance } from "../services/api";

function CompliancePage() {
  const [region, setRegion] = useState("");
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("");

  const handleValidate = async () => {
    const response = await validateCompliance({
      region,
      formula: formula.split(","),
    });
    setResult(response.message);
  };

  return (
    <div>
      <h1>Compliance Validation</h1>
      <input
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Region"
      />
      <input
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Formula (comma-separated)"
      />
      <button onClick={handleValidate}>Validate</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default CompliancePage;
