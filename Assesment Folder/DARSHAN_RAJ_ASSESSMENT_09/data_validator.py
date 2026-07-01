import re

class InvalidFieldError(Exception):

    def __init__(self, field_name, value):

        self.field_name = field_name
        self.value = value

        super().__init__(f"Invalid {field_name}: {value}")


def validate_email(email):

    pattern = r"^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,5}$"

    if not re.match(pattern, email):
        raise InvalidFieldError("Email", email)

    return True


def validate_phone(phone):

    pattern = r"^[6-9][0-9]{9}$"

    if not re.match(pattern, phone):
        raise InvalidFieldError("Phone", phone)

    return True


def validate_usn(usn):

    pattern = r"^25MCA\d{3}$"

    if not re.match(pattern, usn):
        raise InvalidFieldError("USN", usn)

    return True