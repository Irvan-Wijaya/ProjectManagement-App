import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

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
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

// Personal Note
/**
 * createPortal sytax
 * createPortal(return element, modal-root | from index.html)
 * and as a second value, u should pass that html element, where this content should be rendered in
 * Purpose  : to create really flexible modal. More research about this concept
 *
 */
