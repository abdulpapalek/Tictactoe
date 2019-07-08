const Joi = require('joi');
const tictactoeStore = require('../store');
const utils = require('./utils')

const tictactoeSchema = Joi.object().keys({
  move: Joi.array().required(),
  stepNumber: Joi.number().min(1).max(9).required()
});

const inputStepNumberSchema = Joi.object().keys({
  stepNumber: Joi.number().min(1).max(9).required()
});

const updateMove = (movement) => {
  const result = Joi.validate({ movement }, tictactoeSchema);
  if (result.error) {
    throw new Error('Invalid move:', move.stepNumber);
  }

  tictactoeStore.saveMove(movement);
};

const getLastMove = () => tictactoeStore.getLastMove();

const getMoveBaseOnStepNumber = (stepNumber) => {
  const result = Joi.validate(stepNumber, inputStepNumberSchema);
  if (result.error) {
    throw new Error('Invalid move:', stepNumber);
  }

  return tictactoeStore.getMove(stepNumber);
};

const goToStart = () => tictactoeStore.clearAllMove();

const calculateWinner = () => utils.calculateWinner();



module.exports = {
  updateMove,
  getLastMove,
  calculateWinner,
  getMoveBaseOnStepNumber,
  goToStart
};