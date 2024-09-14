/*CARGAR PROVINCIAS Y CANTONES*/
let $provincia = document.getElementById('provincia');
let $canton = document.getElementById('canton');

/*LLENAR MATRICES*/
let provincias = ['Carchi', 'Imbabura','Napo'];
let cantones = ['Tulcán', 'Montúfar', 'Mira', 'Bolívar', 'Espejo', 'San Pedro de Huaca', 'Ibarra', 'Antonio Ante','Cotacachi', 'Otavalo','Pimampiro','San Miguel de Urcuqui','Tena','Archidona','Carlos Julio Arosemena Tola','El Chaco','Quijos' ];

/*LLAMAR A UNA FUNCION */
verProvincias(provincias, $provincia);

/*CONSTRUCCIÓN DE LA FUNCION*/
function verProvincias(matriz, lugar){
    let elementos = '<option selected disabled> Seleccione </option> ';

    for(let i = 0; i < matriz.length; i++){
        elementos += '<option value =  "' + matriz[i] + '">' + matriz[i] + '</option>';
    }
    lugar.innerHTML = elementos;
}

/*VALIDAR PROVINCIAS*/
$provincia.addEventListener('change', function(){
    let valor = $provincia.value; 

    switch(valor){
        case 'Carchi':
            verProvincias(cantones.slice(0,6),$canton);
            break;
        case 'Imbabura': 
        verProvincias(cantones.slice (6,12), $canton);
        break;  

        case 'Napo' :
            verProvincias(cantones.slice(12,17), $canton);
        break;
        
    }
});