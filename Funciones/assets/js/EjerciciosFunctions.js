// en funciones normales
function opArit(num1,num2,num3){
    let resultado =(num1+num2)/num1*num3;
    return resultado;
}
console.log(opArit(2,3,5));


function chicharronera(a,b,c){
    var x = (-1*b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    var y = (-1*b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    console.log('el primer resultado es: ' + x, ' el segundo resultado es: ' + y);
    return x,y;
}
chicharronera(3,4,-7);


// en arrow function

let opeArit=(num1,num2,num3)=>{ let num0 =(num1+num2)/num1*num3; 
console.log(num0);
};

opeArit(2,3,5);


let laChicharronera=(a,b,c)=>{
    var x = (-1*b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    var y = (-1*b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    console.log('el primer resultado es: ' + x, ' el segundo resultado es: ' + y);
};

laChicharronera(3,4,-7);