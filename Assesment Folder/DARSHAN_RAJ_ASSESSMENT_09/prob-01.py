marks = {"25MCA001":77,"25MCA009":60,"25MCA025":99,"25MCA007":84,"25MCA012":45,"25MCA021":86,"25MCA032":83,"25MCA018":40,"25MCA014":67}

max = list(marks.values())[0]
maxKey = ""
min = list(marks.values())[0]
minKey = ""

for i in marks:
    if marks[i] > max:
        max = marks[i]
        maxKey = i

    elif marks[i] < min:
        min = marks[i]
        minKey = i

print("Maximum: ",max," - ",maxKey)
print("Minimum: ",min," - ",minKey)

distinction = {}
merit = []
passed =[]
fail = []

for i in marks:
    if (marks[i] >= 86 and marks[i] <= 100):
        distinction[i] = marks[i]
    elif marks[i] >= 76:
        merit.append(i)
    elif marks[i] >= 60:
        passed.append(i)
    elif marks[i] < 60:
        fail.append(i)
print("Distinction: ",len(distinction)," -> ",distinction)
print("Merit: ",len(merit)," -> ",merit)
print("Pass: ",len(passed)," -> ",passed)
print("Fail: ",len(fail)," -> ",fail)


tot = 0
for i in marks:
    tot += marks[i]
avg = tot / 9
print("Class Average: ",round(avg,2))

belowavg = []
for i in marks:
    if marks[i] < avg:
        belowavg.append(i)

print("Below Average: ",belowavg)

sortDict = dict(sorted(marks.items(),key=lambda x:x[1],reverse=True))
print("Leaderboard:")
print(sortDict)




        



