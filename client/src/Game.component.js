import React, { useState, useEffect } from 'react';
import { List, Typography } from 'antd';
import * as Styled from './tictactoe.styled';
import * as apiCall from './tictactoe.api';
import Board from './Board.component';
// import Move from './Move.component';

export default () => {
  const [next, setIsNext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [allMoves, setAllMoves] = useState([]);
  const [currentMove, setCurrentMove] = useState({
    stepNumber: 0,
    move: Array(9).fill(null)
  });
  const handleClick = async (i) => {
    if(winner !== null) {
      return
    }

    try {
      const nextMove = currentMove;
      nextMove.move[i] = next ? 'X' : 'O';
      nextMove.stepNumber = allMoves.length;
      await apiCall.updateMove(nextMove);
      setCurrentMove(nextMove);
      setIsNext(!next);
    } catch (e) {
      alert(e);
    }
  };

  const jumpTo = async (stepNumber) => {
    const move = await apiCall.getMove(stepNumber);
    console.log(move.data);
    setCurrentMove(move.data);
  }

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      apiCall.goToStart();
    });
    const fetch = async () => {
      const winner = await apiCall.calculateWinner();
      const moves = await apiCall.getAll();
      setAllMoves(moves.data);
      console.log(moves);
      if (winner.data === 'X' || winner.data === 'O') {
        setWinner(winner.data);
      }
    };
    try {
      fetch();
    } catch (e) {
      alert(e);
    }
  }, [next]);

  return (
    <Styled.Game>
        <Board
          squares={currentMove.move}
          onClick={(i) => handleClick(i)} 
        />
      <Styled.GameInfo>
        <div>{winner ? `Winner: ${winner}` : `Next player: ${(next ? 'X' : 'O')}`}</div>
        <List
          bordered
          dataSource={allMoves}
          renderItem={(item) => {
            const desc = (item.stepNumber !== 0) ? `Go to move #${item.stepNumber}` : 'Go to game start';
            return(
              <List.Item>
                <button onClick={() => jumpTo(item.stepNumber)}>{desc}</button>
              </List.Item>
            )
          }
        }
        />
      </Styled.GameInfo>
    </Styled.Game>
  );
}