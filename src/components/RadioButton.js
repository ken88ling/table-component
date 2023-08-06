import React from "react";

const RadioButton = ({ isChecked }) => {
  return isChecked ? (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#5C50BB" />
      <circle cx="16" cy="16" r="8" fill="#F7F7F7" />
    </svg>
  ) : (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15.5" fill="white" stroke="#A8A8A8" />
      <circle cx="16" cy="16" r="8" fill="white" />
    </svg>
  );
};

export default RadioButton;
