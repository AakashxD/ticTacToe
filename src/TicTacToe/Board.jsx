// eslint-disable-next-line no-unused-vars
import react, { useEffect } from "react";
import { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [Stated, setStated] = useState(Array(9).fill(null));
  const [isTurn, setisTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        Stated[a] != null &&
        Stated[a] === Stated[b] &&
        Stated[b] === Stated[c]
      ) {
        return Stated[a];
      }
       if(Stated.every((e)=>e!=null)){
        return "Nobody"
       }
    }
    return false;
  };
  const isWinner = checkWinner();
  const handleClick = (index) => {
    if(Stated[index]!=null){
        return;
    }
    const copyState = [...Stated];
    copyState[index] = isTurn ? "X" : "0";
    setStated(copyState);
    setisTurn(!isTurn);
  };

  const newGame = () => {
    setStated(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {isWinner} Won the game{" "}
          <button onClick={newGame}>Play again</button>
        </>
      ) : (
        <>
          <h4> Player {isTurn? "X":"0"} turn</h4>

          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={Stated[0]} />
            <Square onClick={() => handleClick(1)} value={Stated[1]} />
            <Square onClick={() => handleClick(2)} value={Stated[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={Stated[3]} />
            <Square onClick={() => handleClick(4)} value={Stated[4]} />
            <Square onClick={() => handleClick(5)} value={Stated[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={Stated[6]} />
            <Square onClick={() => handleClick(7)} value={Stated[7]} />
            <Square onClick={() => handleClick(8)} value={Stated[8]} />
          </div>
        </>
      )}
    </div>
  );
};
export default Board;
