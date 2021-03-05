import React, { useState } from "react";
import NavBarButton from "../NavBarButton/NavBarButton";

import "./NavBar.scss";

const NavBar: React.FC = () => {
  const paths = ["players", "teams", "matches"];
  const [currentPath, setCurrentPath] = useState("players");

  return (
    <div className="navBar">
      {paths.map((path) => (
        <div onClick={() => setCurrentPath(path)}>
          <NavBarButton path={path} active={currentPath === path} />
        </div>
      ))}
    </div>
  );
};

export default NavBar;
