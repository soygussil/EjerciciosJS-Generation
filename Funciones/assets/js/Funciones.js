/*
Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama a la misma.
Las funciones pueden recibir parametros y retornar valores. Es importante mencionar que las funciones no se ejecutan sino que se llaman a ellas.


*/

/* 
// Esta es la estructura básica de una función que ya está siendo llamada o invocada

function nombreFuncion(parametros) {
    // Aqui van las instrucciones que se ejecutaran cuando se llame a la función
    // return valor;
}

nombreFuncion();


/*Formas de crear e invocar una funcion */
/*

function sumaDeDosValores() {
    let Valor1 = 5;
    let Valor2 = 10;
    let resultado = Valor1 + Valor2;
    return resultado;

}


// Invocar una función
document.write('La suma total es de:', sumaDeDosValores(), '<br>');
console.log('Esta es la suma total: ', sumaDeDosValores());
sumaDeDosValores();




function sumaDeTresValores() {
    let Valor1 = 3;
    let Valor2 = 20;
    let Valor3 = 25;
    let resultado = Valor1 + Valor2 + Valor3;
    return resultado;
}

document.write('\n \tLa suma total es de:', sumaDeTresValores(), '<br>');
console.log('Esta es la suma total: ', sumaDeTresValores());
sumaDeTresValores();


function sumaDeCuatroValores() {

    let Valor1 = 83;
    let Valor2 = 10;
    let Valor3 = 25;
    let Valor4 = 30;
    let resultado = Valor1 + Valor2 + Valor3 + Valor4;
    return resultado;

}

document.write('\n \tLa suma total es de:', sumaDeCuatroValores());
console.log('Esta es la suma total: ', sumaDeCuatroValores());
sumaDeCuatroValores();



const saludarFlecha = () => {
    console.log('Hola mundo');
    document.write('<br>', 'Hola mundo',);
}


saludarFlecha();


const saludarFlecha2 = (nombre) => {

    document.write('<br>', 'Hola ', nombre);
}


saludarFlecha2('Gustavo');

const saludarFlecha3 = Apellido => {
    console.log('Hola mundo', `${Apellido}`);
    document.write('<br>', 'Hola ', `${Apellido}`);
}

saludarFlecha3('Silva');





function areaTriangulo(base, altura) {
    let area = base * altura / 2;
    return area;
}
document.write('<br>', 'El area del triangulo es: ', areaTriangulo(10, 20));
console.log('El area del triangulo es: ', areaTriangulo(5, 10));


const areaTrianguloFlecha = (base, altura) => {
    let area = base * altura / 2;
    return area;
}

console.log('el area del triangulo es: ', areaTrianguloFlecha(12, 7));




/*Return
La sentencia return finaliza la ejecución de la función, y especifica un valor para ser devuelto a quien lo llama a la funcion.  

*/
/*

function areaCuadrado(lado){
    let area = lado * lado;
    return area;
}

console.log('el área del cuadrado es: ', `${areaCuadrado(14)}`);


function areaCuadrado1(){
    let lado=6;
    let area=lado*lado;
    return area;
}
let resultadoQueUsareMasTarde=areaCuadrado1();
areaCuadrado1();


console.log('El área del cuadrado siguiente es: ', `${resultadoQueUsareMasTarde}`);


function volumenCubo(){
    let volumen=resultadoQueUsareMasTarde*resultadoQueUsareMasTarde*resultadoQueUsareMasTarde;
    return volumen;
}


console.log('El volumen del cubo es: ', `${volumenCubo(resultadoQueUsareMasTarde)}`);

*/


//Escribir una funcion que calcule el área de un circulo y reutilizarla para sacar el volumen de un cilindro


function areaCirculo(){
    let radio=10;
    let area=3.1416*radio*radio;
    return area;
}
areaCirculo();
let miResultado=areaCirculo();
console.log('El área del circulo es: ', miResultado);


function volumenCilindro(){
    let longitud=8;
    let volumen=miResultado*longitud*longitud;
    return volumen;
}

var miResultadoCilindro=volumenCilindro();
volumenCilindro();
console.log('El volumen del cilindro es: ', miResultadoCilindro);



/*

// calculadora sencilla
//Convritiendo function a arrow function
function sumita (num1,num2){
    return num1+num2;
}
// paso 1 quitamos la palabra reservada function
 sumita (num1,num2)=>{
    return num1+num2;
}

//paso 2 quitamos las llaves que delimitan la funcion y en su lugar, abrimos este bloque de texto con una flecha =>

sumita (num1,num2) =>
    return num1+num2;


// paso 3, quitar el return y poner un return implicito 

var sumita=(num1,num2) => num1+num2;

*/

// otra forma de crear functiones

// 2. asignando a nuestra funcion una variable


function multiplicacion (numero1,numero2){
    return numero1*numero2;
}
// esto es una funcion anonima
let x=function(){
    let numero1=5;
    let numero2=10;
    let multiplicacion=numero1*numero2;
    console.log('la multiplicacion anonima es: ', multiplicacion);
}

x();





var y=(numero1,numero2)=>numero1+numero2;


function saludar(nombre){
    let saludo = 'Hola '+nombre;
    console.log(saludo);
}

saludar('Gustavo');
saludar('Bri');
saludar('Felipe');


// convertir mi saludo en arrow function 


let saludarFlecha =nombre => console.log('Hola',`${nombre}`);
saludarFlecha('Ali');
saludarFlecha('Ana');
saludarFlecha('Alondra');





