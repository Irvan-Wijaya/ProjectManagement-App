import React from "react";

function Input({ textarea, label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

export default Input;

// {...props} on the semantic tag maybe for like disable or other pointer