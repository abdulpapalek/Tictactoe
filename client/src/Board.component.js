import React, { useEffect } from 'react';
import * as Styled from './tictactoe.styled'
import { Row, Col } from 'antd';

const Square = props => (
  <Styled.ButtonWrapper onClick={props.onClick}>
    {props.value}
  </Styled.ButtonWrapper>
);

export default (props) => {
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} 
                   onClick={() => props.onClick(i)}/>;
  };

  return (
      <React.Fragment>
      <Row gutter={16}>
        <Col span={8}>{renderSquare(0)}</Col>
        <Col span={8}>{renderSquare(1)}</Col>
        <Col span={8}>{renderSquare(2)}</Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>{renderSquare(3)}</Col>
        <Col span={8}>{renderSquare(4)}</Col>
        <Col span={8}>{renderSquare(5)}</Col>
      </Row>
      <Row gutter={16}>        
        <Col span={8}>{renderSquare(6)}</Col>
        <Col span={8}>{renderSquare(7)}</Col>
        <Col span={8}>{renderSquare(8)}</Col>
      </Row>
    </React.Fragment>
  );
};