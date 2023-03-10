import React from "react";
import classes from "./ClearButton.module.css";

export const ClearButton = (props) => {
  return (
    <div className={classes.clear_btn} onClick={props.handleClear}>
      {props.children}
    </div>
  );
};
