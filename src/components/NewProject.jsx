import { React, useRef } from "react";
import Input from "./Input";

function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSaveInput() {
    // always do this when working with refs (title.current)
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    // input validation
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex item-center justify-end gap-4 my-4">
        <li>
          <button
            className="py-2 text-stone-800 hover:text-stone-950"
            onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveInput}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover: bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;

// =====================================================================================================
// Personal Tailwind note
/**
 * w-[35rem]      : this means we can custom, with syntax supported by tailwind
 * flex           : class tailwind to horizontaly (u know what i mean)
 * item-center    : to place grid items on the end of their grid areas on both axes
 * justify-end    : to place to end of area (div)
 * gap-4          : to change the gap between rows and columns independently
 * my-4           : margin y axis (vertical)
 *  */
