# Random Number Generator App 🎲

A beautiful single-player random number generator app that generates numbers between 1-100. Only one player can access the app at a time!

## Features

✨ **Beautiful UI** - Modern gradient design with animations
🎲 **Random Numbers** - Generates numbers 1-100
🔒 **Single Player** - Only one player can access at a time
📱 **Responsive** - Works on all devices
⚡ **Fast** - Lightweight and instant

## Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **API**: RESTful endpoints for session management

## Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/mishrahf/random-number-generator.git
cd random-number-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and visit:
```
http://localhost:3000
```

## API Endpoints

### Generate Random Number
```
GET /api/number?playerId={playerId}
```
Returns a random number 1-100 if the player can claim the session.

**Response (Success - 200):**
```json
{
  "number": 42,
  "playerId": "player_1234567890",
  "message": "Your random number is ready!"
}
```

**Response (Another player in session - 403):**
```json
{
  "error": "Another player is already in session. Please try again later."
}
```

### End Session
```
POST /api/end-session
Content-Type: application/json

{
  "playerId": "{playerId}"
}
```

**Response (Success - 200):**
```json
{
  "message": "Session ended successfully"
}
```

### Check Session Status
```
GET /api/session-status
```

**Response:**
```json
{
  "isAvailable": true,
  "activePlayer": null
}
```

## Deployment

### Deploy on Railway (Recommended)
1. Go to https://railway.app
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose `mishrahf/random-number-generator`
5. Deploy automatically
6. Get your live URL

### Deploy on Render
1. Go to https://render.com
2. Click "New → Web Service"
3. Connect your GitHub repo
4. Deploy
5. Get your live URL

### Deploy on Replit
1. Go to https://replit.com
2. Import from GitHub: `mishrahf/random-number-generator`
3. Click Run
4. Get instant live URL

## How It Works

1. **Player Initialization** - Each player gets a unique ID when they visit
2. **Generate Number** - Player clicks "Generate Number" button
3. **Session Check** - Server checks if another player is active
4. **Display Number** - If available, displays the random number
5. **End Session** - Player can end their session to let others play

## File Structure

```
random-number-generator/
├── server.js              # Express server with API endpoints
├── public/
│   └── index.html        # Frontend UI
├── package.json          # Project dependencies
├── Procfile              # Deployment configuration
└── README.md             # This file
```

## Usage

1. Visit the app URL
2. Click "Generate Number"
3. If available, you'll see a random number (1-100)
4. Your session is now active - other players can't access the app
5. Click "End Session" to let others play
6. Your session expires when you close the page (auto-cleanup)

## Features Breakdown

### Single Player Session
- Only ONE player can be active at a time
- Prevents multiple simultaneous access
- Auto-cleanup when user leaves the page
- Manual end session button

### Beautiful UI
- Gradient background (purple theme)
- Smooth animations
- Responsive design
- Mobile-friendly
- Real-time status updates

### Player Tracking
- Unique Player ID per session
- Session status indicator
- Error messages for conflicts
- Visual feedback for actions

## License

MIT License - Feel free to use this project!

## Support

For issues or questions, visit:
https://github.com/mishrahf/random-number-generator/issues

---

**Made with ❤️ by mishrahf**
