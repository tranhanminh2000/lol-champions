import React from "react";

export default function Overlay({darkMode}) {
  return (
    <div className={`overlay ${darkMode && "dark-mode"}`} >
      {/* background overlay */}
    </div>
  );
}
