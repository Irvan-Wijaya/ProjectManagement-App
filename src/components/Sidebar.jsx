import React from "react";
import Button from "./Button";

function Sidebar({
  projects,
  onStartAddProject,
  onSelectProject,
  onSelectProjectID,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-180">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass = "w-full text-left px-2 px-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          if(project.id === onSelectProjectID){
            cssClass += ' bg-stone-800 text-stone-200'
          }else{
            cssClass += ' text-stone-400'
          }

          return (
            <li key={project.id}>
              <button
                onClick={()=>onSelectProject(project.id)}
                className={cssClass}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;

// =====================================================================================================
// Personal Tailwind note
/**
 * w-1/3        : give it a width 1/3 of the available width
 * px-8         : give padding horizontal
 * py-16        : give padding vertical (4 rem)
 * bg-stone-900 : give blackground color with color code (check documentation)
 * text-stone-50: give text color                   -||-
 * rounded-r-xl : give border radius (t|r|b|l-size) also (tr | bl, etc)
 *
 * md:w-72      : add rule that only applies bigger screens to width 72 (18 rem)
 * mb-8         : give margin with (b | t | r | l)
 * md: text-base: text with normal size (default 16 px or 1 rem)
 * hover: ...   : u know la
 *
 * w-full       : to make sure that uses all width available
 */
