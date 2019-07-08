import React, { useState, useEffectAsync } from 'react';
import * as Styled from './tictactoe.styled'
import Board from './Board.component';
import axios from 'axios';
import './index.css';

const handleClick = (i) => {

};

export default () => {
  let winner, lastMove, status;
  const [next, setIsNext] = useState(false);
  const handleClick = (i) => {
    try {
      winner = await axios.get('http://localhost:9000/tictactoe/calculateWinner');
    } catch (e) {
      console.log(e);
    }

    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (next ? 'X' : 'O');
    }


  };
  useEffectAsync(async () => {
    setIsNext(next =+ 1);
    try {
      const winner = await axios.get('http://localhost:9000/tictactoe/calculateWinner');
      console.log(winner);
      console.log(lastMove);
    } catch (error) {
      console.error(error);
    } 
  });

  return (
    <Styled.Game>
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)} 
        />
      <Styled.GameInfo>
        <div>{status}</div>
        <ol>{moves}</ol>
      </Styled.GameInfo>
    </Styled.Game>
  );
}