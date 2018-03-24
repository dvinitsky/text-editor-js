function formatText(){
	var text = document.getElementById("input").value;
	text = text.replace(/\n/gi, "<br />");

	text = text.replace(/\[b\]/gi, "<b>");
	text = text.replace(/\[\/b\]/gi, "</b>");

	text = text.replace(/\[i\]/gi, "<i>");
	text = text.replace(/\[\/i\]/gi, "</i>");

	text = text.replace(/\[u\]/gi, "<u>");
	text = text.replace(/\[\/u\]/gi, "</u>");

	text = text.replace(/\[s\]/gi, "<s>");
	text = text.replace(/\[\/s\]/gi, "</s>");



	document.getElementById("output").innerHTML = text;	
}

function addTagsBold(){
	addTags("[b]", "[/b]");
}
function addTagsItalics(){
	addTags("[i]", "[/i]");
}
function addTagsUnderline(){
	addTags("[u]", "[/u]");
}
function addTagsStrike(){
	addTags("[s]", "[/s]");
}

function addTags(openTags,closeTags){
	//get asbsolute positions of start and end of selection
	var startPosition = document.getElementById("input").selectionStart;
	var endPosition = document.getElementById("input").selectionEnd;
	var wholeInput = document.getElementById("input").value;

	
	//add tags here
	var frontPiece = wholeInput.substring(0, startPosition);
	var middlePiece = wholeInput.substring(startPosition, endPosition);
	var backPiece = wholeInput.substring(endPosition);

	var newInput = frontPiece + openTags + middlePiece + closeTags + backPiece;
	document.getElementById("input").value = newInput;

	formatText();
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}