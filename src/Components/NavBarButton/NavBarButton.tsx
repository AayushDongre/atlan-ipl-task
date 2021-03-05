import React from "react";
import classnames from "classnames";

import "./NavBarButton.scss";

export interface NavBarButtonProps {
  path: string;
  active?: boolean;
}

const NavBarButton: React.FC<NavBarButtonProps> = (props) => {
  return (
    <div
      className={classnames({
        "navbar-button": true,
        "active-title": props.active ?? false,
      })}
    >
      {props.path}
    </div>
  );
};

export default NavBarButton;
