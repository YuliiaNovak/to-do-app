import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addToDoHandler = (taskText: string) => {
      const newTodo = new Todo(taskText);

      setTodos((prevTodos) => {
         return prevTodos.concat(newTodo);
      });
   };

   return (
      <div>
         <NewTodo onAddToDo={addToDoHandler} />
         <Todos items={todos} />
      </div>
   );
}

export default App;
