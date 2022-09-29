let opA;
let opB;
let opC;



function init(){
    //Obtener variable
    let result = document.getElementById("result");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multi = document.getElementById("multi");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");

    //Presion de botones
    uno.onclick = function(){
        result.textContent = result.textContent + "1";
    }
    dos.onclick = function(){
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(){
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(){
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(){
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(){
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(){
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(){
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(){
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function(){
        result.textContent = result.textContent + "0";
    }
    division.onclick = function(){
        opA = result.textContent;
        opC = "/";
        limpiar();
    }
    multi.onclick = function(){
        opA = result.textContent;
        opC = "*";
        limpiar();
    }
    resta.onclick = function(){
        opA = result.textContent;
        opC = "-";
        limpiar();
    }
    suma.onclick = function(){
        opA = result.textContent;
        opC = "+";
        limpiar();
    }
    igual.onclick = function(){
        opB = result.textContent;
        resolver();
    }
    reset.onclick = function(){
        resetear();
    }
}

function limpiar(){
    result.textContent = " ";
}
function resetear(){
    result.textContent = " ";
    opA = 0;
    opB = 0;
    opC = " ";
}
function resolver() {
    let res = 0;
    switch(opC){
        case "+":
            res =  opA + opB;
            break;
        case "-":
            res =  opA - opB;
            break;
        case "*":
            res =  opA * opB;
            break;
        case "/":
            res = opA / opB;
            break;
    }
    resetear();
    result.textContent = res;
}


