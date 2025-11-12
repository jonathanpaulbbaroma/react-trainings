import { useContext } from "react";
import { UserContext } from "./context/UserContext";
export default function Checkout() {
  const { user } = useContext(UserContext);
  return (
    <div className="mt-3">
      <h2 className="text-2xl font-semibold">Checkout Page</h2>
      <p>User: {user}</p>
    </div>
  );
}
