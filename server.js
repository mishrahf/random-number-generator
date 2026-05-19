const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Store active session
let activeSession = null;

// Generate random number between 1-100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Get the current random number (only one player at a time)
app.get('/api/number', (req, res) => {
  const playerId = req.query.playerId;

  // Check if someone else is already in session
  if (activeSession && activeSession !== playerId) {
    return res.status(403).json({ 
      error: 'Another player is already in session. Please try again later.' 
    });
  }

  // Start or continue session
  if (!activeSession) {
    activeSession = playerId;
  }

  const randomNum = generateRandomNumber();
  
  res.json({ 
    number: randomNum,
    playerId: playerId,
    message: 'Your random number is ready!' 
  });
});

// End session
app.post('/api/end-session', (req, res) => {
  const playerId = req.body.playerId;

  if (activeSession === playerId) {
    activeSession = null;
    res.json({ message: 'Session ended successfully' });
  } else {
    res.status(403).json({ error: 'Invalid session' });
  }
});

// Check if session is available
app.get('/api/session-status', (req, res) => {
  res.json({ 
    isAvailable: !activeSession,
    activePlayer: activeSession 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
