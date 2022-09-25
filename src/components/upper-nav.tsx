import { Link } from "react-router-dom";

export function UpperNav() {
  return (
    <nav className="horizontal-nav">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/valtio-demo">Valtio demo</Link>
        </li>
      </ul>
    </nav>
  );
}
