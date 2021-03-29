var bool = false;
var rowCounter = 0; 
var buttonCounter = 0; 
var columnCounter = 0; 
var nameCounter = 0;

function getValues() {
	if (document.getElementById("iname_"+nameCounter).value == '') {
		alert("You have to enter your name");
	}
	else {
		document.getElementById("column_"+columnCounter).insertAdjacentHTML('beforeEnd',"<button type='button' id='buttonCounter_"+buttonCounter+"' class='btn btn-primary' onclick='deleteRegistry(this)'>Delete</button>");
		document.getElementById("iname_"+nameCounter).setAttribute('readonly','true');
		nameCounter += 1;
		columnCounter += 1;
		rowCounter += 1;
		buttonCounter +=1;
		document.getElementById("table").insertAdjacentHTML('beforeEnd',"<tr id='rowCounter_"+rowCounter+"'> <td id='column_"+columnCounter+"'> <input type='text' id='iname_"+nameCounter+"' placeholder='Enter Your Name' class='form-control input-sm'></td></tr>");
		var list = JSON.parse(localStorage.getItem("dates"));

		var nodeList = document.getElementsByTagName("input");
		for(item in nodeList) {
			if(nodeList[item].type == "checkbox") {
				nodeList[item].disabled = true;
			}
		};
		for(var q = 0; q < list.length; q++) {
			if((list[q].length == 1)||(list[q].length == 2)) {
				document.getElementById("rowCounter_"+rowCounter).insertAdjacentHTML('beforeEnd',"<td><div><input type='checkbox' data-toggle='toggle'></div></td>");
			}
			else {
				for(var d = 0; d < (list[q].length - 1); d++) {
					document.getElementById("rowCounter_"+rowCounter).insertAdjacentHTML('beforeEnd',"<td><div><input type='checkbox' data-toggle='toggle'></div></td>");
				}
			}
		}
	}
}

function deleteRegistry(ele) {
	var id = ele.id ;
	var u = id.split("_");
	/*counterDates = counterDates - 1;
	counterDateButtons = counterDateButtons - 1;
	counterNewTimeButtons = counterNewTimeButtons - 1;
	localStorage.setItem("counterDates",counterDates);
	localStorage.setItem("counterDateButtons",counterDateButtons);*/
	document.getElementById("rowCounter_" + u[1]).remove();
}

function codeAddress() {
	var q = document.getElementById("name");
	q.innerHTML = localStorage.getItem("name");
	var header = document.getElementById("header");
	header.innerHTML = localStorage.getItem("poleTitle");
	var days = document.getElementById("days");
	var list = JSON.parse(localStorage.getItem("dates"));
	for(var i = 0; i < list.length; i++) {
		if((list[i].length - 1) == 0) {
			days.insertAdjacentHTML('beforeEnd',"<td colspan=1> "+list[i][0]+" </td>");
		}
		else {
			days.insertAdjacentHTML('beforeEnd',"<td colspan="+(list[i].length - 1)+"> "+list[i][0]+"</td>");
			bool = true;
		}
	}
	if(bool == true) {
		var table = document.getElementById("table");
		table.insertAdjacentHTML('beforeEnd',"<tr id=hours> <th>Hours</th></tr>");
		var hours = document.getElementById("hours");
		for(var k = 0; k < list.length; k++) {
			if(list[k].length == 1) {
				hours.insertAdjacentHTML('beforeEnd',"<th><div></div></th>");
			}
			else {
				for(var l = 1; l < list[k].length; l++) {
					hours.insertAdjacentHTML('beforeEnd',"<th><div>"+ list[k][l] +"</div></th>");
				}
			}
		}	
	}
	document.getElementById("table").insertAdjacentHTML('beforeEnd',"<tr id='rowCounter_0'> <td id='column_0'> <input type='text' id='iname_"+nameCounter+"' placeholder='Enter Your Name' class='form-control input-sm'></td></tr>");
	for(var q = 0; q < list.length; q++) {
		if((list[q].length == 1)||(list[q].length == 2)) {
			document.getElementById("rowCounter_0").insertAdjacentHTML('beforeEnd',"<td><div><input type='checkbox' data-toggle='toggle'></div></td>");
		}
		else {
			for(var d = 0; d < (list[q].length - 1); d++) {
				document.getElementById("rowCounter_0").insertAdjacentHTML('beforeEnd',"<td><div><input type='checkbox' data-toggle='toggle'></div></td>");
			}
		}
	}
}
window.onload = codeAddress;