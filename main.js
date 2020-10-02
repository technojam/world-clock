function showTime() {
	d = new Date(); //Getting the local date object

	utc = d.getTime() + d.getTimezoneOffset() * 60000; //converting the time to gmt and in miliseconds for easier conversion of time for different countries

	checkDropdown = document.getElementById("list").value; // getting the value of the selected country

	var session = "AM";

	if (checkDropdown == "india") {
		nd = new Date(utc + 3600000 * 5.5); // create new object of the date according to chosen country
	} else if (checkDropdown == "california") {
		nd = new Date(utc + 3600000 * -7);
	} else if (checkDropdown == "newYork") {
		nd = new Date(utc + 3600000 * -4);
	} else if (checkDropdown == "japan") {
		nd = new Date(utc + 3600000 * 9);
	} else if (checkDropdown == "uae") {
		nd = new Date(utc + 3600000 * 4);
	} else if (checkDropdown == "moscow") {
		nd = new Date(utc + 3600000 * 3);
	} else if (checkDropdown == "france") {
		nd = new Date(utc + 3600000 * 2);
	} else if (checkDropdown == "africa") {
		nd = new Date(utc + 3600000 * 2);
	}

	// Changed the timming in 12 hours format
	var res = nd.toLocaleString();
	res = res.split(" ");
	var ans = res[1].split(":");

	if (ans[0] > 12) {
		var t = parseInt(ans[0]) - 12;
		ans[0] = t.toString();
		session = "PM";
	}

	if (ans[0] == 0) {
		ans[0] = "12";
	}

	res[1] = ans.join(":");

	document.getElementById("clock").innerHTML = res[1] + " " + session;
	setTimeout(showTime, 1000);
}
showTime();

setInterval(setClock, 1000);

const IndiahourHand = document.querySelector("[india-hour-hand]");
const IndiaminuteHand = document.querySelector("[india-minute-hand]");
const IndiasecondHand = document.querySelector("[india-second-hand]");

const chicagohourHand = document.querySelector("[chicago-hour-hand]");
const chicagominuteHand = document.querySelector("[chicago-minute-hand]");
const chicagosecondHand = document.querySelector("[chicago-second-hand]");

const japanhourHand = document.querySelector("[japan-hour-hand]");
const japanminuteHand = document.querySelector("[japan-minute-hand]");
const japansecondHand = document.querySelector("[japan-second-hand]");

function setClock() {
	const indiacurrentDate = new Date();
	
	const indiasecondsRatio = indiacurrentDate.getSeconds() / 60;
	const indiaminutesRatio = (indiasecondsRatio + indiacurrentDate.getMinutes()) / 60;
	const indiahoursRatio = (indiaminutesRatio + indiacurrentDate.getHours()) / 12;

	var utc = indiacurrentDate.getTime() + indiacurrentDate.getTimezoneOffset() * 60000;

	const chicagoCurrentDate = new Date(utc + 3600000 * -5);
	const chicagosecondsRatio = chicagoCurrentDate.getSeconds() / 60;
	const chicagominutesRatio = (chicagosecondsRatio + chicagoCurrentDate.getMinutes()) / 60;
	const chicagohoursRatio = (chicagominutesRatio + chicagoCurrentDate.getHours()) / 12;

	const japanCurrentDate = new Date(utc + 3600000 * 9);
	const japansecondsRatio = japanCurrentDate.getSeconds() / 60;
	const japanminutesRatio = (japansecondsRatio + japanCurrentDate.getMinutes()) / 60;
	const japanhoursRatio = (japanminutesRatio + japanCurrentDate.getHours()) / 12;

	setRotation(IndiasecondHand, indiasecondsRatio);
	setRotation(IndiaminuteHand, indiaminutesRatio);
	setRotation(IndiahourHand, indiahoursRatio);

	setRotation(chicagosecondHand, chicagosecondsRatio);
	setRotation(chicagominuteHand, chicagominutesRatio);
	setRotation(chicagohourHand, chicagohoursRatio);

	setRotation(japansecondHand, japansecondsRatio);
	setRotation(japanminuteHand, japanminutesRatio);
	setRotation(japanhourHand, japanhoursRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}
