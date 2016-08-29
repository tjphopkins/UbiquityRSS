# Ubiquity RSS

Steps to test:

1. Install node so we can use npm (https://nodejs.org/en/download/)
2. Create new python virtualenv and activate
3. pip install 'flask', 'flask-mongoengine', 'dateparser' and 'feedparser'
4. Clone this git repository
5. Move to the 'frontend' directory
6. run: 'npm install'
7. run: 'npm run build'
8. Move into the top-level ubiquityRSS directory. Run: 'python runserver.py'
9. Navigate to localhost:5000/

Bugs:
Unfortunately, the favourited state of an entry is not updating dynamically. That is,
after clicking the Favourite button, one has to refresh to see changes. For some
reason the AppComponent isn't listening properly to the EntriesStore's emitted change events.

