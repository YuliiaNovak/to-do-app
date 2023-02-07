import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
   const todosCtx = useContext(TodosContext);

   const taskRef = useRef<HTMLInputElement>(null);

   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const enteredTask = taskRef.current!.value;

      if (enteredTask.trim().length === 0) {
         return;
      }

      todosCtx.addTodo(enteredTask);
   };

   return (
      <form onSubmit={onSubmit} className={classes.form}>
         <label htmlFor="task">Todos</label>
         <input id="task" type="text" ref={taskRef} />
         <button>Add Todo</button>
      </form>
   );
};

export default NewTodo;
