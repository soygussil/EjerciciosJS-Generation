/*

Un operador realiza alguna operación en uno o varios operandos (Valor de datos) y devuelve un valor. Por ejemplo 1+1=2.

Dentro de las operaciones más utilizadas en JavaScript se encuentran:

    Operadores aritméticos: +, -, *, /, %
    Operadores de comparación: ==, ===, !=, !==, >, <, >=, <=
    Operadores lógicos: &&, ||, !
    Operadores de asignación: =, +=, -=, *=, /=, %=

*/


//Operadores de asignación 
numero = 10;
numero1 = 20;
numero2 = 30;

adicion = numero + numero1;
sustraccion = numero - numero1;
multiplicacion = numero * numero1;
division = numero / numero1;
modulo = numero % numero1;

console.log('Operadores de asignación');
console.log("El resultado de la suma es: " + adicion);
console.log("El resultado de la resta es: " + sustraccion);
console.log("El resultado de la multiplicación es: " + multiplicacion);
console.log("El resultado de la división es: " + division);
console.log("El resultado del módulo es: " + modulo);

document.write("El resultado de la suma es: " + adicion + "<br>");
document.write("El resultado de la resta es: " + sustraccion + "<br>");
document.write("El resultado de la multiplicación es: " + multiplicacion + "<br>");
document.write("El resultado de la división es: " + division + "<br>");
document.write("El resultado del módulo es: " + modulo + "<br>");



/* 
Operaciones de cadena

Los operadores de cadena nos permiten concatenar dos o más cadenas de texto, conocer su longitud, comparar cadenas de texto, buscar una cadena de texto dentro de otra cadena de texto, etc.


*/
//ToLowerCase()

//Sintaxis de lowercase ToLowerCase()


let texto1 = 'HOLA GENERATION';
let texto2 = texto1.toLowerCase();
console.log(texto1);
console.log(texto2);
document.write(texto1 + "<br>");
document.write(texto2 + "<br>");

//ToUpperCase()

//Sintaxis de UpperCase ToUpperCase()

let texto3 = 'hola generation';
let texto4 = texto3.toUpperCase();
console.log(texto3);
console.log(texto4);
document.write(texto3 + "<br>");
document.write(texto4 + "<br>");


//trim()

// sintaxis de trim()

let texto5 = '   hola generation   ';
let texto6 = texto5.trim();
console.log(texto5);
console.log(texto6);
document.write(texto5 + "<br>");
document.write(texto6 + "<br>");

// concat

// sintaxis de concat es concat()

let saludo1 = 'Hola';
let saludo2 = 'Generation';
let union = saludo1.concat(' ', saludo2);
console.log(saludo1);
console.log(saludo2);
console.log(union);
document.write(saludo1 + "<br>");
document.write(saludo2 + "<br>");
document.write(union + "<br>");


// operadores logicos(&&,||,!)

/*

los operadores logicos nos devuelven un resultado a partior de que se cumpla (o no) una condición, su resultado es boolean y sus operadores son valores logicos o asimilables a ellos.

/*AND (&&)

*Sirve para determinar si dos expresiones son verdaderas o falsas.

- Si ambas expresiones son verdaderas, el resultado es verdadero.
- Si alguna de las expresiones es falsa, el resultado es falso.
- Si ninguna de las expresiones es verdadera, el resultado es falso.
*/

numero1 = 12;
numero2 = 24;
numero3 = 36;

afirmacion1 = numero1 > numero2; //false
afirmacion2 = numero1 < numero2; //true

console.log("El resultado de las dos afirmacines es:", afirmacion1 && afirmacion2);

afirmacion3 = numero3 > numero2; //true
afirmacion4 = numero2 > numero1; //true

console.log("El resultado de las dos afirmacines es:", afirmacion3 && afirmacion4);


/*OR (||)

// Sirve para determinar si dos expresiones son verdaderas o falsas.


-Si ambas expresiones son falsas, el resultado es falso.
-Si alguna de las expresiones es verdadera, el resultado es verdadero.

*/

num1 = 12;
num2 = 24;
afirm1 = num1 < num2;

afirm2 = num1 != num2;

console.log(afirm1);
console.log(afirm2);
console.log('El resultado de las afirmaciones es:', afirm1 || afirm2);

// NOT (!)

/*

Siempre devuelve lo contrario al resultlado de la expresion.

- Si la expresion es verdadera, el resultado es falso.
- Si la expresion es falsa, el resultado es verdadero.

*/


a = 12;
b = 24;

afir4 = a < b;
afir5 = a != b;

console.log('el resultado de la afirmación es: ', !afir4);
console.log('el resultado de la afirmación es: ', !afir5);


// operadores de comparacion (==,===,!=,!==,>=,<=,>=,<)

// operador igual (==)

// sirve para comparar si dos valores son iguales


let j = 12;
let k = 13;
let l = 13;

console.log('el resultado de la comparacion usando el operador == de j y k es: ', j == k);
console.log('el resultado de la comparacion usando el operador == de k y l es: ', k == l);
console.log('el resultado de la comparacion usando el operador == de j y l es: ', j == l);


let m = 13;
let n = 12;
let o = 12;

console.log('Operador diferente (!=)');
console.log('el resultado de la comparación es el operador de != de m y n es', m != n);
console.log('el resultado de la comparación es el operador de != de n y o es', n != o);
console.log('el resultado de la comparación es el operador de != de m y o es', m != o);


//Operador igualdad estricta ( === )

/*
Sirve para comparar si dos valores son iguales y de mismo tipo.
*/


valora = 23;
valorb = '23';
valorc = 13;
valord = 'texto 23';

console.log('el valor de a y el valor de b son iguales?', valora === valorb);


//Operador de desigualdad estricta (!==)
//Sirve para comparar si dos valores son diferentes y de mismo tipo.

let ejemplo1 = 23;
let ejemplo2 = 13;
let textoejemplo = '23';
let textoejemplo2 = 'texto2';

console.log('el numero 23 y el texto 23 son estrictamente diferentes, el resultado es: ', ejemplo1 !== textoejemplo);


// operador mayor que (>)

console.log('operador mayor que (>)');
console.log('el resultado de la comparación es el operador de mayor que de ejemplo1 y ejemplo2 es: ', ejemplo1 > ejemplo2);

// operador menor que (<)

console.log('operador menor que (<)');
console.log('el resultado de la comparación es el operador de mayor que de ejemplo1 y ejemplo2 es: ', ejemplo1 < ejemplo2);

//operador mayor o igual que (>=)

console.log('el numero 23 es mayor o igual que el numero 23', ejemplo1 >= ejemplo2);

//operador menor o igual que (<=)

console.log('el numero 13 es menor o igual que el numero 23', ejemplo2 <= ejemplo1);




//!Combinando operaciones


num1=12;
num2=24;
num3=25; 
num4=92; 
num5=91;


op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);



op1=num1 < num2;
op2=num2 < num3;
op3=(num1 != num2);
op4=num5 != num3;

console.log(op1); //t
console.log(op2); //t
console.log(op1||op2); //t
console.log(op3); //f
console.log(op4); //t
console.log(op3&&op4);//t
console.log(!(op3&&op4));//f
console.log(op);//f




//Ejercicio de operadores 2


num1=12;
num2=24;
num3=25; 
num4=92; 
num5=91;


op5=(num5 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);



console.log(op5);
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');
console.log('Operaciones de arirmeticos ( +, -, *, /, %)');

function operacionesMatematicas(){
    numero1=10;
    numero2=2;
    numero3='5';
    //suma
    console.log('el resultado de la suman de 10 + 2 es: ', numero1 + numero2);
    //resta
    console.log('el resultado de la resta de 10 - 2 es: ', numero1 - numero2);
    //multiplicacion
    console.log('el resultado de la multiplicacion de 10 * 2 es: ', numero1 * numero2);
    //division
    console.log('el resultado de la division de 10 / 2 es: ', numero1 / numero2);
    //modulo
    console.log('el resultado de la modulo de 10 % 2 es: ', numero1 % numero2);
    //exponeciacion
    console.log('el resultado de la exponenciacion de 10 ** 2 es: ', numero1 ** numero2);
    //suma de strings
    console.log('el resultado de la suma de 10 + "5" es: ', numero1 + numero3);

}


operacionesMatematicas();


// incremento y decremento
primerValor=10;
segundoValor=2;



    //incremento de un numero
    console.log('el resultado de incrementar 10 es: ', ++primerValor);
    //decremento de un numero
    console.log('el resultado de decrementar 10 es: ', --segundoValor);
