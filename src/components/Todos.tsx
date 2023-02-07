import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import ToDoItem from "./Todo";

import classes from "./Todos.module.css";

const Todos: React.FC = () => {
   const TodosCtx = useContext(TodosContext);
   return (
      <ul className={classes.todos}>
         {TodosCtx.items.map((item) => (
            <ToDoItem
               key={item.id}
               text={item.text}
               onRemoveTodo={TodosCtx.removeTodo.bind(null, item.id)}
            />
         ))}
      </ul>
   );
};

export default Todos;
