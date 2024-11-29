import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Perfume PLM System</h1>
      <p>Streamline your perfume creation process with powerful tools.</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Link to="/inspirations" style={cardStyle}>
          <h2>Inspiration Management</h2>
          <p>Store and organize perfume inspirations.</p>
        </Link>
        <Link to="/recipes" style={cardStyle}>
          <h2>Recipe Management</h2>
          <p>Design, simulate, and manage perfume recipes.</p>
        </Link>
        <Link to="/compliance" style={cardStyle}>
          <h2>Compliance Checker</h2>
          <p>Ensure your formulas meet global regulations.</p>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  display: "block",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textDecoration: "none",
  color: "black",
  textAlign: "center",
  width: "200px",
};

export default HomePage;
