from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS # Cross-Origin Resource Sharing

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydb.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.secret_key = "supersecret"

    CORS(app) # Let frontend (React talk to the backend) 

    db.init_app(app)

    from .routes import api
    app.register_blueprint(api, url_prefix="/api")

    return app


