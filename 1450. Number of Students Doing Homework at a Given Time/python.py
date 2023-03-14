def busyStudent(startTime, endTime, queryTime):
    rt = 0
    for i in range(0, len(startTime)):
        if startTime[i] <= queryTime and endTime[i] >= queryTime: 
            rt += 1
    return rt


startTime = [1, 2, 3]
endTime = [3, 2, 7]
queryTime = 4

#startTime = [4]
#endTime = [4]
#queryTime = 4

print(busyStudent(startTime, endTime, queryTime))
