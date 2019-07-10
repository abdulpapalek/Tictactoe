import axios from 'axios';
export const calculateWinner = async () => await axios.get('http://localhost:9000/tictactoe/calculatewinner');
export const updateMove = async body => await axios.put('http://localhost:9000/tictactoe/update', body);
export const goToStart = async () => await axios.post('http://localhost:9000/tictactoe/gotostart');
export const getAll = async () => await axios.get('http://localhost:9000/tictactoe/getall');
export const getMove = async stepNumber => await axios.get(`http://localhost:9000/tictactoe/getmovebaseonstep?step=${stepNumber}`);