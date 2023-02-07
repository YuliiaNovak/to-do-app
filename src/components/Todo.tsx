import classes from "./TodoItem.module.css";

const ToDoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
   props
) => {
   return (
      <li className={classes.item} onClick={props.onRemoveTodo}>
         {props.text}
      </li>
   );
};

export default ToDoItem;
