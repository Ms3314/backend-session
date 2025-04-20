const express = require('express');
const app = express();
const PORT = 3000;

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
];

// Middleware to parse JSON
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Joke Generator API!');
});

app.get('/joke' , (req , res) => {
    const randomNumber = Math.floor(Math.random()*jokes.length)
    const randomJoke = jokes[randomNumber]; 
    res.json({
        success : true ,
        joke : randomJoke
    })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
