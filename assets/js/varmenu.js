//PrintInWindow(navegador.pagina1.titulo, "alequivocadotv")
PrintInWindow(navegador.pagina2.titulo, "cursos")
PrintInWindow(navegador.pagina2.namelink1, "inicio")
PrintInWindow(navegador.pagina1.namelink1, "cursos")
PrintInWindow(navegador.pagina1.namelink2, "codigos")
PrintInWindow(navegador.pagina1.namelink3, "descargas")

atributo("inicio", navegador.pagina2.link1)
atributo("cursos", navegador.pagina1.link1)
atributo("codigos", navegador.pagina1.link2)
atributo("descargas", navegador.pagina1.link3)


/*

const valores = window.location.search;

//Mostramos los valores en consola:
console.log(valores);

//Resultado:
//producto=camiseta&color=azul&talla=s

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var producto = urlParams.get('producto');

//Verificar si existe el parámetro
console.log(urlParams.has('producto'));

//Puedes recorrer los valores, claves y pares completos.
const
  keys = urlParams.keys(),
  values = urlParams.values(),
  entries = urlParams.entries();

for (const value of values) console.log(value);
//camiseta, azul, s*/