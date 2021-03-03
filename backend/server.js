const express = require('express');
const abc = require('../src/components/test')
const app = express();

app.put('/game', async (req, res) => {
    try {
        const score = await Score.findOneAndUpdate(
            { name: req.body.name },
            {
                $set: {
                    score: req.body.humanScore,
                    date: Date.now()
                },
            },
            { upsert: true }
        );
        await score.save();
        res.json(score);
    } catch (err) {
        console.error(err);
    }
});