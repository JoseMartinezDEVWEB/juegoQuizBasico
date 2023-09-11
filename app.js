//arreglo que contiene las respuestas correctas

let correctas = [3,1,1   ,2,2];

//arreglo donde se guardan las respuestas del usuario

let opcion_elegida=[];
let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elelgido de esa pregunta

function respuesta(num_pregunta, seleccionada) {
    //guardando la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //para poner en color blanco
    //el fondo de los input para cuando eligen otra opcion
    //el id para seleccionar la secion correspondiente

    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //color al label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas
function corregir() {
    cantidad_correctas = 0;
    for(i = 0; i < correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}

