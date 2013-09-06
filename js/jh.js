function showHide(id) {
    $(id).toggle();
}

function hideShow(ids) {
    for (var i = 0; i < arguments.length; i++) {
	$(arguments[i]).toggle();    
    }
    var id = document.getElementById('workingPaper');
    if (id.innerHTML == "hide abstracts"){
	id.innerHTML = "show abstracts"
    }
    else {
	id.innerHTML = "hide abstracts"
    }
}

function displayPDF(namesArr){
    var text = "";
    var path = window.location.pathname;
    var dir = /.+(?=\/([^\/])+$)/.exec(path)[0];
    for (var i = 0; i < namesArr.length; i++) {
	text += namesArr[i] + "\n";
	text += "<br>"
    }
    document.write(text);
}