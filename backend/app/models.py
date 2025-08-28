from . import db
from datetime import datetime

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    birth_date = db.Column(db.Date, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # The to_dict() method converts the Python object into a dictionary, which can then easily be sent as JSON via an API response.
    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "birthDate": self.birth_date.isoformat() if self.birth_date else None,
            "email": self.email
        }


# Games model
class Games(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    match_title = db.Column(db.String(100),  nullable=False)
    home_team_id = db.Column(db.Integer, db.ForeignKey('team.id'))
    away_team_id = db.Column(db.Integer, db.ForeignKey('team.id'))
    content =  db.Column(db.String(100), nullable=False)
    date = db.Column(db.DateTime)
    home_team = db.relationship('Teams', foreign_keys=[home_team_id])
    away_team = db.relationship('Teams', foreign_keys=[away_team_id])
    sport = db.Column(db.String(100), nullable=False)
    league = db.Column(db.String(100))

    # The to_dict() method converts the Python object into a dictionary, which can then easily be sent as JSON via an API response.
    def to_dict(self):
        return {
            "id": self.id,
            "match_title": self.match_title,
            "home_team": {"team_id": self.home_team.id, "team_name": self.home_team.team_name},
            "away_team": {"team_id": self.away_team.id, "team_name": self.away_team.team_name},
            "date": self.date.isoformat()
        }



# Teams Model 
class Teams(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100), unique=True, nullable=False)
    logo_url = db.Column(db.String(255), nullable=True)

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
