# Ubiquity RSS

Steps to test:

i. Install node so we can use npm (https://nodejs.org/en/download/)
1. Create new python virtualenv and activate
2. pip install 'flask', 'flask-mongoengine', 'dateparser' and 'feedparser'
3. Clone this git repository
4. Move to the 'frontend' directory
5. run: 'npm install'
6. run: 'npm run build'
7. Move into the top-level ubiquityRSS directory. Run: 'python runserver.py'
8. Navigate to localhost:5000/

Bugs:
Unfortunately, the favourited state of an entry is not updating dynamically. That is,
after clicking the Favourite button, one has to refresh to see changes. For some
reason the AppComponent isn't listening properly to the EntriesStore's emitted change events.

