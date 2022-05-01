const a = 5;
const b = 3;
const c = 12;


function primero() {
    var op = a > 3;

    document.getElementById('1').innerHTML = 'El resultado es ' + `<span>${op}</span>`;

};

primero();

function segundo() {
    var op = a > 3;
    document.getElementById('2').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}
segundo();

function tercero() {

    var op = a < c;
    document.getElementById('3').innerHTML = 'El resultado es ' + `<span>${op}</span>`;


}

tercero();

function cuarto(){
    var op = b<c;
    document.getElementById('4').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

cuarto();

function quinto(){
 var op = b!=c;
    document.getElementById('5').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

quinto();

function sexto(){
    var op=a==3;
    document.getElementById('6').innerHTML = 'El resultado es ' + `<span>${op}</span>`;

}

sexto();

function septimo(){
    var op=a*b==15;
    document.getElementById('7').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}
septimo();


function octavo(){
    var op=a*b==30;
    document.getElementById('8').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}
octavo();


function noveno(){
    var op=c/b<a;
    document.getElementById('9').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

noveno();


function decimo(){
    var op=c/b==-10;
    document.getElementById('10').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

decimo();


function onceavo(){
    var op=c/b==-4;
    document.getElementById('11').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

onceavo();

function doceavo(){
    var op=a+b+c==5;
    document.getElementById('12').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

doceavo();

function treceavo(){
    var op=(a+b==8)&&(a-b==2);
    document.getElementById('13').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

treceavo();

function catorceavo(){
    var op=(a+b==8)||(a-b==6);
    document.getElementById('14').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

catorceavo();

function quinceavo(){
    var op=a>3&&b>=3&&c<3;
    document.getElementById('15').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

quinceavo();

function dieciseisavo(){
    var op=a>3&&b>3&&c<-3;
    document.getElementById('16').innerHTML = 'El resultado es ' + `<span>${op}</span>`;
}

dieciseisavo();
