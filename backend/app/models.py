from . import db
from datetime import datetime

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    birth_day = db.Column(db.Integer, nullable=False)
    birth_month = db.Column(db.Integer, nullable=False)
    birth_year = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Games model
class Games(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    game = db.Column(db.String(100), unique=True, nullable=False)
    content =  db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    sport = db.Column(db.String(100), nullable=False)
    league = db.Column(db.String(100))
    team_1 = db.Column(db.String(100))
    team_2 = db.Column(db.String(100))

# Teams Model 
class Teams(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100), unique=True, nullable=False)

# Many-to-many relationships
game_saves = db.Table(
    'game_saves',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id')),
)

team_saves = db.Table(
    'team_saves',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('team_id', db.Integer, db.ForeignKey('teams.id'))
)

# Attach relationships to User dynamically 
User.saved_games = db.relationship('Games', secondary=game_saves, backref='saved_by')
User.saved_teams = db.relationship('Teams', secondary=team_saves, backref='saved_by')
