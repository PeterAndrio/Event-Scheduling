var poleTitle ;
var name ;

function storeValues() {
	if(document.getElementById('subject').value != '' && document.getElementById('name').value != '') {
		window.location.href = "createNewDates.html";
		localStorage.setItem("poleTitle", document.getElementById("subject").value);
		localStorage.setItem("name", document.getElementById("name").value);
	}
	else {
		$('#alert').show();
		document.getElementById('alert').className = "alert alert-warning";
		document.getElementById('alert').innerHTML = "<strong>Warning!</strong> One or more of the required fields are empty.";
		setTimeout(function(){ $('#alert').hide(); }, 5000);
	}
}