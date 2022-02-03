/* Sidebar Button*/

$('.layar-dalam').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

$('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show");
    $('nav ul .first').toggleClass("rotate");
});

$('.serv-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
    $('nav ul .second').toggleClass("rotate");
});

$('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});


/*Waktu Digital*/ 

function updateTime() {
    var dateInfo = new Date();

    /* time */
    var hr,
        _min =  (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
        sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
        ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

    // replace 0 with 12 at midnight, subtract 12 from hour if 13-23
    if (dateInfo.getHours() == 0) {
        hr = 12;
    } else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    } else {
        hr = dateInfo.getHours();
    }

    var currentTime = hr + ":" + _min + ":" + sec;

    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;

/*Date*/

var dow = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"],
    day = dateInfo.getDate();

// Store Date
var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

document.getElementsByClassName("date")[0].innerHTML = currentDate;

};

// print time and date once, then update them every second
updateTime();
setInterval(function(){
    updateTime()
}, 1000);