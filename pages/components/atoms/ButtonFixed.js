import React from "react";

export default function ButtonFixed({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
}
