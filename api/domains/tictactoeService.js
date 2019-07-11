const Joi = require('joi');
const tictactoeStore = require('../store');
const utils = require('./utils');

const tictactoeSchema = Joi.object().keys({
  move: Joi.array().required(),
  stepNumber: Joi.number().min(1).max(9).required()
});

const inputStepNumberSchema = Joi.object().keys({
  stepNumber: Joi.number().min(0).max(9).required()
});

/**
 * Updates the movement store with the new move.
 *
 * @param {object} movement.move
 * @param {number} movement.stepNumber
 * @returns {undefined}
 */
const updateMove = (movement) => {
  const result = Joi.validate(movement, tictactoeSchema);
  if (result.error) {
    throw new Error(result.error);
  }

  tictactoeStore.saveMove(movement);
};

/**
 * gets the move base on the step number
 *
 * @param {number} stepNumber
 * @returns {object} move
 */
const getMoveBaseOnStepNumber = (stepNumber) => {
  const result = Joi.validate({ stepNumber }, inputStepNumberSchema);
  if (result.error) {
    throw new Error(`Invalid move: ${stepNumber}`);
  }

  return (tictactoeStore.getMove(stepNumber))[0];
};

/**
 * Function wrapper to clear the movement store
 *
 * @returns {undefined}
 */
const goToStart = () => tictactoeStore.clearAllMove();

/**
 * Function wrapper to calculate and return the winner
 *
 * @returns {string} X | O
 */
const calculateWinner = () => utils.calculateWinner();

module.exports = {
  updateMove,
  calculateWinner,
  getMoveBaseOnStepNumber,
  goToStart
};
