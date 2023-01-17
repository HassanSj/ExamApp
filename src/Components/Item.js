import React from "react";
import "./itemStyles.css";

// React Component to display individual item
const Item = ({ State, Borough }) => (
  <div className="item-container">
    <div>
      <span className="item-label">Name:</span>
      {State}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {Borough}
    </div>
  </div>
);

export default Item;
