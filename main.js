<<<<<<< HEAD
var d = new Date();
document.getElementById("Date").innerHTML = d;
function showTime(){
    var date=new Date();
    var h= date.getHours();
    var m= date.getMinutes();
    var s= date.getSeconds();
    var session = "AM";
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    a=(s<10) ? "0" + s : s;
    var time= h + ":" + m + ":" + s + " " + session;
    document.getElementById("Date").innerHTML = time;
    setTimeout(showTime,1000);
}
=======

function showTime(){
	d = new Date(); //Getting the local date object
   
    utc = d.getTime() + (d.getTimezoneOffset() * 60000); //converting the time to gmt and in miliseconds for easier conversion of time for different countries
   
	checkDropdown = document.getElementById("list").value; // getting the value of the selected country

	var session = 'AM';

	if(checkDropdown == 'india'){
		nd = new Date(utc + (3600000*5.5));		// create new object of the date according to chosen country
	}

    else if(checkDropdown == 'california'){
		nd = new Date(utc + (3600000*(-7)));
	}

	else if(checkDropdown == 'newYork'){
		nd = new Date(utc + (3600000*(-4)));
	}
	
	// Changed the timming in 12 hours format
	var res = nd.toLocaleString()
	res = res.split(" ");
	var ans = res[1].split(":");

	if(ans[0]>12){
		var t = parseInt(ans[0]) -12;
		ans[0] = t.toString();
		session = 'PM';
	}

	if(ans[0]==0){
		ans[0] = '12';
	}

	res[1] = ans.join(":");
	
	document.getElementById("clock").innerHTML = res[1]+" "+session;
	setTimeout(showTime,1000);
}
>>>>>>> upstream/master
showTime();