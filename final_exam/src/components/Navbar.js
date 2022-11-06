import NavStyles from "./Navstyles.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={NavStyles.nav}>
      <Link className={NavStyles.link} to="/">
        Custom Hook
      </Link>
      <Link to="/useReducer" className={NavStyles.link}>
        UseReducer hook
      </Link>
    </nav>
  );
}

export default Navbar;
