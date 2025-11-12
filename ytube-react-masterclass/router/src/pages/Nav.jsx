import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/product/prod-1">Product 1</Link> |{" "}
      <Link to="/product/prod-2">Product 2</Link>
    </>
  );
}
