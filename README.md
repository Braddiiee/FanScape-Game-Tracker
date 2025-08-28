# FanScape Game Tracker

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Flask](https://img.shields.io/badge/Flask-2.3-green?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python&logoColor=white)](https://www.python.org/)
[![SQLite](https://img.shields.io/badge/SQLite-3.41-orange?logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, full-stack sports game tracking application built with React 19, TypeScript, and Flask.

## Overview

**FanScape Game Tracker** is a comprehensive sports application that allows users to track games, manage favorite teams, and stay updated with competitions across multiple sports. Built with a modern tech stack, it features a responsive React frontend with TypeScript and a robust Flask backend API.

### Key Features

- **Multi-Sport Support**: Track games across football, basketball, and other sports
- **User Authentication**: Secure user registration, login, and profile management
- **Favorite Teams**: Save and manage your favorite teams
- **Game Tracking**: Track upcoming and past games with detailed information
- **Competition Management**: Browse and follow various sports competitions
- **Responsive Design**: Modern, mobile-first interface built with Tailwind CSS
- **Advanced Filtering**: Filter games by sport, date, and competition
- **Real-time Updates**: Live game data and statistics

## Architecture

### Frontend
- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for responsive, utility-first styling
- **React Router** for client-side navigation
- **Context API** for state management
- **Axios** for HTTP requests

### Backend
- **Flask** Python web framework
- **SQLite** database with SQLAlchemy ORM
- **JWT** authentication system
- **RESTful API** design
- **Session management** with Flask-Session

## Project Structure

```
FanScape Game Tracker/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React Context providers
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript definitions
│   │   └── data/           # Mock data and configurations
│   ├── public/             # Static assets
│   └── package.json        # Dependencies and scripts
├── backend/                 # Flask Python backend
│   ├── app/
│   │   ├── routes.py       # API endpoints
│   │   ├── models.py       # Database models
│   │   └── utils.py        # Utility functions
│   └── run.py              # Application entry point
├── app.py                   # Main Flask application
├── requirements.txt         # Python dependencies
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** 9+
- **Python** 3.11+
- **Git**

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "FanScape Game Tracker"
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask application**
   ```bash
   python run.py
   ```

5. **API will be available at** `http://localhost:5000`

### Database Setup

The SQLite database will be automatically created when you first run the application. The database file will be located at `instance/mydb.db`.

## Core Features

### User Management
- **Registration & Authentication**: Secure user account creation and login
- **Profile Management**: User profiles with saved games and favorite teams
- **Session Management**: Secure session handling with Flask-Session

### Sports & Games
- **Multi-Sport Support**: Football, Basketball, and more
- **Game Tracking**: Save, track, and manage games
- **Competition Browsing**: Explore various sports competitions
- **Team Management**: Save and follow favorite teams

### Data Management
- **Real-time Updates**: Live game data and statistics
- **Advanced Filtering**: Filter by sport, date, competition
- **Search Functionality**: Find specific games, teams, or competitions
- **Data Persistence**: User preferences and saved items

## API Endpoints

### Authentication
```
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
POST /api/auth/logout       # User logout
GET  /api/auth/profile      # Get user profile
```

### Games
```
GET    /api/games           # List all games
GET    /api/games/<id>      # Get specific game
POST   /api/games           # Create new game
PUT    /api/games/<id>      # Update game
DELETE /api/games/<id>      # Delete game
```

### Teams
```
GET    /api/teams           # List all teams
GET    /api/teams/<id>      # Get specific team
POST   /api/teams           # Create new team
PUT    /api/teams/<id>      # Update team
DELETE /api/teams/<id>      # Delete team
```

### Competitions
```
GET    /api/competitions    # List all competitions
GET    /api/competitions/<id> # Get specific competition
```

## Development

### Frontend Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Backend Development

```bash
# Run Flask development server
python run.py

# Run with debug mode
export FLASK_DEBUG=1
python run.py
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (configured via ESLint)
- **Tailwind CSS**: Utility-first CSS framework

## Testing

```bash
# Frontend testing (when implemented)
npm test

# Backend testing (when implemented)
python -m pytest
```

## Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
```

The built application will be in the `frontend/dist/` directory, ready for deployment to any static hosting service.

### Backend Deployment
The Flask application can be deployed using:
- **Gunicorn** for production WSGI server
- **Docker** for containerized deployment
- **Heroku**, **Railway**, or **Render** for cloud deployment

## Security Features

- **Password Hashing**: Bcrypt-based password security
- **Session Management**: Secure server-side sessions
- **Input Validation**: Comprehensive input sanitization
- **SQL Injection Protection**: Parameterized queries
- **CORS Configuration**: Cross-origin resource sharing setup

## Development Roadmap

### Phase 1: Core Features (Completed)
- [x] React frontend with TypeScript
- [x] Flask backend API structure
- [x] User authentication system
- [x] Basic routing and navigation
- [x] Component architecture

### Phase 2: Backend Development (In Progress)
- [ ] Complete API endpoints implementation
- [ ] Database models and migrations
- [ ] JWT authentication
- [ ] Data validation and error handling

### Phase 3: Integration & Enhancement (Planned)
- [ ] Frontend-backend API integration
- [ ] Real-time data updates
- [ ] Advanced filtering and search
- [ ] Performance optimization

### Phase 4: Advanced Features (Future)
- [ ] Push notifications
- [ ] Social features
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow **TypeScript** best practices
- Use **conventional commits** for commit messages
- Ensure **responsive design** for all components
- Write **comprehensive tests** for new features
- Update **documentation** for API changes

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **React Team** for the amazing frontend framework
- **Flask Community** for the robust Python web framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/fanscape-game-tracker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/fanscape-game-tracker/discussions)
- **Email**: [your-email@example.com]

---

**Made with dedication by the FanScape Team**

*Track your favorite sports, never miss a game!*
