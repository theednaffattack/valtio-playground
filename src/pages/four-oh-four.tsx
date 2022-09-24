import { Link } from "react-router-dom";

export function FourOhFour() {
  return (
    <div className="App">
      <h1>Oops, Page Not Found</h1>
      <Link to="/">GO HOME</Link>
    </div>
  );
}
