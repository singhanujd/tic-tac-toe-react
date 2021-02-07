import React, { Component } from "react";
import history from "../history";
import { calculateWinner } from "../Utility/calculateWinner";
import Board from "./Board/Board";

import classes from "./Game.module.css";

class Game extends Component {
  state = {
    board: Array(9).fill(null),
    xIsNext: history.location.state,
  };

  render() {
    const winner = calculateWinner(this.state.board);

    const handleClick = (i) => {
      if (winner || this.state.board[i]) return;
      this.setState((state) => {
        const boardCopy = [...state.board];
        boardCopy[i] = state.xIsNext ? "X" : "O";
        if (this.props.playingWithAI) {
          const newBoard = boardCopy
            .map((item, i) => {
              if (item === null) {
                return i;
              } else {
                return null;
              }
            })
            .filter((item) => item !== null);
          const randomPosition = Math.floor(Math.random() * newBoard.length);
          boardCopy[newBoard[randomPosition]] = !state.xIsNext ? "X" : "O";
          return {
            board: boardCopy,
          };
        }
        return {
          board: boardCopy,
          xIsNext: !state.xIsNext,
        };
      });
    };

    return (
      <div>
        <Board squares={this.state.board} onClick={handleClick} />
        <div className={classes.GameState}>
          <p>
            {winner
              ? "Winner: " + winner
              : "Next Player: " + (this.state.xIsNext ? "X" : "O")}
          </p>
        </div>
      </div>
    );
  }
}

export default Game;

// import React, { useState } from "react";
// import history from "../history";
// import { calculateWinner } from "../Utility/calculateWinner";
// import Board from "./Board/Board";

// import classes from "./Game.module.css";

// const Game = (props) => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   let nextState = history.location.state;
//   const [xIsNext, setXIsNext] = useState(nextState);
//   const winner = calculateWinner(board);

//   const handleClick = (i) => {
//     if (winner || board[i]) return;

//     setXIsNext((xIsNext) => !xIsNext);
//     setBoard((board) => {
//       const boardCopy = [...board];
//       boardCopy[i] = xIsNext ? "X" : "O";
//       return boardCopy;
//     });
//   };

//   const handleClickFactory = (i) => {
//     handleClick(i);
//     if (props.playingWithAI) {
//       const newBoard = board
//         .map((item, i) => {
//           if (item === null) {
//             return i;
//           } else {
//             return null;
//           }
//         })
//         .filter((item) => item !== null);
//       const randomPosition = Math.floor(Math.random() * newBoard.length);
//       handleClick(newBoard[randomPosition]);
//     }
//   };

//   return (
//     <div>
//       <Board squares={board} onClick={handleClickFactory} />
//       <div className={classes.GameState}>
//         <p>
//           {winner
//             ? "Winner: " + winner
//             : "Next Player: " + (xIsNext ? "X" : "O")}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Game;
