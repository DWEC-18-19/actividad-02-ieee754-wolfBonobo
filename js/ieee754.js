'use strict';

function ieee754aBinario(numero) {

    var decimalStr = numero;
    var signo;
    var entero;
    var decimales;
    var binario;

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
        decimales = decimalStr.substring((decimalStr.indexOf(".") + 1), (decimalStr.length));
        binario = decimalBinarioParser(entero) +  decimalFraccionarioBinarioParser(decimales);

    } else {

        binario = decimalBinarioParser(decimalStr);
    }

    //por ahora soolo devuelve parte decimal entera a binario
    //Pendiente implementar metodo decimalFraccionarioBinarioParser()
    //Pendiente implementar  metodo binarioNCientificaParser().
    //notacionCientificaIeee754aParser
    numero = binario;
    return numero;
}



//====================
//Funciones auxiliares 
//====================


//Parsea decimal a binario OK
function decimalBinarioParser(n) {
    var decimal = parseInt(n);
    var binario = "";
    var resto;

    do {
        resto = decimal % 2;
        binario = resto.toString() + binario;
        decimal = parseInt(decimal / 2);
    } while (decimal > 0)

    return binario;
}
//Parsea decimal fraccionario  a binario
function decimalFraccionarioBinarioParser(n) {

    //sin implementar
    return "."+n;

}
//Parses de binario a  Notación Científica 
function binarioNCientificaParser(){}
//Parses de  Notación Científica a IEEE-754
function notacionCientificaIeee754Parser(){}