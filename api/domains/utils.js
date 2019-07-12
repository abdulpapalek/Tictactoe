const tictactoeStore = require('../store');

/**
 * Calculates and returns the winner
 *
 * @returns {string} X | O | null
 */
const calculateWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const lastStep = (tictactoeStore.getLastMove())[0];
  const { stepNumber, move } = (tictactoeStore.getMove(lastStep))[0];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if ((move[a] && move[a] === move[b] && move[a] === move[c]) && stepNumber !== 0) {
      return move[a];
    }
  }

  return null;
};

module.exports = {
  calculateWinner
};
