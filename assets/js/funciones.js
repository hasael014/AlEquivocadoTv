function PrintInWindow(text, nameid) {
	datos = text;
	document.getElementById(nameid).innerHTML = datos;
}

function atributo(nameid, valor){
    document.getElementById(nameid).href=valor
}
/*
const valores = window.location.search;
console.log(valores);

const parametrosUrl = new URLSearchParams(valores)
let producto = parametrosUrl.get('pagina')

console.log(parametrosUrl.has('pagina'))

const keys = parametrosUrl.keys(),values = parametrosUrl.values(), entries = parametrosUrl.entries()

let value

for (value of values) console.log(value)

if (parametrosUrl.has('pagina') == false){
    alert("porfavor ingrese al desde el siguiente link ?pagina=01&name=alequivocadotv")
}

const nombre = value*/

var QueryString = function () {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }();
  
  console.log(QueryString.pagina);
  
