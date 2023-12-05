import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-stone-400 bg-stone-700 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-100"
      {...props}>
      {children}
    </button>
  );
}

export default Button;
