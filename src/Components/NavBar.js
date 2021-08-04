import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <Link to="/items">
        <h3>Items</h3>
      </Link>
    </nav>
  );
};

export default NavBar;
