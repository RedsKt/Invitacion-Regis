
function startCountdown(eventDateString, elementIds) {
    var eventDate = new Date(eventDateString).getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var timeLeft = eventDate - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById(elementIds.days).innerHTML = days;
        document.getElementById(elementIds.hours).innerHTML = hours;
        document.getElementById(elementIds.minutes).innerHTML = minutes;
        document.getElementById(elementIds.seconds).innerHTML = seconds;

        if (timeLeft < 0) {
            clearInterval(x);
            document.getElementById(elementIds.days).innerHTML = "00";
            document.getElementById(elementIds.hours).innerHTML = "00";
            document.getElementById(elementIds.minutes).innerHTML = "00";
            document.getElementById(elementIds.seconds).innerHTML = "00";
        }
    }, 1000);
}




startCountdown("2024-11-30T00:00:00", {
    days: "dCount",
    hours: "hCount",
    minutes: "mCount",
    seconds: "sCount"
});
