(function init(){
	var buttonSave = document.getElementById("save");
	var buttonClear = document.getElementById("clean");
	buttonSave.addEventListener("click", save);
	save();
	
})();

function save(){
	var name = document.getElementById("clave").value;
	var comment = document.getElementById("valor").value;
	localStorage.setItem(name, comment);
	var contenedor = document.getElementById("data");
	var alert = document.getElementById("alert");
	alert.classList.add("hide");
	contenedor.innerHTML = ""
	for( var i = 0; i <	localStorage.length; i++){
		var name =	localStorage.key(i);
		var comment =	localStorage.getItem(name);
		if(name == "" || comment == ""){
			name =	localStorage.key(i-1);
		}
		else{
		var pKey = document.createElement("h3");
		var textKey = document.createTextNode(name + ", says:");
		pKey.appendChild(textKey);
		var pValue = document.createElement("p");
		var textValue = document.createTextNode(comment);
		pValue.appendChild(textValue);
		contenedor.appendChild(pKey);
		contenedor.appendChild(pValue);
		document.getElementById("clave").value = "";
		document.getElementById("valor").value = "";
		}
	}
}

	var buttonHide = document.getElementById("hide");
	buttonHide.addEventListener("click", function(){
	var div = document.getElementById("data");
	var alert = document.getElementById("alert");
	div.innerHTML = "";
	alert.classList.remove("hide");	
	})

var buttonClear = document.getElementById("clean");
buttonClear.addEventListener("click", function(){
	localStorage.clear();
	save();
})