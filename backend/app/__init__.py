from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_cors import CORS # Cross-Origin Resource Sharing

db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydb.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.secret_key = "supersecret"

    CORS(app) # Let frontend (React talk to the backend) 

    db.init_app(app)
    bcrypt.init_app(app)
    Session(app)


    from .routes import api
    app.register_blueprint(api, url_prefix="/api")

    with app.app_context():
        db.create_all()

    return app


