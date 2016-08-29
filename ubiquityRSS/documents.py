from ubiquityRSS import db


class Entry(db.Document):
    rss_id = db.StringField(required=True, primary_key=True)
    author = db.StringField(required=True)
    link = db.StringField(required=True)
    # really gross, should store 'published' as a DateTime field:
    published = db.StringField(required=True)
    title = db.StringField(required=True)
    summary = db.StringField(required=True)
    favourited = db.BoolField(default=False)

    @staticmethod
    def get_or_create(rss_id, author, link, published, title, summary):
        try:
            entry = Entry.objects.get(rss_id=rss_id)
        except Entry.DoesNotExist:
            entry = Entry(
                rss_id=rss_id, author=author, link=link, published=published,
                title=title, summary=summary)
            entry.save()
        finally:
            return entry

    def mark_favourite(self):
        self.favourited = True
        self.save()
