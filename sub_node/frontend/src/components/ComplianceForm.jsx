import { useState } from "react";

function ComplianceForm({ onValidate }) {
  const [region, setRegion] = useState("");
  const [formula, setFormula] = useState("");
  const [error, setError] = useState("");

  const handleValidate = () => {
    if (!region || !formula) {
      setError("Region and formula fields cannot be empty.");
      return;
    }
    setError("");
    onValidate({ region, formula: formula.split(",") });
  };

  return (
    <div>
      <h2>Compliance Checker</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={formStyle}>
        <label>
          Region:
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={inputStyle}
          />
        </label>
        <label>
          Formula (comma-separated):
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            style={inputStyle}
          />
        </label>
        <button onClick={handleValidate} style={buttonStyle}>
          Validate
        </button>
      </div>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "300px",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "4px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default ComplianceForm;
