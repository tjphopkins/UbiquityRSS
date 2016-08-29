import json

from flask import Flask, render_template
from flask_mongoengine import MongoEngine
import feedparser

from ubiquityRSS.config import SECRET_CONFIG

app = Flask(__name__)

# Configuration
app.config.update(SECRET_CONFIG)
db = MongoEngine(app)
app.config.update(
    MONGODB_SETTINGS={'DB': "todo"},
    DATABASE=db
)


def _convert_entry_to_dict(entry_object):
    return {
        'id': entry_object.id,
        'author': entry_object.author,
        'link': entry_object.link,
        'published': str(entry_object.published),
        'title': entry_object.title,
        'summary': entry_object.summary,
        'favourited': entry_object.favourited
    }


def _fetch_and_parse_feed(url='https://www.theguardian.com/uk/technology/rss'):
    # TODO: Find better solution to solve circular import of Entry model
    from ubiquityRSS.documents import Entry
    feed = feedparser.parse(url)
    entries = feed['entries']
    entries.sort(key=lambda x: x['published'], reverse=True)
    entry_dicts = []
    for entry in entries:
        entry_object = Entry.get_or_create(
            entry['id'], entry['author'], entry['link'], entry['published'],
            entry['title'], entry['summary'])
        entry_dicts.append(_convert_entry_to_dict(entry_object))
    return entry_dicts


# Views
# (I'd usually give these their own file and create an interal api for accessing
# and altering db documents, but since this is a small app, I'll leave this
# all in here)
@app.route('/')
def index():
    """Renders the app template which initialises the React application."""
    config = {
        'entries': _fetch_and_parse_feed()
    }
    return render_template('index.html', config=json.dumps(config))


if __name__ == '__main__':
    app.run(debug=True)
