function ToDoItems({ items, setToDos }) {
  function handleDelete(item) {
    setToDos(items.filter((toDo) => toDo !== item));
  }
  function handleClick(item) {
    item.completed = !item.completed;
    setToDos([...items]);
  }
  const sortedItems = items
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  return (
    <div className="ToDoItems border-t-2 border-yellow-400 bg-white rounded-lg p-8 shadow-md w-[50%] mt-[50px] text-zinc-600">
      <h1 className="text-[18px] text-center font-bold text-2xl text-zinc-600">
        ToDo List
      </h1>
      <ul>
        {sortedItems.map((item, index) => (
          <li
            key={index}
            className="last:border-b-0 border-b border-zinc-200 pb-5 mt-5"
          >
            <span
              className={`cursor-pointer ${
                item.completed ? "line-through" : ""
              }`}
              // onclick={() => {
              //   item.completed = !item.completed;
              //   setToDos([...items]);
              // }}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </span>
            <span className="float-right">
              <button
                className="pt-0 pb-[5px] px-2.5  bg-yellow-300 hover:bg-yellow-200  text-white"
                onClick={() => handleDelete(item)}
              >
                x
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItems;
