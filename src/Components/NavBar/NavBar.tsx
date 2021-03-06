import React from "react";
import NavBarButton from "../NavBarButton/NavBarButton";

import "./NavBar.scss";

export interface NavBarProps {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const paths = ["players", "teams", "matches"];

  return (
    <div className="navBar">
      <div className="navbarContent">
        {paths.map((path) => (
          <div onClick={() => props.setCurrentPath(path)}>
            <NavBarButton path={path} active={props.currentPath === path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
