const express = require("express");
const router = express.Router();
const tictactoeService = require('../domains/tictactoeService');

router.put("/update", function(req, res) {
    const result = tictactoeService.updateMove(req.body);
    res.send(result);
});

router.get("/getLast", function(req, res) {
    const result = tictactoeService.getLastMove();
    res.send(result);
});

router.get("/getMoveBaseOnStep", function(req, res) {
    const result = tictactoeService.getMoveBaseOnStepNumber(req.body);
    res.send(result);
});

router.get("/goToStart", function(req, res) {
    const result = tictactoeService.goToStart();
    res.send(result);
});

router.get("/calculateWinner", function(req, res) {
    const result = tictactoeService.calculateWinner();
    res.send(result);
});

module.exports = router;