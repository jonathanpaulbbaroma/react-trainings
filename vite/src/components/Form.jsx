import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome ${person.firstName} ${person.lastName} !!!`);
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Form</h2>
      <form>
        <input
          type="text"
          placeholder="Enter your first name"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      <div>
        Welcome {person.firstName} {person.lastName} !!!
      </div>
    </div>
  );
}
