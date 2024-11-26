import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/inspirations">Inspirations</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/compliance">Compliance</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
