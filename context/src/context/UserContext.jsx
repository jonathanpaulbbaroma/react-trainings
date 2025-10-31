import { createContext } from "react";
//import { useState } from "react";
import { useReducer } from "react";
export const UserContext = createContext();
function UserProvider({ children }) {
  //const [user, setUser] = useState("guest");
  const [state, dispatch] = useReducer(userReducer, { user: null });
  function userReducer(state, action) {
    switch (action.type) {
      case "login":
        return { user: action.payload };
      case "logout":
        return { user: "Guest" };
      default:
        return state;
    }
  }
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
