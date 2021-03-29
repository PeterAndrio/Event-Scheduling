var counterDates ;
var counterTimes ;
var counterButtons ;
var counterDateButtons ;
var counterNewTimeButtons ;

window.onload = function() {
	counterDates = 0 ;
	counterTimes = 0 ;
	counterButtons = 0 ;
	counterDateButtons = 0 ;
	counterNewTimeButtons = 0 ;
	localStorage.setItem("counterDates",0);
	localStorage.setItem("counterTimes",0);
	localStorage.setItem("counterButtons",0);
	localStorage.setItem("counterDateButtons",0);
	localStorage.setItem("counterNewTimeButtons",0);
	var q = document.getElementById("name");
};

function getValues() {
	var dates = [] ;
	var exists = true;
	var divs = document.getElementsByTagName('div') ;
	for(var i = 0; i < divs.length; i++) {
		if(divs[i].id != '') {
			var q = document.getElementById(divs[i].id).getElementsByTagName('input') ;
			var val = [] ;
			for(var j = 0; j < q.length; j++) {
				if ((q[j].getAttribute('type') == 'date')&&(q[j].value != "")) {
					val.push(q[j].value);
					exists = false;
				}
				else if ((q[j].getAttribute('type') == 'date')&&(q[j].value == "")) {
				}
				else if((val.length != 0)&&(q[j].value != '')) {
					val.push(q[j].value);
				}
			}
			if(val.length != 0) {
				dates.push(val);
			}
		}
	}
	localStorage.setItem("dates",JSON.stringify(dates));
	if(exists == false) {
		window.location.href = "success.html";
	}
	else {
		alert("You have to select at least one date");
	}
}

function addNewTime(ele) {
	var id = ele.id ;
	var u = id.split("_");
	var tmpDiv = "<input type='text' placeholder='Add new time' id='time_" + localStorage.getItem("counterTimes") + "' /><button class='btn btn-sm btn-danger responsive-width' style='font-size:1vw' id='btn_" + localStorage.getItem("counterButtons") + "' onclick='deleteElement(this)'' type='button'>Delete Time</button>";
	document.getElementById("dates_" + u[1]).insertAdjacentHTML('beforeEnd',tmpDiv);
	counterTimes += 1;
	counterButtons += 1;
	localStorage.setItem("counterTimes", counterTimes);
	localStorage.setItem("counterButtons", counterButtons);
}

function deleteElement(ele) {
	var id = ele.id ;
	var u = id.split("_");
	document.getElementById("time_" + u[1]).remove();
	document.getElementById("btn_" + u[1]).remove();
}

function deleteDate(ele) {
	var id = ele.id ;
	var u = id.split("_");
	counterDates = counterDates - 1;
	counterDateButtons = counterDateButtons - 1;
	counterNewTimeButtons = counterNewTimeButtons - 1;
	localStorage.setItem("counterDates",counterDates);
	localStorage.setItem("counterDateButtons",counterDateButtons);
	document.getElementById("dates_" + u[1]).remove();
}

function addNewDate() {
	
	var q = document.getElementById("form");
	counterDates += 1;
	counterDateButtons += 1;
	counterNewTimeButtons += 1;
	localStorage.setItem("counterDates", counterDates);
	localStorage.setItem("counterDateButtons", counterDateButtons);
	localStorage.setItem("counterNewTimeButtons", counterNewTimeButtons);
	var container = document.createElement("div");
	container.innerHTML = "<div id = 'dates_" + localStorage.getItem("counterDates") + "'><input type='date' class='form-control input-sm' /><button class='btn btn-sm btn-danger responsive-width' style='font-size:1vw' id='datbtn_" + localStorage.getItem("counterDateButtons") + "' onclick='deleteDate(this)' type='button'>Delete Date</button><button type='button' id='addTime_" + localStorage.getItem("counterDates") + "' onclick='addNewTime(this)' class='btn btn-success btn-sm responsive-width' style='font-size:1vw'>Add new time</button></div>";
	document.getElementById("form").appendChild(container); 
}