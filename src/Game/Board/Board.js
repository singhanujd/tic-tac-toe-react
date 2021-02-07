import React from "react";

import Square from "./Square/Square";

import classes from "./Board.module.css";

const Board = ({ squares, onClick }) => (
  <div className={classes.Board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} clicked={onClick.bind(this, i)} />
    ))}
  </div>
);

export default Board;
