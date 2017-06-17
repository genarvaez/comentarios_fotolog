(function init(){
	var buttonSave = document.getElementById("save");
	var buttonClear = document.getElementById("clean");
	buttonSave.addEventListener("click", save);
	
})();

function save(){
	var name = document.getElementById("clave").value;
	var comment = document.getElementById("valor").value;
	sessionStorage.setItem(name, comment);
	var contenedor = document.getElementById("data");

	contenedor.innerHTML = ""
	for( var i = 0; i < sessionStorage.length; i++){
		var name = sessionStorage.key(i);
		var comment = sessionStorage.getItem(name);
		if(name == "" || comment == ""){
			name = sessionStorage.key(i-1);

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
	}}
}


	var buttonClear = document.getElementById("clean");
	buttonClear.addEventListener("click", function(){
	document.getElementById("data").innerHTML = "Comentarios Ocultos, presiona GUARDAR para deshacer";
	})

