function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    
    
    document.getElementById('time').innerHTML = "Time is: " + hour + ":" + min + ":" + sec;
    document.getElementById('timeDate').innerHTML = "Today is " + day+ "." + month + "." + year;
    
    setTimeout(getDateTime, 1000);
}

