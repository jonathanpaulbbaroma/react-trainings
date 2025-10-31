import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Details from "./components/Details";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("658615");
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} setFoodID={setFoodID} />
        <Details foodID={foodID} />
      </Container>
    </>
  );
}

export default App;
