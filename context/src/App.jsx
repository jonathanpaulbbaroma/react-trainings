import { createContext } from "react";
import Checkout from "./Checkout";
function App() {
  const userContext = createContext("");
  return (
    <div className="text-center mt-5">
      <h1 className="text-4xl font-bold">My App</h1>
      <userContext.Provider value="John Doe">
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;
