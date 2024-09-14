/*OBTENER INNFORMACION DE FORMULARIO*/

const fecha = document.getElementById('fecha');
const edadUsuario = document.getElementById('edad');

/* SUNCION PARA CALCULAR LA EDAD*/
function calcularEdad(fecha){
    const hoy = new  Date();
    const fechaNacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if(mes < 0 || (mes == 0 && hoy.getDate() < fechaNacimiento.getDate() ) ){
        edad--;
    }
    return edad;
}
/*EVENTO SE ACTIVA CUANDO CUANDO SE INGRESA FECHA */
fecha.addEventListener('change', function(){
    const edad = calcularEdad(this.value);
    edadUsuario.value = edad;
});