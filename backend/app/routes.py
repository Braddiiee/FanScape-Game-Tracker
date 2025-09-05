from flask import Blueprint, request, jsonify, session
from app.models import Teams
from . import db, bcrypt
from .models import User, Games, Teams 

api = Blueprint("api", __name__)



# -----------------------------
# Test Route
# -----------------------------
@api.route("/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})


# -----------------------------
# Register
# -----------------------------
@api.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    new_user = User(
        name=data['name'],
        username=data['username'],
        password_hash=hashed_password,
        email=data['email'],
        birth_day=data['birth_day'],
        birth_month=data['birth_month'],
        birth_year=data['birth_year'],
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully!"})


# -----------------------------
# Login
# -----------------------------
@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    if bcrypt.check_password_hash(user.password_hash, data['password']):
        session['user_id'] = user.id
        return jsonify({"message":f"Welcome {user.username}!"})
    else:
        return jsonify({"error": "Invalid password"}), 401
    

# -----------------------------
# Logout
# -----------------------------
@api.route("/logout", methods=["POST"])
def logout():
    session.pop('user_id', None)
    return jsonify({"message": "Logged out successfully"})


# -----------------------------
# Profile
# -----------------------------
@api.route("/profile", methods=["GET"])
def profile():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.get(user_id)
    return jsonify({
        "id": user.id,
        "name": user.name,
        "username": user.username,
        "email": user.email,
        "birth_day": user.birth_day,
        "birth_month": user.birth_month,
        "birth_year": user.birth_year
    })


# -----------------------------
# Create a game
# -----------------------------
@api.route('/games', methods=["POST"])
def create_game(): 
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    data = request.get_json()
    new_game = Games(
        match_title = data['match_title'],
        home_team_id= data['home_team_id'],
        away_team_id=data['away_team_id'],
        date=data['date']
    )
    db.session.add(new_game)
    db.session.commit()
    return jsonify(new_game.to_dict()), 201

# -----------------------------
# Get all games
# -----------------------------
@api.route("/games", methods=["GET"])
def get_games():
    games = Games.query.all()
    return jsonify([game.to_dict() for game in games])

# -----------------------------
# Get a single game
# -----------------------------
@api.route("/games/<int:game_id>", methods=["GET"])
def get_game(game_id):
    game = Games.query.get_or_404(game_id)
    return jsonify(game.to_dict())


# -----------------------------
# Update a game
# -----------------------------
@api.route("/games/<int:game_id>", methods=["PUT"])
def update_game(game_id):
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    game = Games.query.get_or_404(game_id)
    data = request.get_json()
    game.match_title = data.get('match_title', game.match_title)
    game.home_team_id = data.get('home_team_id', game.home_team_id)
    game.away_team_id = data.get('away_team_id', game.away_team_id)
    game.date = data.get('date', game.date)
    db.session.commit()
    return jsonify(game.to_dict())

# -----------------------------
# Delete a game
# -----------------------------
@api.route("/games/<int:game_id>", methods=["DELETE"])
def delete_game(game_id):
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    game = Games.query.get_or_404(game_id)
    db.session.delete(game)
    db.session.commit()
    return jsonify({"message": "Game deleted"})



# -----------------------------
# Teams CRUD Operations
# -----------------------------

@api.route('/teams', methods=['GET'])
def get_teams():
    teams = Teams.query.all()
    return jsonify([{
        'id': t.id,
        'team_name': t.team_name,
        'logo_url': t.logo_url
    } for t in teams])


@api.route('/teams', methods=['POST'])
def create_team():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Unauthorized'}), 401


    data = request.get_json() or {}
    if not data.get('team_name'):
        return jsonify({'error': 'team_name is required'}), 400


    if Teams.query.filter_by(team_name=data['team_name']).first():
        return jsonify({'error': 'Team already exists'}), 400


    new_team = Teams(
    team_name=data['team_name'],
    logo_url=data.get('logo_url')
    )
    db.session.add(new_team)
    db.session.commit()


    return jsonify({
    'id': new_team.id,
    'team_name': new_team.team_name,
    'logo_url': new_team.logo_url
    }), 201


