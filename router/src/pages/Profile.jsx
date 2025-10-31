import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };
  return <h1>Profile for: {name}</h1>;
}
