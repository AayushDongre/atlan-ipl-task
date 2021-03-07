import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { isMobile } from "react-device-detect";

import "./CustomDrawer.scss";

export interface CustomDrawerProps {
  isOpen: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  return (
    <div>
      <SwipeableDrawer
        anchor={isMobile ? "bottom" : "right"}
        open={props.isOpen}
        onClose={() => props.setDrawerState(false)}
        onOpen={() => props.setDrawerState(true)}
      >
        <div className="customDrawer">{props.children}</div>
      </SwipeableDrawer>
    </div>
  );
};

export default CustomDrawer;
