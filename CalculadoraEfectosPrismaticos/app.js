"use strict"
//Cogemos inputs.
const esfera=document.querySelector("#esfera");
const cilindro=document.querySelector("#cilindro");
const eje=document.querySelector("#eje");

const distanciaH=document.querySelector("#distH");
const distanciaV=document.querySelector("#distV");

//Boton de calcular.
const calcular=document.querySelector("#calcular");


//Cogemos inputs oi.
const esfera_OI=document.querySelector("#esfera_OI");
const cilindro_OI=document.querySelector("#cilindro_OI");
const eje_OI=document.querySelector("#eje_OI");

const distanciaH_OI=document.querySelector("#distH_OI");
const distanciaV_OI=document.querySelector("#distV_OI");

//Boton de calcular.
const calcular_OI=document.querySelector("#calcular_OI");

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

let cuadranteRosa=0;
let cuadranteNaranja=0;
let cuadranteAzul=0;
let cuadranteMorado=0;

//---------

let valorAbsolutoH_OI=0;
let valorAbsolutoV_OI=0;

let potenciaETA_OI=0;
let potenciaLambda_OI=0;

let anguloEta_OI=0;
let anguloLambda_OI=0;

let gradosTotal_OI=0;
let desplazamientoTotal_OI=0;

let anguloBetaGrados_OI=0;
let anguloBetaRadianes_OI=0;

let cosBeta_OI=0;
let senBeta_OI=0;

let distanciaETA_OI=0;
let distanciaLambda_OI=0;

let efectoPrismaticoEta_OI=0;
let efectoPrismaticoLambda_OI=0;

let efectoPrismaticoTotal_OI=0;
let anguloEfectoPrismatico_OI=0;

let cuadranteRosa_OI=0;
let cuadranteNaranja_OI=0;
let cuadranteAzul_OI=0;
let cuadranteMorado_OI=0;



calcular.addEventListener("click",()=>{

    //OJO derecho-----------------------------------------------------------------------------------------
    //DESCOMENRTAR DESPUES

    const esfera_valor=parseFloat(esfera.value);
    const cilindro_valor=parseFloat(cilindro.value);
    const eje_valor=parseFloat(eje.value);
    

    const distanciaH_valor=parseFloat(distanciaH.value);
    const distanciaV_valor=parseFloat(distanciaV.value);


    // const esfera_valor=parseFloat(-3.25);
    // const cilindro_valor=parseFloat(-2.25);
    // const eje_valor=parseFloat(175);
    

    // const distanciaH_valor=parseFloat(3);
    // const distanciaV_valor=parseFloat(-12);


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


    // potenciaETA,potenciaLambda,
    // efectoPrismaticoLambda,efectoPrismaticoEta,anguloEta,
    // anguloEfectoPrismatico

    cuadranteRosa = calcular_cuadranteRosa(
        potenciaETA,potenciaLambda,efectoPrismaticoLambda,
        efectoPrismaticoEta,anguloEta,anguloEfectoPrismatico
    );
    cuadranteNaranja = calcular_cuadranteNaranja(
        potenciaETA,potenciaLambda,efectoPrismaticoLambda,
        efectoPrismaticoEta,anguloEta,anguloEfectoPrismatico
    );
    cuadranteAzul = calcular_cuadranteAzul(
        potenciaETA,potenciaLambda,efectoPrismaticoLambda,
        efectoPrismaticoEta,anguloEta,anguloEfectoPrismatico
    );
    cuadranteMorado = calcular_cuadranteMorado(
        potenciaETA,potenciaLambda,efectoPrismaticoLambda,
        efectoPrismaticoEta,anguloEta,anguloEfectoPrismatico
    );
    
    const divisionV_H = dividiendoDistanciasVH(distanciaV_valor,distanciaH_valor);


    let selector_angulo = selectorAngulo(
        distanciaH_valor,distanciaV_valor,divisionV_H,anguloEta,
        cuadranteRosa,cuadranteNaranja,cuadranteAzul,cuadranteMorado
    );


    let selector_angulo_radianes = gradosaRadianes(selector_angulo);


    let baseH = baseHorizontal(selector_angulo_radianes,efectoPrismaticoTotal);
    let baseV = baseVertical(selector_angulo_radianes,efectoPrismaticoTotal);

    let baseNasalTemporal = baseNasalOtemporal(selector_angulo,baseH);

    let baseSuperiorOInferior = baseSuperiorInferior(selector_angulo,baseV);


    // console.log(baseNasalTemporal);
    // console.log(baseSuperiorOInferior);

    //OJO IZQUIERDO-----------------------------------------------------------------------------------------
    //DESCOMENRTAR DESPUES

    const esfera_valor_OI=parseFloat(esfera_OI.value);
    const cilindro_valor_OI=parseFloat(cilindro_OI.value);
    const eje_valor_OI=parseFloat(eje_OI.value);
    

    const distanciaH_valor_OI=parseFloat(distanciaH_OI.value);
    const distanciaV_valor_OI=parseFloat(distanciaV_OI.value);


    // const esfera_valor_OI=parseFloat(-3.5);
    // const cilindro_valor_OI=parseFloat(-2.25);
    // const eje_valor_OI=parseFloat(20);
    

    // const distanciaH_valor_OI=parseFloat(-3);
    // const distanciaV_valor_OI=parseFloat(-12);


    //Pasamos a valor absoluto distancia H y V.
    valorAbsolutoH_OI=Math.abs(distanciaH_valor_OI);
    valorAbsolutoV_OI=Math.abs(distanciaV_valor_OI);
    
    //Elgimos potencia ed ETA y Lambda y sus ángulos.
    if(eje_valor_OI<90){
        potenciaETA_OI=esfera_valor_OI;
        potenciaLambda_OI=esfera_valor_OI+cilindro_valor_OI;
        anguloEta_OI=eje_valor_OI;
        anguloLambda_OI=eje_valor_OI+90;
    }else{
        potenciaETA_OI=esfera_valor_OI+cilindro_valor_OI;
        potenciaLambda_OI=esfera_valor_OI;
        anguloEta_OI=eje_valor_OI-90;
        anguloLambda_OI=eje_valor_OI;
    }

    //Calculamos los grados totales en radianes pasandolos a grados.
    gradosTotal_OI=radianesaGrados(arcotangenteRadianes(valorAbsolutoV_OI,valorAbsolutoH_OI));

    //Calculamos la suma de cuadrados y a ese resultado hacemos la raiz cuadrada. 
    desplazamientoTotal_OI=Math.sqrt((Math.pow(valorAbsolutoH_OI,2))+(Math.pow(valorAbsolutoV_OI,2)));

    anguloBetaGrados_OI=obtenerBeta(valorAbsolutoH_OI,valorAbsolutoV_OI,distanciaH_valor_OI,distanciaV_valor_OI,anguloEta_OI,gradosTotal_OI);
    anguloBetaRadianes_OI=gradosaRadianes(anguloBetaGrados_OI);

    cosBeta_OI=Math.cos(anguloBetaRadianes_OI);
    senBeta_OI=Math.sin(anguloBetaRadianes_OI);

    distanciaETA_OI=hallardistanciaETA(distanciaH_valor_OI,distanciaV_valor_OI,anguloEta_OI,desplazamientoTotal_OI,senBeta_OI,cosBeta_OI);
    distanciaLambda_OI=hallardistanciaLambda(distanciaH_valor_OI,distanciaV_valor_OI,anguloEta_OI,desplazamientoTotal_OI,senBeta_OI,cosBeta_OI);

    efectoPrismaticoEta_OI=Math.abs((100*distanciaETA_OI*0.001*potenciaETA_OI));
    efectoPrismaticoLambda_OI=Math.abs((100*distanciaLambda_OI*0.001*potenciaLambda_OI));
    
    efectoPrismaticoTotal_OI=Math.sqrt((Math.pow(efectoPrismaticoLambda_OI,2))+(Math.pow(efectoPrismaticoEta_OI,2)));;
    
    anguloEfectoPrismatico_OI=radianesaGrados(hallarAnguloEfectoPrismatico(efectoPrismaticoLambda_OI,efectoPrismaticoEta_OI));


    // potenciaETA,potenciaLambda,
    // efectoPrismaticoLambda,efectoPrismaticoEta,anguloEta,
    // anguloEfectoPrismatico

    cuadranteRosa_OI = calcular_cuadranteRosa(
        potenciaETA_OI,potenciaLambda_OI,efectoPrismaticoLambda_OI,
        efectoPrismaticoEta_OI,anguloEta_OI,anguloEfectoPrismatico_OI
    );
    cuadranteNaranja_OI = calcular_cuadranteNaranja(
        potenciaETA_OI,potenciaLambda_OI,efectoPrismaticoLambda_OI,
        efectoPrismaticoEta_OI,anguloEta_OI,anguloEfectoPrismatico_OI
    );
    cuadranteAzul_OI = calcular_cuadranteAzul(
        potenciaETA_OI,potenciaLambda_OI,efectoPrismaticoLambda_OI,
        efectoPrismaticoEta_OI,anguloEta_OI,anguloEfectoPrismatico_OI
    );
    cuadranteMorado_OI = calcular_cuadranteMorado(
        potenciaETA_OI,potenciaLambda_OI,efectoPrismaticoLambda_OI,
        efectoPrismaticoEta_OI,anguloEta_OI,anguloEfectoPrismatico_OI
    );
    
    const divisionV_H_OI = dividiendoDistanciasVH(distanciaV_valor_OI,distanciaH_valor_OI);


    let selector_angulo_OI = selectorAngulo(
        distanciaH_valor_OI,distanciaV_valor_OI,divisionV_H_OI,anguloEta_OI,
        cuadranteRosa_OI,cuadranteNaranja_OI,cuadranteAzul_OI,cuadranteMorado_OI
    );


    let selector_angulo_radianes_OI = gradosaRadianes(selector_angulo_OI);


    let baseH_OI = baseHorizontal(selector_angulo_radianes_OI,efectoPrismaticoTotal_OI);
    let baseV_OI = baseVertical(selector_angulo_radianes_OI,efectoPrismaticoTotal_OI);

    let baseNasalTemporal_OI = baseNasalOtemporal_OI(selector_angulo_OI,baseH_OI);

    let baseSuperiorOInferior_OI = baseSuperiorInferior(selector_angulo_OI,baseV_OI);


    // console.log(baseNasalTemporal_OI);
    // console.log(baseSuperiorOInferior_OI);

    // FINAL----------------------------------------------------

    let sumaH = sumaHorizontal(baseNasalTemporal_OI,baseNasalTemporal);
    let sumaV = sumaVertical(baseSuperiorOInferior_OI,baseSuperiorOInferior);


    //DATOS A DEVOLVER 
    console.log('Datos Ojo Derecho');
    console.log('Base Horizontal ->'+baseNasalTemporal);
    console.log('Base Vertical ->'+baseSuperiorOInferior);

    console.log('Datos Ojo Iquierdo');
    console.log('Base Horizontal ->'+baseNasalTemporal_OI);
    console.log('Base Vertical ->'+baseSuperiorOInferior_OI);


    console.log('Suma efectoPrismaticosHorizontales: '+sumaH);
    console.log('Suma efectoPrismaticosVerticales: '+sumaV);
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


function calcular_cuadranteRosa(
    potenciaETA,potenciaLambda,
    efectoPrismaticoLambda,efectoPrismaticoEta,anguloEta,
    anguloEfectoPrismatico
    ){

    let resultado=0;

    if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){
       resultado = 270+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){
        resultado = anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){
        resultado = 270+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){
        resultado = 180+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){
        resultado = 90+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){
        resultado = 180+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){
        resultado = 90+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){
        resultado = anguloEta+anguloEfectoPrismatico;
    }else if(potenciaLambda==0 && potenciaETA>0){
        resultado = anguloEta+180;
    }else if(potenciaLambda==0 && potenciaETA<0){
        resultado = anguloEta;
    }else if(potenciaLambda>0 && potenciaETA==0){
        resultado = anguloEta+270;
    }else if(potenciaLambda<0 && potenciaETA==0){
        resultado = anguloEta+90;
    }

    return resultado;

}

function calcular_cuadranteNaranja(
    potenciaETA,potenciaLambda,
    efectoPrismaticoLambda,efectoPrismaticoEta,anguloEta,
    anguloEfectoPrismatico
    ){

    let resultado=0;

    if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

       resultado = 90+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = 180+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 90+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 270+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 270+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = 180+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaLambda==0 && potenciaETA>0){
        resultado = anguloEta;
    }else if(potenciaLambda==0 && potenciaETA<0){
        resultado = anguloEta+180;
    }else if(potenciaLambda>0 && potenciaETA==0){
        resultado = anguloEta+90;
    }else if(potenciaLambda<0 && potenciaETA==0){
        resultado = anguloEta+270;
    }

    return resultado;
}

function calcular_cuadranteAzul(
    potenciaETA,potenciaLambda,
    efectoPrismaticoLambda,efectoPrismaticoEta,anguloEta,
    anguloEfectoPrismatico
    ){

    let resultado=0;

    if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){
        
       resultado = 90+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 90+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = 180+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 270+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = 180+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 270+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = anguloEta-anguloEfectoPrismatico;
    }else if(potenciaLambda==0 && potenciaETA>0){
        resultado = anguloEta+180;
    }else if(potenciaLambda==0 && potenciaETA<0){
        resultado = anguloEta;
    }else if(potenciaLambda>0 && potenciaETA==0){
        resultado = anguloEta+90;
    }else if(potenciaLambda<0 && potenciaETA==0){
        resultado = anguloEta+270;
    }

    return resultado;
}

function calcular_cuadranteMorado(
    potenciaETA,potenciaLambda,
    efectoPrismaticoLambda,efectoPrismaticoEta,anguloEta,
    anguloEfectoPrismatico
    ){

    let resultado=0;

    if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){
        
       resultado = 270+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = 180+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 270+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda>0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = anguloEta-anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 90+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA>0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda>=efectoPrismaticoEta){

        resultado = 90+anguloEta+anguloEfectoPrismatico;
    }else if(potenciaETA<0 && potenciaLambda<0 && efectoPrismaticoLambda<=efectoPrismaticoEta){

        resultado = 180+anguloEta-anguloEfectoPrismatico;
    }else if(potenciaLambda==0 && potenciaETA>0){
        resultado = anguloEta;
    }else if(potenciaLambda==0 && potenciaETA<0){
        resultado = anguloEta+180;
    }else if(potenciaLambda>0 && potenciaETA==0){
        resultado = anguloEta+270;
    }else if(potenciaLambda<0 && potenciaETA==0){
        resultado = anguloEta+90;
    }

    return resultado;
}

function dividiendoDistanciasVH(distanciaV,distanciaH){
    let resultado =0;
    if(distanciaH!=0 && distanciaV !=0){
        resultado = Math.atan(distanciaV/distanciaH);
    }

    return radianesaGrados(resultado);
}

function selectorAngulo(distanciaH,distanciaV,divisionVH,anguloEta,resultadoRosa,resultadoNaranja,resultadoAzul,resultadoMorado){

    let resultado =0;
    if(distanciaH>=0 && distanciaV<=0 && -90<divisionVH && divisionVH<(-90+anguloEta)){
        resultado = resultadoRosa;
    }else if(distanciaH<=0 && distanciaV<=0 && anguloEta<divisionVH && divisionVH<90){
        resultado = resultadoRosa;
    }else if(distanciaH<=0 && distanciaV>=0 && (-90+anguloEta)>=divisionVH && divisionVH>-90){
        resultado = resultadoNaranja;
    }else if(distanciaH>=0 && distanciaV>=0 && anguloEta<=divisionVH && divisionVH<90){
        resultado = resultadoNaranja;
    }else if(distanciaH<=0 && distanciaV>=0 && 0>=divisionVH && divisionVH>(anguloEta-90)){
        resultado = resultadoAzul;
    }else if(distanciaH<=0 && distanciaV<=0 && 0<=divisionVH && divisionVH<=anguloEta){
        resultado = resultadoAzul;
    }else if(distanciaH>=0 && distanciaV>=0 && 0<=divisionVH && divisionVH<anguloEta){
        resultado = resultadoMorado;
    }else if(distanciaH>=0 && distanciaV<=0 && (-90+anguloEta)<=divisionVH && divisionVH<=0){
        resultado = resultadoMorado;
    }

    if(resultado<0){
        resultado+=360;
        // resultado = resultado+360;
    }
    //luego lo pasamos a radianes
    return resultado;
}


function baseHorizontal(resultoAradianes,efectoPrismaticoTotal){
    return Math.abs(Math.cos(resultoAradianes)*efectoPrismaticoTotal);
}

function baseVertical(resultoAradianes,efectoPrismaticoTotal){
    return Math.abs(Math.sin(resultoAradianes)*efectoPrismaticoTotal);
}

function baseNasalOtemporal(resultadoSelectorAngulo,resultadoBaseH){

    // console.log('Selector Angulo base temporal: '+resultadoSelectorAngulo);

    let resultado='';
    if(resultadoSelectorAngulo>=0 && resultadoSelectorAngulo<90){
        resultado=resultadoBaseH+'BT'; 
    }else if(resultadoSelectorAngulo>90 && resultadoSelectorAngulo<=180){
        resultado=resultadoBaseH+'BN'; 
    }else if(resultadoSelectorAngulo>180 && resultadoSelectorAngulo<270){
        resultado=resultadoBaseH+'BN'; 
    }else if(resultadoSelectorAngulo>270 && resultadoSelectorAngulo<=360){
        resultado=resultadoBaseH+'BT'; 
    }else if(resultadoBaseH==0){
        resultado=0; 
    }

    return resultado;
}

function baseNasalOtemporal_OI(resultadoSelectorAngulo,resultadoBaseH){

    // console.log('Selector Angulo base temporal: '+resultadoSelectorAngulo);

    let resultado='';
    if(resultadoSelectorAngulo>=0 && resultadoSelectorAngulo<90){
        resultado=resultadoBaseH+'BN'; 
    }else if(resultadoSelectorAngulo>90 && resultadoSelectorAngulo<=180){
        resultado=resultadoBaseH+'BT'; 
    }else if(resultadoSelectorAngulo>180 && resultadoSelectorAngulo<270){
        resultado=resultadoBaseH+'BT'; 
    }else if(resultadoSelectorAngulo>270 && resultadoSelectorAngulo<=360){
        resultado=resultadoBaseH+'BN'; 
    }else if(resultadoBaseH==0){
        resultado=0; 
    }

    return resultado;
}

function baseSuperiorInferior(resultadoSelectorAngulo,resultadoBaseV){

    let resultado='';
    if(resultadoSelectorAngulo>0 && resultadoSelectorAngulo<=90){
        resultado=resultadoBaseV+'BI'; 
    }else if(resultadoSelectorAngulo>90 && resultadoSelectorAngulo<180){
        resultado=resultadoBaseV+'BI'; 
    }else if(resultadoSelectorAngulo>180 && resultadoSelectorAngulo<270){
        resultado=resultadoBaseV+'BS'; 
    }else if(resultadoSelectorAngulo>=270 && resultadoSelectorAngulo<360){
        resultado=resultadoBaseV+'BS'; 
    }else if(resultadoBaseV==0){
        resultado=0; 
    }

    return resultado;
}

function sumaHorizontal(baseNasalTemporal_OI,baseNasalTemporal){

    let resultado =0;
    if(baseNasalTemporal_OI.split('B')[1] == baseNasalTemporal.split('B')[1]){
        resultado = (parseFloat(baseNasalTemporal_OI.split('B')[0])+parseFloat(baseNasalTemporal.split('B')[0])).toString()+'Δ';
    }else if(baseNasalTemporal_OI.split('B')[1] != baseNasalTemporal.split('B')[1]){
        resultado = (Math.abs(parseFloat(baseNasalTemporal_OI.split('B')[0])-parseFloat(baseNasalTemporal.split('B')[0]))).toString()+'Δ';
    }

    return resultado;
}

function sumaVertical(baseSuperiorOInferior_OI,baseSuperiorOInferior){
    let resultado =0;

    if(baseSuperiorOInferior_OI.split('B')[1] == baseSuperiorOInferior.split('B')[1]){
        resultado = (Math.abs(parseFloat(baseSuperiorOInferior_OI.split('B')[0])-parseFloat(baseSuperiorOInferior.split('B')[0]))).toString()+'Δ';
    }else if(baseSuperiorOInferior_OI.split('B')[1] != baseSuperiorOInferior.split('B')[1]){
        resultado = (parseFloat(baseSuperiorOInferior_OI.split('B')[0])+parseFloat(baseSuperiorOInferior.split('B')[0])).toString()+'Δ';
    }

    return resultado;
}
