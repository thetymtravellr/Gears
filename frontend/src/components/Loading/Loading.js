import React from "react";

const Loading = ({ children }) => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
      <div className="animate-spin loader ease-linear border-t-white border-indigo-600 rounded-full border-4 border-t-4  h-12 w-12 mb-4 mx-auto"></div>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Loading;
