import { useState } from "react";
function Form({ ToDos, setToDos }) {
  const [ToDo, setToDo] = useState({ name: "", completed: false });
  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...ToDos, ToDo]);
    setToDo({ name: "", completed: false });
  }
  return (
    <>
      <form className="bg-white rounded-lg py-8 shadow-md w-[50%] flex flex-row justify-center gap-4">
        <input
          type="text"
          className="text-zinc-500 border border-[#dedede] focus:border-[#dedede] active:border-[#dedede] w-[500px] h-[50px] text-[21px] rounded-[5px] p-2.5"
          placeholder="Enter a To Do item..."
          value={ToDo.name}
          onChange={(e) => setToDo({ name: e.target.value, completed: false })}
        />
        <button
          className="text-white bg-yellow-300 hover:bg-yellow-200 text-[18px] font-bold py-2.5 px-10 rounded-[5px]"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
