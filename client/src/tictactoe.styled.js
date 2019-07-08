import styled from 'styled-components';
import { Button as AntDesignButton } from 'antd';

export const Game = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  margin: -100px 0 0 -150px;
`;
export const GameInfo = styled.div`
  margin-left: 20px;
`;
export const ButtonWrapper = styled(AntDesignButton)`
  background: #fff;
  border: 1px solid #999;
  border-radius: 5px
  float: right;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin-right: 2px;
  margin-top: 2px;
  padding: 0;
  text-align: center;
  width: 100px;
`;

export const BoardRow = styled.div`
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
`
