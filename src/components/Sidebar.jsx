import React from "react";

function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-180">
        Your Projects
      </h1>
      <div>
        <button className="px-4 py-2 text-stone-400 bg-stone-700 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
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
 */
