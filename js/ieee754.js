'use strict';

function ieee754aBinario(numero) {

    let decimalStr = numero;
    let signo;
    let entero;
    let decimales;
    let binario;

    //Verifico si se han introducion comillas dobles y las elimino
    while (decimalStr.indexOf("\"") != -1)
        decimalStr = decimalStr.toString().replace("\"", "");


    //Averiguo signo si número introducido es positivo o nevativo y quito signo
    // 0 = + ||  1 = -
    if (parseFloat(decimalStr) > 0) {
        signo = 0;
    } else {
        signo = 1;
        decimalStr = decimalStr.substring(1, decimalStr.length);
    }

    //verifico si de entrada el número tiene decimales o no
    if (decimalStr.indexOf(".") != -1) {
        //Saco parte entera de decimalStr   
        entero = decimalStr.substring(0, decimalStr.indexOf("."));
        //Saco decimales de decimalStr   
        decimales = decimalStr.substring((decimalStr.indexOf(".")), (decimalStr.length));

        //Utilizo métodos auxiliares para sacar número binario entero y número binario decimal fraccionario.
        binario = decimalBinarioParser(entero) + decimalFraccionarioBinarioParser("0" + decimales);
    } else {
        binario = decimalBinarioParser(decimalStr);
    }
    //utilizo método parsea de binarioa  notación científica a ieee754
    numero = binarioIeee754aParser(signo, binario);

    return numero;
}



//================================
//      FUNCIONES AUXILIARES
//================================


//Parsea decimal a binario 
//---------------------------
function decimalBinarioParser(n) {
    let decimal = parseInt(n);
    let binario = "";
    let resto;

    do {
        resto = decimal % 2;
        binario = resto.toString() + binario;
        decimal = parseInt(decimal / 2);
    } while (decimal > 0);

    //console.log(binario);

    return binario;
}


//Parsea decimal fraccionario  a binario 
//--------------------------------------
function decimalFraccionarioBinarioParser(n) {

    let decinalFraccionarioBinario = "";
    let decimalFraccionario = n;

    //Calculo de la precisión del decimál fraccionario será 21
    for (let i = 0; i < 21; i++) {

        decimalFraccionario = decimalFraccionario * 2;

        if (decimalFraccionario >= 1) {
            decinalFraccionarioBinario += "1";
            decimalFraccionario = decimalFraccionario - 1;
        } else {
            decinalFraccionarioBinario += "0";
        }

    }

    return "." + decinalFraccionarioBinario;

}


//Parses de binario a  Notación Científica a  ieee75432bits
function binarioIeee754aParser(sig, bi) {

    let ieee75432bits;
    //Averiguo potencia de 2 para calculo exponenente
    let potencia2 = (bi.toString().indexOf(".") - 1);
    let nCientifica = bi.replace(".", "");
    let mantisa = nCientifica.substring(1, nCientifica.length);

    //Consiguo notación científica
    nCientifica = nCientifica.substring(0, 1) + "." + nCientifica.substring(2, nCientifica.length);
    let signo = sig;

    //saco exponente
    let exponente = decimalBinarioParser((potencia2 + 127));

    //Añado 0 a mantisa
    while (mantisa.length < 23) {

        mantisa += "0";
    }

    //muestro por pantalla resultados.
    alert("Signo = " + signo);
    alert("Exponente = " + exponente);
    alert("Mantisa = " + mantisa);

    ieee75432bits = signo.toString() + " " + exponente.toString() + " " + mantisa;

    return ieee75432bits;

}