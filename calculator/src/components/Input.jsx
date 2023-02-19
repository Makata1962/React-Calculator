import React from "react";
import classes from "./Input.module.css";

export const Input = (props) => (
  <div className={classes.input}>{props.input}</div>
);
