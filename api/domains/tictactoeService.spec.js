const { expect } = require('chai');
const sinon = require('sinon');

const tictactoeService = require('./tictactoeService');
const tictactoeStore = require('../store');

const sandbox = sinon.createSandbox();

describe('tictactoeService', () => {
  afterEach(() => {
    sandbox.restore();
  });
  describe('updateMove', () => {
    it('will be able to update Move', () => {
      const movement = {
        move: ['X', null, null, null, null, null, null, null, null],
        stepNumber: 1
      };
      let err;
      const saveMoveStub = sandbox.stub(tictactoeStore, 'saveMove').resolves();
      try {
        tictactoeService.updateMove(movement);
      } catch (e) {
        err = e;
      }

      expect(err).to.equal(undefined);
      expect(saveMoveStub.calledOnce).to.equal(true);
    });

    it('will be able to update Move if stepNumber is invalid', () => {
      const movement = {
        move: ['X', null, null, null, null, null, null, null, null],
        stepNumber: 10
      };
      let err;
      const saveMoveStub = sandbox.stub(tictactoeStore, 'saveMove').resolves();
      try {
        tictactoeService.updateMove(movement);
        expect.fail('it should fail');
      } catch (e) {
        err = e;
      }

      expect(err.message).to.equal('ValidationError: child "stepNumber" fails because ["stepNumber" must be less than or equal to 9]');
      expect(saveMoveStub.calledOnce).to.equal(false);
    });
  });

  describe('getMoveBaseOnStepNumber', () => {
    it('will be able to get move base on step number', () => {
      const stepNumber = 1;
      let err;
      const getMoveStub = sandbox.stub(tictactoeStore, 'getMove').resolves([{
        move: ['X', null, null, null, null, null, null, null, null],
        stepNumber: 1
      }]);
      try {
        tictactoeService.getMoveBaseOnStepNumber(stepNumber);
      } catch (e) {
        err = e;
      }

      expect(err).to.equal(undefined);
      expect(getMoveStub.calledOnce).to.equal(true);
    });

    it('will be able to get move base on step number', () => {
      const stepNumber = 10;
      let err;
      const getMoveStub = sandbox.stub(tictactoeStore, 'getMove').resolves();
      try {
        tictactoeService.getMoveBaseOnStepNumber(stepNumber);
      } catch (e) {
        err = e;
      }

      expect(err.message).to.equal('Invalid move: 10');
      expect(getMoveStub.calledOnce).to.equal(false);
    });
  });
});
