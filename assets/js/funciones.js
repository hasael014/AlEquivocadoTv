function PrintInWindow(text, nameid) {
	datos = text;
	document.getElementById(nameid).innerHTML = datos;
}

function atributo(nameid, valor){
    document.getElementById(nameid).href=valor
}
