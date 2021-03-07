import React from "react";
import NavBarButton from "../NavBarButton/NavBarButton";

import "./NavBar.scss";

export interface NavBarProps {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const paths = ["matches", "teams", "players"];

  return (
    <div className="navBar">
      <div className="navbarContent">
        {paths.map((path) => (
          <div
            onClick={() => {
              localStorage.setItem("path", path);
              props.setCurrentPath(path);
            }}
          >
            <NavBarButton path={path} active={props.currentPath === path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
