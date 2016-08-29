from flask import Flask
from flask_mongoengine import MongoEngine

from ubiquityRSS.config import SECRET_CONFIG

app = Flask(__name__)

# Configuration
app.config.update(SECRET_CONFIG)
db = MongoEngine(app)
app.config.update(
    MONGODB_SETTINGS={'DB': "todo"},
    DATABASE=db
)

if __name__ == '__main__':
    app.run(debug=True)
