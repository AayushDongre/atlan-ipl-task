import React from "react";
import { CardArrow } from "../../Constants/Icons";

import "./CardBase.scss";

const CardBase: React.FC = (props) => {
  return (
    <div className="card">
      {props.children}
      <CardArrow />
    </div>
  );
};

export default CardBase;
