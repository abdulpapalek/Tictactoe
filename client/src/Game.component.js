import React, { useState, useEffect } from 'react';
import { List, Typography } from 'antd';
import * as Styled from './tictactoe.styled';
import * as apiCall from './tictactoe.api';
import Board from './Board.component';
// import Move from './Move.component';

export default () => {
  const [next, setIsNext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [steps, setSteps] = useState([0]);
  const [currentMove, setCurrentMove] = useState({
    stepNumber: 0,
    move: Array(9).fill(null)
  });
  const handleClick = async (i) => {
    if(winner !== null || currentMove.move[i] !== null) {
      return
    }

    try {
      const nextMove = currentMove;
      nextMove.move[i] = next ? 'X' : 'O';
      nextMove.stepNumber = steps.length;
      await apiCall.updateMove(nextMove);
      setCurrentMove(nextMove);
      setIsNext(!next);
      setSteps([...steps, nextMove.stepNumber]);
    } catch (e) {
      alert(e);
    }
  };

  const jumpTo = async (stepNumber) => {
    setWinner(null);
    if(stepNumber === 0){
      await apiCall.goToStart();
    }
    const move = await apiCall.getMove(stepNumber);
    setSteps(steps.slice(0,stepNumber + 1));
    setCurrentMove(move.data);
  }

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      apiCall.goToStart();
    });
    const fetch = async () => {
      const winner = await apiCall.calculateWinner();
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
          dataSource={steps}
          renderItem={(step) => {
            const desc = (step !== 0) ? `Go to move #${step}` : 'Go to game start';
            return(
              <List.Item key={step}>
                <button onClick={() => jumpTo(step)}>{desc}</button>
              </List.Item>
            )
          }
        }
        />
      </Styled.GameInfo>
    </Styled.Game>
  );
}