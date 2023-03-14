startTime = [1,2,3]
endTime = [3,2,7]
queryTime = 4

startTime = [4]
endTime = [4]
queryTime = 4

var busyStudent = function (startTime, endTime, queryTime) {
    rt = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            rt += 1;
        }
    }
    return rt;
};

console.log(busyStudent(startTime, endTime, queryTime));