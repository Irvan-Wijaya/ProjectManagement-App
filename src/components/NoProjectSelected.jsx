import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

function NoProjectSelected(props) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="Task List Empty"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
      <Button onClick={props.onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;

// =====================================================================================================
// Personal Tailwind note
/**
 * object-contain     : Resize an elements contents to stay contained within its container.
 */