import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../App.css'
const NavBarOne = () => {
  return (
    <nav>
      <Link className="site-title" to="/">
        Testing
      </Link>
      <ul>
        <Link to="/"> Home </Link>
      </ul>
      <ul>
        <CustomLink to="/map">Map Vgi</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  //  make sure entire url matches: absolute paths
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBarOne;
