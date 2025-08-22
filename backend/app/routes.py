from flask import Blueprint, request, jsonify

api = Blueprint("api", __name__)

@api.route("/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})