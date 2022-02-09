
function show(){
	var allitem="";
	var item = document.forms[0].elements.length;

	for (var i=0;i<item;i++){
		allitem += document.forms[0].elements[i].value+"\n";


	}
	document.forms[1].elements[0].value = allitem;

}
