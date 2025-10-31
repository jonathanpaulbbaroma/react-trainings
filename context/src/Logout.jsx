import { useContext } from "react";
import { UserContext } from "./context/UserContext";
function Logout() {
  const { dispatch } = useContext(UserContext);

  return (
    <button
      className="bg-blue-400 text-white text-[14px] rounded px-3 py-1"
      onClick={() => dispatch({ type: "logout" })}
    >
      Logout
    </button>
  );
}
export default Logout;
