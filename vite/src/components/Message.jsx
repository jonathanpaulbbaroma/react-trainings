export default function Message() {
  function handleClick() {
    alert("Button clicked!");
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}
