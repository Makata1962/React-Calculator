import React from "react";
import classes from "./Button.module.css";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};

export const Button = (props) => {
  return (
    <div
      className={`${classes["button-wrapper"]} ${
        isOperator(props.children) ? null : classes.operator
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};
