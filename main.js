//variables de iniciacion
let cartas_destapadas = 0;
let carta1=null;
let carta2=null;
let resultado1 = null;
let resultado2 = null;
let movimientos = 0;
let aciertos = 0 ;
let temporizador =false;
let timer =40;
let timerInicial = 40;
let tiempoRegresivo =null;


let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo_restante');

let num =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];//GENERA LOS NUMEROS AL AZAR
num=num.sort(()=> Math.random() - 0.5);
console.log(num);


function contarTiempo(){//funcion de reloj conteo regresivo
    tiempoRegresivo = setInterval(()=>{
        timer--;   //CONTEO REGRESIVO 
        mostrarTiempo.innerHTML = "TIEMPO: " +  timer +" SEGUNDOS";
        if (timer ==0){
            clearInterval(tiempoRegresivo);// detiene el setinterval en cero
            bloquearCartas();
        }
    },1000);//MILISEGUNDOS

function bloquearCartas(){//CUANDO ESTEN TODAS LAS PAREJAS SE BLOQUEA 
    for(let i =0; i<=15; i++){
        let cartaBloqueada = document.getElementById(i);
        cartaBloqueada.innerHTML = num[i];
        cartaBloqueada.disabled = true;
    } 
}
}
//funcion principal
function destapar(id) {

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    cartas_destapadas++;
    console.log(cartas_destapadas);

    if (cartas_destapadas == 1) {        //MOSTRAR PRIMER NUMERO
        
        carta1 = document.getElementById(id);
        resultado1 = num[id];
        carta1.innerHTML = resultado1;
        carta1.disabled = true;//DESHABILITAR PRIMER BOTON OPRIMIDO

    }else if(cartas_destapadas ==2 ){     //MOSTRAR SEGUNDO NUMERO
        carta2 =document.getElementById(id);
        resultado2 = num [id];
        carta2.innerHTML =resultado2
        carta2.disabled =true //DESHABILITA SEGUNDO NUMERO

        movimientos++;
        mostrarMovimientos.innerHTML =  "MOVIMIENTOS:"+ movimientos ;//mostrar cantidad de movimientos

        if (resultado1===resultado2){
            cartas_destapadas =0;

            aciertos++;
            mostrarAciertos.innerHTML = "ACIERTOS:" + aciertos; //Mostrar cantidad de aciertos

            if (aciertos === 8){  
                clearInterval(tiempoRegresivo)   // mostrar al finalizar el juego
                mostrarAciertos.innerHTML = "ACIERTOS: " + aciertos + " muy bien "; 
                mostrarTiempo.innerHTML = "TE DEMORASTE SOLO: " + [timerInicial-timer] + " segundos";
                mostrarMovimientos.innerHTML =  "MOVIMIENTOS: "+ movimientos + ' :V' ;
            }
        }else{
            setTimeout(()=>{ //temporizador para que se muestre el numero de la carta y se vuelva a tapar
                carta1.innerHTML =' ';
                carta2.innerHTML =' ';
                carta1.disabled = false;
                carta2.disabled = false;
                cartas_destapadas = 0;

            },800);
        } 

    }
}