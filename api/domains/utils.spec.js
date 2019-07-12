const { expect } = require('chai');
const sinon = require('sinon');

const tictactoeStore = require('../store');
const utils = require('./utils');

const sandbox = sinon.createSandbox();

describe('utils', () => {
  afterEach(() => {
    sandbox.restore();
  });
  describe('calculateWinner', () => {
    it('will return the winner', () => {
      const currentMovement = {
        stepNumber: 5,
        move: [null, null, 'O', null, 'O', null, 'O', 'X', 'X']
      };
      let err;
      let winner;
      const getLastMoveStub = sandbox.stub(tictactoeStore, 'getLastMove').returns([5]);
      const getMoveStub = sandbox.stub(tictactoeStore, 'getMove').returns([currentMovement]);
      try {
        winner = utils.calculateWinner();
      } catch (e) {
        err = e;
      }

      expect(winner).to.equal('O');
      expect(err).to.equal(undefined);
      expect(getLastMoveStub.calledOnce).to.equal(true);
      expect(getMoveStub.calledOnce).to.equal(true);
    });

    it('will return null if no winner is calculated', () => {
      const currentMovement = {
        stepNumber: 5,
        move: [null, null, 'O', null, 'O', null, null, 'X', 'X']
      };
      let err;
      let winner;
      const getLastMoveStub = sandbox.stub(tictactoeStore, 'getLastMove').returns([5]);
      const getMoveStub = sandbox.stub(tictactoeStore, 'getMove').returns([currentMovement]);
      try {
        winner = utils.calculateWinner();
      } catch (e) {
        err = e;
      }

      expect(winner).to.equal(null);
      expect(err).to.equal(undefined);
      expect(getLastMoveStub.calledOnce).to.equal(true);
      expect(getMoveStub.calledOnce).to.equal(true);
    });
  });
});
