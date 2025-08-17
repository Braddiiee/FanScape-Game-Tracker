from flask import Flask, request, jsonify, session, render_template 
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bycrypt
from flask_session import Session
from datetime import datetime

app = Flask(__name__) # Set up the flask app that expects the name of file

# Database 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydb.db'
app.config['SQLALCHEMY_TRACK_NOTIFICATIONS'] = False

# Security key & sessions 
app.config['SECRET_KEY'] = "supersecretkey"
app.config['SESSION_TYPE'] = "filesystem"

# Initialize extensions
db = SQLAlchemy(app)
bycrypt = Bycrypt(app)
Session(app)

# Create a class defining the user 
class User(db.Model):
    id = db.Column(db.id, primary_key = True, unique=True, nullable = False )
    name = db.Column(db.name, unique=True, nullable=False)
    user_name = db.Column(db.user_name, unique=False, nullable=False)
    password_hash = db.Column(db.password_hash, unique=False, nullable=False)
    email = db.Column(db.email, unique=True, nullable = False)
    birth_day = db.Column(db.birth_day, unique=True, nullable = False)
    birth_month = db.Column(db.birth_month, unique=True, nullable = False)
    birth_year = db.Column(db.birth_year, unique=True, nullable = False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Create a games table defining the games
class Games(db.Model):
    game_id = db.Column(db.id, primary_key = True, unique=True, nullable = False )
    game = db.Column(db.game, unique=True, nullable=False)
    content = db.Column(db.content, unique=False, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    sport = db.Column(db.sport, nullable=False)
    league = db.Column(db.league, unique=False)
    team_1 = db.Column(db.team_1, unique=True)
    team_2 = db.Column(db.team_2, unique=True)

# Creates a table side by side showing the user and the games that they have saved
game_saves = db.Table('g_saves',
    db.Column('user_id', db.Integer, db.ForeignKey('user_id')),
    db.Column('game_id', db.Integer, db.ForeignKey('game_id'))
)

# Returns username and the saved user 
saved_games = db.relationship('Games', secondary='game_saves', backref='saved_by')

# Create a teams class 
class Teams(db.Model):
    team_id = db.Column(db.team_id, primary_key = True, unique=True, nullable=False)
    team_name = db.Column(db.team_name, unique=True, nullable=False)

# Creates a table side by side showing the user id and the team id that they have saved 
team_saves = db.Table('t_saves',
    db.Column('user_id', db.Integer, db.ForeignKey('user_id')),
    db.Column('team_id', db.Integer, db.ForeignKey('team_id'))
)

# Returns username and team that they have saved
saved_teams = db.relationship('Teams', secondary='game_saves', backref='saved_by')

# Create all of the tables
with app.app_context():
    db.create_all(User, Games, Teams)
    
# Receive data from the register route using the POST method  
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    hashed_password = bycrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        name = data['name'],
        username = data['username'],
        password = hashed_password,
        email = data['email'],
        birth_day = data['birth_day'],
        birth_month = data['birth_month'],
        birth_year = data['birth_year'],
    ) 
     
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully!"})

# Receive data from the login route using the POST method  
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(name=data['name']).first() # Query to look for user 

    if not user:
        return jsonify({"message": "No user has been found"}) # Return error if the user has not been found
    
    correct_password = bycrypt.check_password_hash(user.password_hash, data['password'])
    
    if correct_password:
        session['user_id'] = user.id
        return jsonify({"message": "Welcome, user"})
    
    return jsonify({"error": "Invalid username or password"}), 401

# Receive data from the logout route using the POST method  
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)

    return jsonify({"message": "You have been successfully logged out."})

# Receive data from the profile route using the POST method  
@app.route('/profile', methods=['POST'])
def profile():

    if not session['user_id']:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.get(session['user_id'])

    return render_template('dashboard.html', id=user.id, username=user.username, email=user.email)




