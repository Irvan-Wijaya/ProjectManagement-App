import React from "react";
import Button from "./Button";

function Sidebar({onStartAddProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-180">
        Your Projects
      </h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
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
 */
