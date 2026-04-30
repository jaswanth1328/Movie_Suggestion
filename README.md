# CineMatch - Movie Recommendation System

CineMatch is a full-stack movie recommendation web application that helps users select the best combination of movies to watch within a specific time limit. It utilizes the **0/1 Knapsack Dynamic Programming Algorithm** to maximize the total rating of the selected movies, acting as a smart "watchlist optimizer."

## 🚀 Features

- **Optimal Recommendations**: Powered by a highly efficient C++ backend utilizing the 0/1 Knapsack algorithm (O(N * W) complexity) to mathematically guarantee the highest-rated watchlist for your available time.
- **Modern UI/UX**: A sleek, Netflix/BookMyShow inspired interface with a premium dark and red theme, responsive movie grid, and smooth CSS animations.
- **Language Filtering**: Easily filter the predefined library of 20+ top-rated English, Telugu, and Hindi movies.
- **Real-Time Calculation**: The Node.js Express server seamlessly bridges the frontend UI and the compiled C++ executable, providing sub-millisecond calculation times.

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Algorithm Engine**: C++17 (compiled as a child process)

## 📁 Project Structure

```text
c:\ccc_\
├── public/                 # Frontend assets
│   ├── index.html          # Main user interface
│   ├── style.css           # Styling and responsive design
│   └── script.js           # Frontend logic and API calls
├── knapsack.cpp            # Core Dynamic Programming algorithm (C++)
├── knapsack.exe            # Compiled executable of the algorithm
├── server.js               # Node.js Express API server
├── package.json            # Node.js dependencies
└── README.md               # Project documentation
```

## ⚙️ Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- A C++ Compiler (e.g., GCC/MinGW) if you wish to modify the core algorithm.

### Running the Application

1. **Install Dependencies**
   Navigate to the project directory and install the required Node modules (Express):
   ```bash
   npm install
   ```

2. **(Optional) Recompile the C++ Engine**
   If you make changes to `knapsack.cpp`, you must recompile it before starting the server:
   ```bash
   # On Windows:
   g++ -O3 knapsack.cpp -o knapsack.exe
   
   # On Linux/macOS:
   g++ -O3 knapsack.cpp -o knapsack
   ```

3. **Start the Server**
   ```bash
   node server.js
   ```

4. **Open the App**
   Open your browser and navigate to `http://localhost:3000`.

## 🔌 API Endpoint

### `POST /recommend`
Calculates the optimal movie subset for the provided time constraint.

**Request Body:**
```json
{
  "totalTime": 200,
  "movies": [
    { "name": "Inception", "duration": 148, "rating": 88 },
    { "name": "Interstellar", "duration": 169, "rating": 87 }
  ]
}
```

**Response:**
```json
{
  "totalRating": 88,
  "selectedMovies": ["Inception"],
  "totalTimeUsed": 148
}
```

## 💡 How the Algorithm Works
The problem is modeled directly after the **0/1 Knapsack problem**:
- **Capacity (W)**: The user's available watch time.
- **Weight (w)**: The duration of each movie.
- **Value (v)**: The rating of each movie (scaled to integers).
The C++ process constructs a 2D array to tabulate the maximum possible value for every capacity up to `W`, then backtracks through the array to identify exactly which movies were included in the optimal set.
# CCC_Movie_Suggestion


# Live Demo 🚀 :
https://ccc-movie-suggestion.vercel.app/
