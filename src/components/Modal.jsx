import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/70 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

// Personal Tailwind note
/**
 * backdrop         : run if dialog elements run
 * bg-stone-900/70  : (/70) for adding a background that has some transparency
 * 
 */

// Personal Note
/**
 * 
 * flow concept
 * first we need to add forwardRef to linked ref from NewProject component.
 * 
 * ==========================================================================================================
 * createPortal sytax
 * createPortal(return element, modal-root | from index.html)
 * and as a second value, u should pass that html element, where this content should be rendered in
 * Purpose  : to create really flexible modal. More research about this concept
 *
 * useImperativeHandle
 * for expose a function that can be called from outside this component function, then useImperativeHandle.
 * 
 * to this hook, first pass the ref then the second value must provide a function that will be called by react.
 * where return an object that then expose any properties or function you want to expose to other components.
 * 
 * showModal method is method provide by the built-in dialog element.
 * open method is provide by component to other components.
 */
