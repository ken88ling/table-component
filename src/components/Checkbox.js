import React from "react";

function Checkbox({ isChecked }) {
  return (
    <>
      {isChecked ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="#5C50BB" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0781 10.9107C23.4035 11.2367 23.4035 11.764 23.0781 12.0894L14.4901 20.6774L14.4831 20.6846C14.4784 20.6896 14.4736 20.6945 14.4687 20.6994C14.1427 21.0241 13.6153 21.0241 13.29 20.6994L8.91067 16.3201C8.58533 15.9941 8.58533 15.4661 8.91067 15.1414C9.236 14.8161 9.76333 14.8161 10.0893 15.1414L13.8787 18.9314L21.8995 10.9107C22.2255 10.5854 22.7528 10.5854 23.0781 10.9107Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="7.5"
            fill="white"
            stroke="#A8A8A8"
          />
        </svg>
      )}
    </>
  );
}

export default Checkbox;
