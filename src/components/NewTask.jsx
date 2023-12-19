import React, { useState } from "react";

function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('')

  function handleChange(event){
    setEnteredTask(event.target.value)
  }

  function handleClick(){
    if(enteredTask.trim() === ''){
      return
    }
    onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add</button>
    </div>
  );
}

export default NewTask;
