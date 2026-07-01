from collections import namedtuple

emaildata = namedtuple("EmailData", ["username", "domain"])

def processrecord(records):
    processed = []
    for rec in records:
        usn, name, email, phone = rec
        username, domain = email.split("@")
        processed.append(
            (usn, name, emaildata(username, domain),phone)
        )
    return tuple(processed)