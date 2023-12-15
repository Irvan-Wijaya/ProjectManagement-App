import React from "react";
import NewTask from "./NewTask";

function Task() {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-700 mb-4">Tasks</h2>
      NEW TASK
      <NewTask/>
      <p className="text-stone-800 my-4">
        This project does not have any task yet.
      </p>
      <ul></ul>
    </section>
  );
}

export default Task;
