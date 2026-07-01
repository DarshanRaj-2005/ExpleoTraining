#Birth year 
from datetime import datetime

bdate = input("Enter your Birthday Date (YYYY-MM-DD):")
byear = bdate[0:4]
currentDate = datetime.now().year
print(currentDate - int(byear))

