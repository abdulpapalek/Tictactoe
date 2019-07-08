/**
 * Game state
 * [
 *  {
 *    stepNumber: 3,
 *    move: [x, o , null, null, null, null, o, x, null]
 *  }
 * ]
 */
const movement = [];

const getLastMove = () => movement.slice(movement.length - 1);

const saveMove = (movement) => {
  movement.push(movement);
};

const getMove = stepNumber => movement.filter(move => move.stepNumber === stepNumber);

const clearAllMove = () => {
  while(movement.pop() !== undefined);
};

module.exports = {
  getLastMove,
  saveMove,
  getMove,
  clearAllMove
};