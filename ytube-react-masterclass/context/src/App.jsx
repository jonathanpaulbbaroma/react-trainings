import Checkout from "./Checkout";
import Login from "./Login";
import UserProvider from "./context/UserContext";
import Logout from "./Logout";
import useDisplayMessage from "./hooks/useDisplayMessage";
function App() {
  const [message] = useDisplayMessage(
    '<h1 className="text-4xl font-bold">My App</h1>Welcome to the App!'
  );
  return (
    <div className="text-center mt-5">
      <div dangerouslySetInnerHTML={{ __html: message }}></div>
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}
export default App;
