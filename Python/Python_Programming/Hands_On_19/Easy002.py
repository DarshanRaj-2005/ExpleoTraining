def findPrime():
    
    for i in range(2,100):
        flag = 0
        j = 2
        while(j < i):
            if( i % j == 0):
                flag = 1
                break
            else:
                flag = 0
            j=j+1

        if flag == 1:
            print(i,"It is not a prime")
        else:
            print(i,"it is a prime")
    
findPrime()