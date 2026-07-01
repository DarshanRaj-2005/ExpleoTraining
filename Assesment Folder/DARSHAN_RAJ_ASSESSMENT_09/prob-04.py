from data_processor import *
from data_validator import *

records = []

n = int(input("Enter the number of records: "))

for i in range(n):

    try:
        usn = input("Enter the usn: ")
        name = input("Enter the name: ")
        email = input("Enter the email: ")
        phone = input("Enter the phone: ")

        validate_usn(usn)
        validate_email(email)
        validate_phone(phone)
        records.append((usn, name, email, phone))

    except InvalidFieldError as e:
        print("Error:", e)
        continue

records = tuple(records)
processed = processrecord(records)
print("\nValid Records:", len(processed))
print("\nUSN\tName\tUsername\tDomain\tPhone")

for rec in processed:
    usn, name, emaildata, phone = rec
    print(usn,"\t",name,"\t",emaildata.username,"\t",emaildata.domain,"\t",phone)