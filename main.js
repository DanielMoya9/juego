
let cartas_destapadas = 0;
let carta1=null;
let carta2=null;
let resultado1 = null;
let resultado2 = null;
let movimientos =0;
let aciertos = 0 ;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');

let num =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];//GENERA LOS NUMEROS AL AZAR
num=num.sort(()=> Math.random() - 0.5);
console.log(num);
//funcion principal
function destapar(id) {
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
        carta2.disabled =true //DESHABILA SEGUNDO NUMERO

        movimientos++;
        mostrarMovimientos.innerHTML =  'MOVIMIENTOS: $[movimientos]';

        if (resultado1===resultado2){
            cartas_destapadas =0;

            aciertos++;
            mostrarAciertos.innerHTML = 'ACIERTOS: $[aciertos]';
     
        }


        

    }
}