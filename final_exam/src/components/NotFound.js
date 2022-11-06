import NotFoundStyles from "../components/NotFound.module.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className={NotFoundStyles.container}>
      <p className={NotFoundStyles.text}>404 Not Found</p>
      <p className={NotFoundStyles.linkText}>
        go to{" "}
        <Link className={NotFoundStyles.link} to="/">
          Home page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
