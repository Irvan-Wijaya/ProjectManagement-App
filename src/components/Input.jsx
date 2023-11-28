import React from "react";

function Input({ textarea, label, ...props }) {
const styledInput = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          className={styledInput}
          {...props}
        />
      ) : (
        <input className={styledInput} {...props} />
      )}
    </p>
  );
}

export default Input;

// {...props} on the semantic tag maybe for like disable or other pointer

// =====================================================================================================
// Personal Tailwind note
/**
 * flex-col         : to position flex items verticall
 * text-sm          : to make text smaller
 * 
 * styledInput
 * w-full           : to make sure that it takes entire available width 
 * p-1              : give padding all directions of 0.25 rem 
 * border-b-2       : a border to the bottom wih a width of 2 px 
 * rounded-sm       : rounder corners | radius
 * border-stone-300 : add color to border 
 * bg-stone-200     : add bg color of input 
 * 
 * for disable the default outline with focus to only bottom border highlighted
 * focus:outline-none: 
 * focus:border-stone-600:
  */