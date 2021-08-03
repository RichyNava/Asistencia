var asistencia=[];

function lista(){
    const inputName=document.getElementById('nombre');
    const name=inputName.value;
   
    const inputApellidos=document.getElementById('apellidos');
    const apellidos=inputApellidos.value;

    const inputEscuela=document.getElementById('escuelita');
    const escuela=inputEscuela.value;

  //  asistencia.push(name+' '+apellidos+' '+escuela);
    const parragraph=document.getElementById('asistenciaList');
    parragraph.innerText=name+' '+apellidos+' institucion:'+escuela;
}