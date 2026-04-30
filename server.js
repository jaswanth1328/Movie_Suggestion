const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

app.post('/recommend', (req, res) => {
    const { totalTime, movies } = req.body;

    // Support both totalTime and timeLimit for backward compatibility if needed, but spec says totalTime
    const timeLimit = totalTime || req.body.timeLimit;

    if (!timeLimit || !movies || !Array.isArray(movies)) {
        return res.status(400).json({ error: 'Invalid input. Ensure totalTime and movies array are provided.' });
    }

    // JS Knapsack Implementation
    const N = movies.length;
    const T = timeLimit;
    
    // dp array: N+1 x T+1
    const dp = Array(N + 1).fill(0).map(() => Array(T + 1).fill(0));
    
    for (let i = 1; i <= N; ++i) {
        let w = movies[i-1].duration;
        let v = movies[i-1].rating;
        for (let j = 0; j <= T; ++j) {
            if (w <= j) {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - w] + v);
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    
    let remainingRating = dp[N][T];
    let w = T;
    let selectedMovies = [];
    
    for (let i = N; i > 0 && remainingRating > 0; --i) {
        if (remainingRating === dp[i-1][w]) {
            continue;
        } else {
            selectedMovies.push(movies[i-1].name);
            remainingRating -= movies[i-1].rating;
            w -= movies[i-1].duration;
        }
    }
    
    let totalRating = dp[N][T];
    
    // Calculate totalTimeUsed
    let totalTimeUsed = 0;
    for (const selectedName of selectedMovies) {
        const matchedMovie = movies.find(m => m.name === selectedName);
        if (matchedMovie) {
            totalTimeUsed += matchedMovie.duration;
        }
    }

    return res.json({ totalRating, selectedMovies, totalTimeUsed });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
