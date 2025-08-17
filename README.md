# FanScape Sports App

![Python](https://img.shields.io/badge/python-3.11-blue?logo=python\&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-2.3-green?logo=flask\&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-3.41-orange?logo=sqlite\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github\&logoColor=white)

## Overview

FanScape Sports App is a **Flask-based web application** designed for sports enthusiasts to track games, teams, and competitions. Users can **register, log in, save games and teams**, and view a personalized **dashboard**. The application integrates with **live sports APIs** while maintaining a database for user-specific data.

## Features

* **User Authentication:** Secure registration, login, and logout with hashed passwords.
* **User Profiles:** Personalized dashboards showing saved games and favorite teams.
* **Game Tracking:** Save and follow games across different sports and leagues.
* **Team Tracking:** Save favorite teams and access related information.
* **Sports & Competitions:** Structured tables for sports and competitions linked to games.
* **API Integration:** Fetches dynamic sports and game data from external sources.

## Project Structure

```
fanscape/
│
├── app.py               # Main Flask application
├── requirements.txt     # Python dependencies
├── mydb.db              # SQLite database file (auto-generated)
├── templates/           # HTML templates for rendering dashboard
│   └── dashboard.html
├── static/              # CSS, JS, and images
├── README.md            # Project documentation
└── __pycache__/         # Auto-generated Python cache files
```

## Database Models

### User

* **id:** Primary key
* **name:** Full name
* **username:** Unique login username
* **password\_hash:** Hashed password
* **email:** Unique email address
* **birth\_day, birth\_month, birth\_year:** Date of birth
* **created\_at:** Timestamp of account creation

### Games

* **game\_id:** Primary key
* **game:** Name of the game
* **content:** Description or details
* **date:** Date of the game
* **sport:** Foreign key linking to Sports table
* **league:** League or competition name
* **team\_1, team\_2:** Participating teams

### Teams

* **team\_id:** Primary key
* **team\_name:** Name of the team

### Sports

* **id:** Primary key
* **name:** Name of the sport

### Competitions

* **id:** Primary key
* **name:** Name of the competition
* **sport\_id:** Foreign key linking to Sports table

### Association Tables

* **game\_saves:** Links users to saved games
* **team\_saves:** Links users to saved teams

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
```

2. Navigate to the project folder:

```bash
cd fanscape
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Initialize the database:

```bash
python app.py
```

## Running the App

1. Start the Flask development server:

```bash
python app.py
```

2. Open your browser and navigate to `http://127.0.0.1:5000`.

## API Endpoints

### User Authentication

* **POST /register:** Register a new user
* **POST /login:** Login existing user
* **POST /logout:** Logout current user

### User Data

* **POST /profile:** View user dashboard (requires login)

### Game and Team Management

* Users can save games and teams (API routes to be implemented)
* Fetch saved games/teams for each user

## Security Considerations

* Passwords are hashed using **Bcrypt** before storing in the database.
* Sessions are stored server-side using **Flask-Session**.
* Sensitive routes are protected by session checks.
* Validate user input to prevent injection attacks.

## Future Improvements

* Implement **JWT authentication** for API access.
* Add routes for saving/fetching games and teams dynamically.
* Integrate **live sports API** for real-time updates.
* Enhance front-end dashboard with modern JS frameworks.
* Add **search and filtering** for sports, competitions, games, and teams.

## Contributing

* Fork the repository and create a branch for your feature.
* Make commits with clear messages.
* Submit a pull request to the main repository.

## License

This project is licensed under the **MIT License**.
