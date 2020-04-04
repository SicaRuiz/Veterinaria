import React from 'react';
import PropTypes from "prop-types";

const Turno = ({turno, eliminarTurno}) =>  {

const {mascota, propietario, fecha, hora, sintomas, id} = turno;
return(
    

    <div className="col mb-2">
        <div className="card-body bg-white text-center">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        </div>
    <button
        className="btn-danger form-control"
        onClick={ () => eliminarTurno(id) }
    >Eliminar &times;</button>

    </div>
    );
}

Turno.prototype = {
    turno: PropTypes.object.isRequired,
    eliminarTurno: PropTypes.func.isRequired

}

 
export default Turno;