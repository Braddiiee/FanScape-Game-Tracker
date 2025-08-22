# __init__.py

```
from flask_cors import CORS

CORS(app)  # Let frontend (React) talk to the backend

```

CORS stands for Cross-Origin Resource Sharing 

Web browsers restrict frontend JS from calling backend on a different origin by default. This is called Same-Origin Policy. 

https://flask-cors.readthedocs.io/en/latest/

# db.init_app(app)

```
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
db.init_app(app)
```

SQLAlchemy() is a database ORM (Object-Relational Mapper). It allows me to define my db models as python classes instead of writing raw SQL.

db.init_app(app) binds the SQLAlchemy instance to the Flask app.

https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/



# Blueprint import and registration

``` 
from .routes import api
app.register_blueprint(api, url_prefix="/api")
```

Blueprint is a way to organize routes in __init__.py or app.py we can put them in separate files like routes.py

api is the Blueprint instance from routes.py


app.register_blueprint(api, url_prefix="/api") tells Flask:

“Use all routes from this blueprint”

“Prefix them with /api” → so /hello becomes /api/hello

# Blueprint code in routes.py

``` 
from flask import Blueprint, request, jsonify

api = Blueprint("api", __name__)

@api.route("/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})
```

Line by line

from flask import Blueprint, request, jsonify

Blueprint: lets you organize routes (as explained above)

request: gives access to incoming request data (POST body, query params, headers, etc.)

jsonify: converts Python dictionaries/lists into JSON responses with correct headers (Content-Type: application/json)

api = Blueprint("api", __name__)

Creates a new Blueprint object called api

"api" is the blueprint name

__name__ tells Flask where the blueprint is defined (used for locating templates/static files if needed)

@api.route("/hello")

This is a route decorator: it registers the function below as a handler for GET requests to /hello

Since we registered the blueprint with url_prefix="/api", the full URL becomes /api/hello

def hello():

This is the function that will run whenever someone requests /api/hello

return jsonify({"message": "Hello from Flask API!"})

Converts the Python dict {"message": "Hello from Flask API!"} to JSON

Flask automatically sets the HTTP response headers so the frontend knows it’s JSON