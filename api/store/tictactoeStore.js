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

const getLastMove = () => movement.slice(movement.length - 1);

const saveMove = newMove => {
  const idx = movement.findIndex((element) => element.stepNumber === newMove.stepNumber);
  if(idx >= 0){
    movement[idx].move = newMove.move;
  }
  movement.push(newMove)
}

const getMove = step => movement.filter(move => move.stepNumber === step);

const returnMovement = () => movement;

const clearAllMove = () => {
  while(movement.length > 1) {
    movement.pop();
  }
};

module.exports = {
  getLastMove,
  saveMove,
  getMove,
  clearAllMove,
  returnMovement
};