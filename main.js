/*var d = new Date();
document.getElementById("Date").innerHTML = d;
*/
setInterval(realtimeClock, 500);
function realtimeClock() {
	var rtClock = new Date();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();
	var en = "AM";
	if (hours > 12) {
		en = "PM";
	}
	if (hours > 12) {
		hours = hours - 12;
	}
	if (hours == 0) {
		hours = 12;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	document.getElementById("clock").innerHTML =
		hours + " : " + minutes + " : " + seconds + " " + en;
	var t = setTimeout(realTimeClock, 500);
}
