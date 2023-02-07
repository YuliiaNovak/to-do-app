import classes from "./TodoItem.module.css";

const ToDoItem: React.FC<{ text: string }> = (props) => {
   return <li className={classes.item}>{props.text}</li>;
};

export default ToDoItem;
