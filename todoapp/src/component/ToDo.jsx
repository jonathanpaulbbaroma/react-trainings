import { useState } from "react";
import Form from "./Form.jsx";
import ToDoItems from "./ToDoItems.jsx";
import Footer from "./Footer.jsx";

function ToDo() {
  const [ToDos, setToDos] = useState([]);
  const completedToDos = ToDos.filter((item) => item.completed).length;
  const notCompletedToDos = ToDos.length - completedToDos;
  return (
    <div className="flex flex-col items-center mt-[50px]">
      <Form ToDos={ToDos} setToDos={setToDos} />
      <ToDoItems items={ToDos} setToDos={setToDos} />
      <Footer
        completed={completedToDos}
        total={ToDos.length}
        notCompleted={notCompletedToDos}
      />
    </div>
  );
}
export default ToDo;
