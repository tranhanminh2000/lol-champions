import React from "react";
import { NAVBAR_LIST } from "../../constants";
import Logo from "../../public/assets/images/logo.png";

export default function NavbarList() {

  const renderListItem = () => {
    let xhtml = null;
    xhtml = NAVBAR_LIST.map((listItem) => {
      if (listItem.name === "logo") {
        return (
          <li className="navbar-list-item logo">
            <img id="logo-game" src={Logo} alt="" />
          </li>
        );
      }
      return <li className="navbar-list-item">{listItem.name}</li>;
    });
    return xhtml;
  };

  return <ul className="navbar-list container">{renderListItem()}</ul>;
}
