// FUNCIONES
// Solicitar nombre del alumno
function nombreAlumno(){
    let nombre = "";
    do{
        nombre = prompt("Introduzca el nombre del alumno");
    } while (nombre === "");
    return nombre;
}

// Solicitar notas
function solicitarNotas(){
    let nota = 0;
    do{
    nota = Number(prompt("Ingrese la nota (use un punto para los decimales)"));
    console.log(nota);
    } while (isNaN(nota));
    return nota;
}

// Calcular promedio
function notaFinal(x, y, z){
    let notaFinal = (x+y+z)/3;
    alert(`El promedio de ${alumno} es ${notaFinal}`);
    return notaFinal;
}

// LLAMADO DE FUNCIONES
let alumno = nombreAlumno();
let nota0 = solicitarNotas();
let nota1 = solicitarNotas();
let nota2 = solicitarNotas();
let promedio = notaFinal(nota0, nota1, nota2);

// Aprobado / desaprobado
if (promedio >= 4){
    alert(`${alumno} ha aprobado`);
}
else{
    alert(`${alumno} ha desaprobado`);
}

// Comentario final
switch (true) {
    case promedio < 4:
        alert(`Qué lástima`);
        break;
    case promedio === 4:
        alert(`Pero con lo justo`);
        break;
    case promedio === 10:
        alert(`Excelente nota!`);
        break;
    case promedio > 10:
        alert(`Wow, más de 10!`);
        break;
    default:
        alert(`Muy bien`);
        break;
}
