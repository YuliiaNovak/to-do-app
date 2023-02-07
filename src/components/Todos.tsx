import Todo from "../models/todo";
import ToDoItem from "./Todo";

import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
   return (
      <ul className={classes.todos}>
         {props.items.map((item) => (
            <ToDoItem key={item.id} text={item.text} />
         ))}
      </ul>
   );
};

export default Todos;
