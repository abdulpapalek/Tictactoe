const { expect } = require('chai');
const tictactoeStore = require('./tictactoeStore');

describe('tictactoeStore', () => {
  describe('saveMove', () => {
    it('will be able to save the new move to the store', () => {
      const movement = {
        move: ['X', null, null, null, null, null, null, null, null],
        stepNumber: 1
      };
      let err;
      try {
        tictactoeStore.saveMove(movement);
      } catch (e) {
        err = e;
      }

      expect(err).to.equal(undefined);
    });

    it('will be able to overwrite existing move if they have similar stepNumber', () => {
      const movement = {
        move: ['X', null, null, null, null, null, null, null, null],
        stepNumber: 1
      };
      const newMovement = {
        move: ['O', null, null, null, null, null, null, null, null],
        stepNumber: 1
      };
      tictactoeStore.saveMove(movement);
      const result1 = tictactoeStore.getLastMove();
      tictactoeStore.saveMove(newMovement);
      const result2 = tictactoeStore.getLastMove();

      expect(result1[0]).to.deep.equal(movement);
      expect(result2[0]).to.equal(newMovement);
    });
  });
});
