/*Control de flujo

Cuando hablamos de control de flujo hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el control de flujo se vea modificado por una instruccion de control (por ejemplo una condicional), el control de flujo se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha) 
*/

//Condicionales 

/*
los condicionales nos permiten controlar el flujo de ejecucion de un programa, es decir, determinar si una instruccion se ejecuta o no.
*/

//if(si) 
/*
if(si Gustavo tiene su camisa limpia){
    //Gustavo va a la fiesta
}

*/
/*
const edadGustavo=17;

if(edadGustavo>=18){
    console.log("Gustavo puede entrar a la fiesta");
}else{
    console.log("Gustavo no puede entrar a la fiesta");
}


*/
//Prompt 

/*
var hora=prompt("Ingrese la hora actual - solo la hora por favor");

if(hora<18){
    console.log('Buenos días, hace mucho calor, toma agua.');
}else{
    console.log('Buenas tardes, hace mucho frio, abrigate');
}
*/

/*
!Valores que se evaluan como falsos
Los valores que se evaluan como falsos son:

?-false
?-0
?-""
?-null
?-undefined
?-NaN

/ if nos da solo un resultado 
/ else nos da dos resultados
/ else if nos da los resultados que nosotros queramos




*/

/*

var hora = prompt("Ingrese la hora actual en 24 hrs - solo la hora por favor");


if(hora<13){ //Si la hora es menor a 13
    console.log('Buenos días, desayuna rico.');
}else if(hora<=19){ //De otro modo si la hora es menor o igual a 19
    console.log('Buenas tardes, come rico');
}else{
    console.log('Buenas noches, cena rico');
}

*/

/*
var hora = prompt("Ingrese la hora actual en 24 hrs - solo la hora por favor");


if(hora>=0 && hora<=12){ //Si la hora es menor a 13
    if(hora>=7&&hora<=11){
        console.log('Buenos días, desayuna rico.');
    } else if (hora>=12&&hora<=18){
        console.log('Buenas tardes');
    } else if (hora>=19&&hora<=23){
        console.log('Buenas noches');
    }else{
        console.log('buenas madrugadas');
    }
}else{
    console.log('Dato no váldo');
}

 */
/*

nombreIngresado=(prompt("Ingrese su nombre"));
nombreIngresado

if(nombreIngresado==='GUSTAVO'){
    console.log('Bienvenido, '`${nombreIngresado}`);
}else if(nombreIngresado==='ALIZARINE'){
    console.log('Bienvenido, '`${nombreIngresado}`);
}else {
    console.log('Hola desconocido');
}*/


var calificaciones=43;

if (calificaciones<30) {
    console.log('Felipe tuvo pocos reprobados');
} else {
    console.log('Felipe tuvo muchos reprobados');
}


console.log(calificaciones);