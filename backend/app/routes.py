from flask import Blueprint, request, jsonify, session
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