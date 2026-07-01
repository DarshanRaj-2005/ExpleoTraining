try:
    fh = open("ExceptionHandlingFiles/test.txt","w")
    try:
        fh.write("This is the another try for exception handling")
    except Exception as e:
        print("Error: ",e)
    finally:
        print("Going to close the file")
        fh.close()
except IOError:
    print("Error: Can't read or open the file")
else:
    print("Program executed without Exception")
finally:
    print("Program over")

