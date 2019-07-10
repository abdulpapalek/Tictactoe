const express = require("express");
const router = express.Router();
const tictactoeService = require('../domains');

router.put("/update", (req, res) => {
    const result = tictactoeService.updateMove(req.body);
    res.send(result);
});

router.get("/getall", (req, res) => {
    const result = tictactoeService.getAllMoves();
    res.send(result);
});

router.get("/getmovebaseonstep", (req, res) => {
    const result = tictactoeService.getMoveBaseOnStepNumber(Number(req.query.step));
    res.send(result);
});

router.post("/gotostart", (req, res) => {
    const result = tictactoeService.goToStart();
    res.send(result);
});

router.get("/calculatewinner", (req, res) => {
    const result = tictactoeService.calculateWinner();
    res.send(result);
});

module.exports = router;