import { useState } from "react";
import Search from "./Search.jsx";
import Shortlist from "./Shortlist.jsx";
import PuppiesList from "./PuppiesList.jsx";
import PuppyForm from "./PuppyForm.jsx";
import puppiesData from "../data/Puppies.js";
export default function Main() {
  const [puppies, setPuppies] = useState(puppiesData);
  return (
    <>
      <main>
        <>
          <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search puppies={puppiesData} setPuppies={setPuppies} />
            <Shortlist puppies={puppies} setPuppies={setPuppies} />
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-2"></div>

          <PuppiesList puppies={puppies} setPuppies={setPuppies} />
          <PuppyForm />
        </>
      </main>
    </>
  );
}
