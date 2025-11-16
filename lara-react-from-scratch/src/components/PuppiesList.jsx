import PuppyCard from "./PuppyCard.jsx";

export default function PuppiesList({ puppies, setPuppies }) {
  function handleClick(selectedPuppy) {
    // Toggle liked status
    selectedPuppy.liked = !selectedPuppy.liked;
    setPuppies([...puppies]);
  }
  return (
    <>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Puppy Card */}
        {puppies.map((puppy, index) => (
          <PuppyCard
            key={index}
            puppy={puppy}
            onClick={() => handleClick(puppy)}
          />
        ))}
      </ul>
    </>
  );
}
