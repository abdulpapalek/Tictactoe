/**
 * Game state
 * [
 *  {
 *    stepNumber: 3,
 *    move: [x, o , null, null, null, null, o, x, null]
 *  }
 * ]
 */
const movement = [{
  stepNumber: 0,
  move: Array(9).fill(null)
}];

/**
 * Game steps
 * [1,2,3]
 */
const steps = [];

/**
 * Returns the last move in the movement store
 *
 * @returns {object} move
 */
const getLastMove = () => movement.slice(movement.length - 1);

/**
 * Saves a new move in the movement store
 *
 * @param {object} movement.move
 * @param {number} movement.stepNumber
 * @returns {undefined}
 */
const saveMove = (newMove) => {
  const idx = movement.findIndex(element => element.stepNumber === newMove.stepNumber);
  if (idx >= 0) {
    movement[idx].move = newMove.move;
  }

  movement.push(newMove);
};

/**
 * Gets a move base on stepnumber
 *
 * @param {number} stepNumber
 * @returns {object} move
 */
const getMove = (step) => {
  const result = movement.filter(move => move.stepNumber === step);
  if (result !== []) {
    steps.push(step);
  }

  return result;
};

/**
 * clears the movement store
 *
 * @returns {undefined}
 */
const clearAllMove = () => {
  while (movement.length > 1) {
    movement.pop();
  }
};

module.exports = {
  getLastMove,
  saveMove,
  getMove,
  clearAllMove
};
