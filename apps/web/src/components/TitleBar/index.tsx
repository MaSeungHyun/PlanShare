import React from "react";

function index() {
  return (
    <div
      className="flex items-center w-full h-7.5  px-2 text-xs"
      style={
        {
          WebkitAppRegion: "drag",
        } as React.CSSProperties
      }
    >
      🚨 React Hook Study
    </div>
  );
}

export default index;
