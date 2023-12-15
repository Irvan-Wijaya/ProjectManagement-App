import React from "react";

function SelectedProject({ project, onDelete }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="p-4 mb-4 border-b-2 border-stone-300 shadow-xl bg-stone-100 rounded-md">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
    </div>
  );
}

export default SelectedProject;

// =====================================================================================================
// Personal Tailwind note
/**
 * whitespace-pre-wrap  : to preserve newlines and spaces within an element. Text will not be wrapped.
 * 
 */