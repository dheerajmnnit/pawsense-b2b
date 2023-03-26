import React from "react";

const Modal = ({
  isOpen = false,
  children,
  showCloseBtn = true,
  handleClose = () => {},
  disableBgClick = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10">
      <div className="relative w-full h-full">
        <div
          className="bg-black opacity-70 w-full h-full"
          onClick={() => !disableBgClick && handleClose()}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
          <div className="relative max-w-lg">
            {showCloseBtn && (
              <button
                className="absolute top-0 right-0 z-30 w-10 h-10 text-black text-3xl"
                onClick={handleClose}
              >
                x
              </button>
            )}
            <div className="z-1">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
