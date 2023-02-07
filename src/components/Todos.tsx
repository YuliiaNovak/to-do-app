import Todo from "../models/todo"
import ToDoItem from "./Todo"

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => <ToDoItem key={item.id} text={item.text} />)}
    </ul>
  )
}

export default Todos