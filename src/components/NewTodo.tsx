import React, { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddToDo: (task: string) => void }> = (props) => {
   const taskRef = useRef<HTMLInputElement>(null);

   const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const enteredTask = taskRef.current!.value;

      if (enteredTask.trim().length === 0) {
         return;
      }

      props.onAddToDo(enteredTask);
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
