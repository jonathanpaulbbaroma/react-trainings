import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9e593dcf27dd4167b77807a65e54dca2";
//const API_KEY = "5cc2015911604a03b0d5b5129939e88a";

function Search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setFoodData(data.results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    fetchFood();
  }, [query, setFoodData]);
  return (
    <div className="flex justify-center items-center p-8">
      <input
        className="outline-none focus:outline-none border border-gray-300
      rounded-md px-4 py-2 w-1/2 text-xl"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
      />
    </div>
  );
}

export default Search;
