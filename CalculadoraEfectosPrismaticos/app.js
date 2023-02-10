"use strict"
//Cogemos inputs.
const esfera=document.querySelector("#esfera");
const cilindro=document.querySelector("#cilindro");
const eje=document.querySelector("#eje");

const distanciaH=document.querySelector("#distH");
const distanciaV=document.querySelector("#distV");

//Boton de calcular.
const calcular=document.querySelector("#calcular");

//Variables.
let valorAbsolutoH=0;
let valorAbsolutoV=0;

let potenciaETA=0;
let potenciaLambda=0;

let anguloEta=0;
let anguloLambda=0;

let gradosTotal=0;
let desplazamientoTotal=0;

let anguloBetaGrados=0;
let anguloBetaRadianes=0;

let cosBeta=0;
let senBeta=0;

let distanciaETA=0;
let distanciaLambda=0;

let efectoPrismaticoEta=0;
let efectoPrismaticoLambda=0;

let efectoPrismaticoTotal=0;
let anguloEfectoPrismatico=0;

calcular.addEventListener("click",()=>{
    //DESCOMENRTAR DESPUES

    // const esfera_valor=parseFloat(esfera.value);
    // const cilindro_valor=parseFloat(cilindro.value);
    // const eje_valor=parseFloat(eje.value);ç
    

    // const distanciaH_valor=parseFloat(distanciaH.value);
    // const distanciaV_valor=parseFloat(distanciaV.value);


    const esfera_valor=parseFloat(-3.25);
    const cilindro_valor=parseFloat(-2.25);
    const eje_valor=parseFloat(175);
    

    const distanciaH_valor=parseFloat(3);
    const distanciaV_valor=parseFloat(-12);


    //Pasamos a valor absoluto distancia H y V.
    valorAbsolutoH=Math.abs(distanciaH_valor);
    valorAbsolutoV=Math.abs(distanciaV_valor);
    
    //Elgimos potencia ed ETA y Lambda y sus ángulos.
    if(eje_valor<90){
        potenciaETA=esfera_valor;
        potenciaLambda=esfera_valor+cilindro_valor;
        anguloEta=eje_valor;
        anguloLambda=eje_valor+90;
    }else{
        potenciaETA=esfera_valor+cilindro_valor;
        potenciaLambda=esfera_valor;
        anguloEta=eje_valor-90;
        anguloLambda=eje_valor;
    }

    //Calculamos los grados totales en radianes pasandolos a grados.
    gradosTotal=radianesaGrados(arcotangenteRadianes(valorAbsolutoV,valorAbsolutoH));

    //Calculamos la suma de cuadrados y a ese resultado hacemos la raiz cuadrada. 
    desplazamientoTotal=Math.sqrt((Math.pow(valorAbsolutoH,2))+(Math.pow(valorAbsolutoV,2)));

    anguloBetaGrados=obtenerBeta(valorAbsolutoH,valorAbsolutoV,distanciaH_valor,distanciaV_valor,anguloEta,gradosTotal);
    anguloBetaRadianes=gradosaRadianes(anguloBetaGrados);

    cosBeta=Math.cos(anguloBetaRadianes);
    senBeta=Math.sin(anguloBetaRadianes);

    distanciaETA=hallardistanciaETA(distanciaH_valor,distanciaV_valor,anguloEta,desplazamientoTotal,senBeta,cosBeta);
    distanciaLambda=hallardistanciaLambda(distanciaH_valor,distanciaV_valor,anguloEta,desplazamientoTotal,senBeta,cosBeta);

    efectoPrismaticoEta=Math.abs((100*distanciaETA*0.001*potenciaETA));
    efectoPrismaticoLambda=Math.abs((100*distanciaLambda*0.001*potenciaLambda));
    
    efectoPrismaticoTotal=Math.sqrt((Math.pow(efectoPrismaticoLambda,2))+(Math.pow(efectoPrismaticoEta,2)));;
    
    anguloEfectoPrismatico=radianesaGrados(hallarAnguloEfectoPrismatico(efectoPrismaticoLambda,efectoPrismaticoEta));

    console.log(anguloEfectoPrismatico);
});


function arcotangenteRadianes(valV,valH){
    let resultado=0;

    if(valV>valH){
        resultado= valH/valV;
    }else{
        resultado= valV/valH;
    }

    return Math.atan(resultado);
}

function radianesaGrados(radianes){
    let pi = Math.PI;
    return radianes * (180/pi);
}

function gradosaRadianes(grados){
    let pi = Math.PI;
    return (grados*pi)/180;
}

function hallarAnguloEfectoPrismatico(efPrisLambda,efPrisEta){
    let resultado=0;

    if(efPrisLambda>efPrisEta){

        resultado=efPrisEta/efPrisLambda;

    }else{

        resultado=efPrisLambda/efPrisEta;

    }

    return Math.atan(resultado);
}

function hallardistanciaETA(dH,dV,aEta,despTotal,sBeta,cBeta){
    let resultado=0;

    if(dH==0 && aEta==0){

        resultado=0;

    }else if(dV==0 && aEta==0){

        resultado=despTotal;

    }else if(dV<=0 && dH>=0){

        resultado=despTotal*sBeta;

    }else if(dV>=0 && dH>=0){

        resultado=despTotal*cBeta;

    }else if(dV>=0 && dH<=0){

        resultado=despTotal*sBeta;

    }else if(dV<=0 && dH<=0){

        resultado=despTotal*cBeta;

    }

    return resultado;
}

function hallardistanciaLambda(dH,dV,aEta,despTotal,sBeta,cBeta){
    let resultado=0;

    if(dH==0 && aEta==0){

        resultado=despTotal;

    }else if(dV==0 && aEta==0){

        resultado=0;

    }else if(dV<=0 && dH>=0){

        resultado=despTotal*cBeta;

    }else if(dV>=0 && dH>=0){

        resultado=despTotal*sBeta;

    }else if(dV>=0 && dH<=0){

        resultado=despTotal*cBeta;

    }else if(dV<=0 && dH<=0){

        resultado=despTotal*sBeta;

    }

    return resultado;
}

function obtenerBeta(vAbsH,vAbsV,vH,vV,angEta,gradosTotales){
    let resultado=0;

    if(vAbsH>=vAbsV && angEta>=gradosTotales && vH>=0 && vV>=0){

        resultado=angEta-gradosTotales;

    }else if(vAbsH>=vAbsV && angEta<=gradosTotales && vH>=0 && vV>=0){

        resultado=gradosTotales-angEta;

    }else if(vAbsV>=vAbsH && angEta<=(90-gradosTotales) && vH>=0 && vV>=0){

        resultado=90-angEta-gradosTotales;

    }else if(vAbsV>=vAbsH && angEta>=(90-gradosTotales) && vH>=0 && vV>=0){

        resultado=angEta-(90-gradosTotales);

    }else if(vAbsH>=vAbsV && angEta>=gradosTotales && vH<=0 && vV<=0){

        resultado=angEta-gradosTotales;

    }else if(vAbsH>=vAbsV && angEta<=gradosTotales && vH<=0 && vV<=0){

        resultado=gradosTotales-angEta;

    }else if(vAbsV>=vAbsH && angEta<=(90-gradosTotales) && vH<=0 && vV<=0){

        resultado=90-angEta-gradosTotales;

    }else if(vAbsV>=vAbsH && angEta>=(90-gradosTotales) && vH<=0 && vV<=0){

        resultado=angEta-(90-gradosTotales);

    }else if(vAbsH>=vAbsV && (90-angEta)>=gradosTotales && vH>=0 && vV<=0){

        resultado=90-angEta-gradosTotales;

    }else if(vAbsH>=vAbsV && (90-angEta)<=gradosTotales && vH>=0 && vV<=0){

        resultado=gradosTotales-(90-angEta);

    }else if(vAbsV>=vAbsH && (90-angEta)<=(90-gradosTotales) && vH>=0 && vV<=0){

        resultado=90-(90-angEta)-gradosTotales;

    }else if(vAbsV>=vAbsH && (90-angEta)>=(90-gradosTotales) && vH>=0 && vV<=0){

        resultado=(90-angEta)-(90-gradosTotales);

    }else if(vAbsH>=vAbsV && (90-angEta)>=gradosTotales && vH<=0 && vV>=0){

        resultado=(90-angEta)-gradosTotales;

    }else if(vAbsH>=vAbsV && (90-angEta)<=gradosTotales && vH<=0 && vV>=0){

        resultado=gradosTotales-(90-angEta);

    }else if(vAbsV>=vAbsH && (90-angEta)<=(90-gradosTotales) && vH<=0 && vV>=0){

        resultado=90-(90-angEta)-gradosTotales;

    }else if(vAbsV>=vAbsH && (90-angEta)>=(90-gradosTotales) && vH<=0 && vV>=0){

        resultado=(90-angEta)-(90-gradosTotales);

    }

    return resultado;
}
