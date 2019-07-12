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
 * [0,1,2,3]
 */
const steps = [0];

/**
 * Returns the last move in the movement store
 *
 * @returns {object} move
 */
const getLastMove = () => steps.slice(steps.length - 1);

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

  steps.push(newMove.stepNumber);
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
  steps.push(step);
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

  while (steps.length > 1) {
    steps.pop();
  }
};

module.exports = {
  getLastMove,
  saveMove,
  getMove,
  clearAllMove
};
