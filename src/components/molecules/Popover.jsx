import { useState, useRef, useEffect } from "react";

export default function Popover({ isOpen, setIsOpen, children }) {
  const popoverRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
          <div
            ref={popoverRef}
            className="relative z-50 bg-white rounded-lg shadow-xl p-2 mx-1 w-full max-w-sm"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
