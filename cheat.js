function PrintInDisplay(x){
    datos = x;
    document.getElementById('texto').innerHTML = datos;
}

//window.alert("este es un alerta");
function pls_click() {
    window.print();
}

function btn_print(){
    let numero = 5 + "4" + 3;
    document.getElementById('texto').innerHTML = numero
}

function btn_elmet() {
    let x = 6, y = 4 ;
    x>>=y;
    document.getElementById('texto').innerHTML = x
}

const persona = {
    nameF: "asael",
    nameL: "hdez",
    nameL2: "bta",
    age: "18",
    fullName: function(){
        return this.nameF + " " + this.nameL + " " + this.nameL2;
    }
};

function btn_test02(){
    document.getElementById('texto').innerHTML = persona.fullName() + " de " + persona.age;
}

function btn_test03(){
    document.getElementById('texto').innerHTML = Date();
};

function btn_test04(){
    let texto = "en este texto veremos cuantas letras son o cual es la longitud";
    let longitud = texto.length;
    PrintInDisplay("son " + longitud + " letras");
}

function btn_test05(){
    let texto = "este es mi nombre con todo y apellido ASAEL HERNANADEZ BAUTISTA";
    let parte = texto.slice(38,43);
    PrintInDisplay(parte);
}

function btn_test06(){
    let texto = "este es mi nombre con todo y apellido ASAEL HERNANADEZ BAUTISTA";
    let parte1 = texto.slice(-12, -6);
    PrintInDisplay(parte1);
}

function btn_test07(){
    let texto = "este es mi nombre con todo y apellido ASAEL HERNANADEZ BAUTISTA";
    let parte1 = texto.replace(/este/i, "ESTA");
    PrintInDisplay(parte1);
}

//la siguente funcion es lo que hace qu el texto se buelva mayusculas
function btn_test08(){
    let texto = "este es mi nombre con todo y apellido ASAEL HERNANADEZ BAUTISTA";
    let parte1 = texto.toUpperCase();//para ser precisos es esta linea de codigo
    PrintInDisplay(parte1);
}

//la siguente funcion es lo que hace qu el texto se buelva minusculas
function btn_test09(){
    let texto = "este es mi nombre con todo y apellido ASAEL HERNANADEZ BAUTISTA";
    let parte1 = texto.toLowerCase();//para ser precisos es esta linea de codigo
    PrintInDisplay(parte1);
}

function btn_test10(){
    const cars = [];
    cars[0] = "carro01";
    cars[1] = "carro02";
    PrintInDisplay(cars);
}

function btn_test11(){
    let text1 = 2, test2 = 4;
    let res = (text1 > test2) ? "verdadero": "falso";
    PrintInDisplay(res);
}

function btn_test12(){
    PrintInDisplay(" ")
}