from flask import Flask, jsonify
from flasgger import Swagger

app = Flask(__name__)

template = {
    "swagger": "2.0",
    "info": {
        "title": "EcoCollect Notification Service",
        "description": "Notification microservice for EcoCollect",
        "version": "1.0.0",
    },
}
Swagger(app, template=template)


@app.get("/hello")
def hello():
    """Hello World
    ---
    tags:
      - Hello
    responses:
      200:
        description: Returns Hello World
        schema:
          type: object
          properties:
            message:
              type: string
              example: Hello World
    """
    return jsonify(message="Hello World")


@app.get("/api/notifications/<user_id>")
def get_notifications(user_id):
    """Get a user's notifications
    ---
    tags:
      - Notifications
    parameters:
      - name: user_id
        in: path
        type: string
        required: true
        description: User id (the Keycloak sub)
        default: "1"
    responses:
      200:
        description: List of notifications (sample data for now)
    """
    return jsonify([
        {
            "id": 1,
            "userId": user_id,
            "title": "Collection completed",
            "message": "Your waste collection has been completed.",
            "status": "UNREAD",
        }
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8087, debug=True)
