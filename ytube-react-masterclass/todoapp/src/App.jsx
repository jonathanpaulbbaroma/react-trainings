import "../src/css/Main.css";
import ToDo from "./component/ToDo";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
