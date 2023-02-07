import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addTodoHandler = (taskText: string) => {
      const newTodo = new Todo(taskText);

      setTodos((prevTodos) => {
         return prevTodos.concat(newTodo);
      });
   };

   const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) => {
         return prevTodos.filter((todo) => todo.id !== todoId);
      });
   };

   return (
      <div>
         <NewTodo onAddToDo={addTodoHandler} />
         <Todos items={todos} onRemoveTodo={removeTodoHandler} />
      </div>
   );
}

export default App;
