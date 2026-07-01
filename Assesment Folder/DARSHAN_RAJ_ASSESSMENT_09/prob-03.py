import re

try:
    file = open("serverlog.txt", "r")
    data = file.read()
    lines = data.splitlines()
    total_lines = len(lines)
    total_words = len(data.split())
    total_chars = len(data)
    vowels = "aeiouAEIOU"
    total_vowels = 0
    for ch in data:
        if ch in vowels:
            total_vowels += 1
    info_count = len(re.findall(r"\[INFO\]", data))
    warning_count = len(re.findall(r"\[WARNING\]", data))
    error_count = len(re.findall(r"\[ERROR\]", data))
    critical_count = len(re.findall(r"\[CRITICAL\]", data))
    alerts = []
    for line in lines:
        if re.search(r"\[(ERROR|CRITICAL)\]", line):
            alerts.append(line)
    out = open("log_report.txt", "w")
    out.write(f"Total Lines : {total_lines}\n")
    out.write(f"Total Words : {total_words}\n")
    out.write(f"Total Chars : {total_chars}\n")
    out.write(f"Total Vowels : {total_vowels}\n\n")
    out.write(
        f"INFO:{info_count} "
        f"WARNING:{warning_count} "
        f"ERROR:{error_count} "
        f"CRITICAL:{critical_count}\n"
    )
    out.write("\n--- ALERTS ---\n")
    for a in alerts:
        out.write(a + "\n")
    print("Report generated successfully")
except FileNotFoundError:
    print("File not found")
except Exception as e:
    print("Error:", e)
finally:
    try:
        file.close()
        out.close()
    except:
        pass