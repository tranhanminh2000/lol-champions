import React from "react";
import { NAVBAR_LIST } from "../../constants";

function SideBar({ isOpen, handleToggleSideBar }) {
  const renderListSideBar = () => {
    let xhtml = null;
    xhtml = NAVBAR_LIST.map((listItem) => {
      if (listItem.name === "logo") {
        return null;
      }
      return <li className="list-item">{listItem.name}</li>;
    });
    return xhtml;
  };

  return (
    <div className={`nav-sidebar ${isOpen && "active"}`}>
      <div className="sidebar-left">
        <div className="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png" alt="" />
          <ul className="list">{renderListSideBar()}</ul>
        </div>
        <div className="brand-rito">
          <img
            src="https://www.pngrepo.com/png/306668/512/riotgames.png"
            alt=""
            id="brand-1"
          />
          <img
            src="https://i0.wp.com/www.riotgames.com/darkroom/original/3c58969e76948dc3fd1766e76ec421ef:e92a7e5b00e204d5a10550224771dc49/riot-logotype-black-rgb.png"
            alt=""
            id="brand-2"
          />
        </div>
      </div>
      <div className="sidebar-overlay" onClick={handleToggleSideBar} />
    </div>
  );
}

export default SideBar;
