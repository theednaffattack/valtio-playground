import { Link } from "react-router-dom";
import { UpperNav } from "../components/upper-nav";

export function FourOhFour() {
  return (
    <div className="App">
      <UpperNav />
      <h1>Oops, Page Not Found</h1>
      <Link to="/">GO HOME</Link>
    </div>
  );
}
