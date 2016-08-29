from dateparser import parse as parse_date_string

from ubiquityRSS import db


class Entry(db.Document):
    id = db.StringField(required=True, primary_key=True)
    author = db.StringField(required=True)
    link = db.StringField(required=True)
    published = db.DateTimeField(required=True)
    title = db.StringField(required=True)
    summary = db.StringField(required=True)
    favourited = db.BooleanField(default=False)

    @staticmethod
    def get_or_create(id, author, link, published, title, summary):
        try:
            entry = Entry.objects.get(id=id)
        except Entry.DoesNotExist:
            published = parse_date_string(published)
            entry = Entry(
                id=id, author=author, link=link, published=published,
                title=title, summary=summary)
            entry.save()
        finally:
            return entry

    def mark_favourite(self):
        self.favourited = True
        self.save()
