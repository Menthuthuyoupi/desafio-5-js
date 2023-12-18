let tareas = [
    { id: 1, descripcion: "Llamar a papá", completado: false},
    { id: 2, descripcion: "Comprar los regalos", completado: false},
    { id: 3, descripcion: "Preparar la diapositiva", completado: false},
    { id: 4, descripcion: "Hacer el informe", completado: false}
];

const inputNuevaTarea = document.querySelector('#nuevaTarea');
const btnAgregarTarea = document.querySelector('#agregarTarea');
const tablaTarea = document.querySelector('#elementos');
const total = document.querySelector('#total');
const realizadas = document.querySelector('#realizadas');
const norealizadas = document.querySelector('#norealizadas');

//lo de arriba se definen los queryselector

let inicial = "";
for(tarea of tareas){
    inicial += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td class="centrarbtn"><button onclick="completar(${tarea.id})">completado</button></td>
                    <td class="centrarbtn"><button onclick="eliminar(${tarea.id})"><i class="fa-solid fa-xmark icono"></i></button></td>
                </tr>`
}

tablaTarea.innerHTML = inicial;
total.innerHTML = tareas.length;
contarTareasRealizadas();

//lo de arriba son las tareas iniciales


function Actualizar(){
    let html = "";
    for(tarea of tareas){
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.descripcion}</td>
                    <td class="centrarbtn"><button onclick="completar(${tarea.id})">completado</button></td>
                    <td class="centrarbtn"><button onclick="eliminar(${tarea.id})"><i class="fa-solid fa-xmark icono"></i></button></td>
                </tr>`
    }
    
    tablaTarea.innerHTML = html;

    total.innerHTML = tareas.length;

}

//funcion actualizar es la renderizacion de la pagina web cuando se agrega o elimina

function contarTareasRealizadas(){
    let i = 0;
    let j = 0;
    for(var k = 0; k < tareas.length;k++){
        console.log(k)
        console.log(tareas[k])
        if(tareas[k].completado === true){
            i++
        } else{
            j++
        }
    }
    realizadas.innerHTML = i;
    norealizadas.innerHTML = j;
}

//funcion contarTareasRealizadas, cuenta las tareas realizadas

function completar(ide){
    const tareaCompletada = tareas.find(tarea => tarea.id === ide)
    tareaCompletada.completado = true;
    contarTareasRealizadas()
}

//funcion completar, al hacer click en el boton este cambia su valor a true

function eliminar(id){
    const index = tareas.findIndex((elemento) => elemento == id);
    tareas.splice(index,1);
    Actualizar();
    contarTareasRealizadas();
}

//funcion eliminar, elimina la tarea con el boton x

btnAgregarTarea.addEventListener("click", () => {

    const nombreTarea = {id: Math.floor(Math.random()*100), descripcion: inputNuevaTarea.value, completado: false}
    tareas.push(nombreTarea);
    inputNuevaTarea.value = "";
    Actualizar();
    contarTareasRealizadas();
})

//btnAgregarTarea agrega una tarea, mas id de forma random al arreglo tareas
