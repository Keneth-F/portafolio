import { useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, children, title, show }) => {
  const modalWrapperRef = useRef();

  const backDropHandler = e => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <article className="modal-container" onClick={backDropHandler}>

      <div style={{
        zIndex: "10",
      }} ref={modalWrapperRef}>
        <div className="modal-wrapper">
          <div className="modal-header">
            {title && <div>{title}</div>}

            <button className="modal-btn" onClick={handleCloseClick}>
              x
            </button>
          </div>
          <div style={{ paddingTop: "10px" }}>{children}</div>
        </div>
      </div>
    </article >
  );

  return createPortal(
    modalContent,
    globalThis.document.getElementById("modal-root")
  );

};


export default Modal