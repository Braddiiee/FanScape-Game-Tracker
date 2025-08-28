from flask import Flask, request, jsonify, session, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_session import Session
from datetime import datetime

app = Flask(__name__) # Set up the app as a flask app that expects the name of file

# Database 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydb.db'
app.config['SQLALCHEMY_TRACK_MOTIFICATIONS'] = False

# Security key & sessions 
app.config['SECRET_KEY'] = "supersecretkey"
app.config['SESSION_TYPE'] = "filesystem"

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
Session(app)

# Create a class defining the user with each column defined with it's data type and whether it is unique or nullable
class User(db.Model):
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable = False )
    name = db.Column(db.String(100), unique=True, nullable=False)
    user_name = db.Column(db.String(100), unique=False, nullable=False)
    password_hash = db.Column(db.String(100), unique=False, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable = False)
    birth_day = db.Column(db.Integer, unique=True, nullable = False)
    birth_month = db.Column(db.Integer, unique=True, nullable = False)
    birth_year = db.Column(db.Integer, unique=True, nullable = False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Create a games table defining the games
class Games(db.Model):
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable = False )
    game = db.Column(db.String(100), unique=True, nullable=False)
    content = db.Column(db.String(100), unique=False, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    sport = db.Column(db.String(100), nullable=False)
    league = db.Column(db.String(100), unique=False)
    team_1 = db.Column(db.String(100), unique=True)
    team_2 = db.Column(db.String(100), unique=True)

# Creates a table side by side showing the user and the games that they have saved
game_saves = db.Table('g_saves',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id'))
)

# Creates a relationship returning username and the saved user 
saved_games = db.relationship('Games', secondary='game_saves', backref='saved_by')

# Create a teams class 
class Teams(db.Model):
    id = db.Column(db.Integer, primary_key = True, unique=True, nullable=False)
    team_name = db.Column(db.String(100), unique=True, nullable=False)

# Creates a table side by side showing the user id and the team id that they have saved 
team_saves = db.Table('t_saves',
    db.Column('user.id', db.Integer, db.ForeignKey('user.id')),
    db.Column('team.id', db.Integer, db.ForeignKey('teams.id'))
)

# Returns username and team that they have saved
saved_teams = db.relationship('Teams', secondary='team_saves', backref='saved_by')

# Create all of the tables
with app.app_context():
    db.create_all()

# Creates the home route that checks if the user is logged in 
@app.route("/", methods=["GET"])
def home():
    # Checck if the user id is in session or if they are logged in
    if 'user_id' in session:  # user is logged in
        return redirect(url_for('profile'))
    else:  # user not logged in
        return render_template("index.html")  # make sure 'templates/index.html' exists

@app.route("/games")
def games():
    return render_template("games.html")

@app.route("/teams")
def teams():
    return render_template("teams.html")  

@app.route("/competitions")
def competitions():
    return render_template("competitions.html")  

# Receive data from the register route using the POST method  
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    # Add all the fields from the register form into the User table in the database
    new_user = User(
        name = data['name'],
        user_name = data['username'],
        password_hash = hashed_password,
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
    user = User.query.filter_by(name=data['name']).first() # Query to look for user, filtering by the user's name 

    if not user:
        return jsonify({"message": "No user has been found"}) # Return error if the user has not been found
    
    correct_password = bycrypt.check_password_hash(user.password_hash, data['password'])
    
    # If the password is correct, store the user id in session
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
@app.route('/profile', methods=['POST', 'GET'])
def profile():

    # if not session['user_id']:
    #     return jsonify({"error": "Unauthorized"}), 401
    
    # user = User.query.get(session['user_id'])

    return render_template('profile.html')


if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # make sure tables exist
    app.run(debug=True)


