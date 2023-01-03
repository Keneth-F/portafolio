import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, children, title, show }) => {
  const modalWrapperRef = useRef();
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector("#modal-root")
    setMounted(true)
  }, [])

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

  return (mounted && ref.current) ? createPortal(modalContent, ref.current) : null


};


export default Modal