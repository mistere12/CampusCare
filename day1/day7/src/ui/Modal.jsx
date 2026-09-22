import {
  useEffect,
  useRef,
} from "react";

import { createPortal } from "react-dom";

function Modal({
  children,
  onClose,
}) {
  const closeButtonRef =
    useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  return createPortal(
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal">
        <button
          ref={closeButtonRef}
          onClick={onClose}
        >
          Close
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;