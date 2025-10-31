import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
export default function Login() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login", payload: value });
  }
  return (
    <div className="mt-5">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-blue-400 text-white text-[14px] rounded px-3 py-1"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
