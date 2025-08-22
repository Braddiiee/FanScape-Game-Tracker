from app import create_app # Import the create app function from app/__init__.py

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)