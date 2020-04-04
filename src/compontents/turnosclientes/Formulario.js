import React, { Fragment, useState } from 'react';
import shortid from 'short-id';
import PropTypes from "prop-types";
import './formulario.css'

const Formulario = ({crearTurno}) => {

    const [turno, actualizarTurno] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, actualizarError] = useState(false) 

    const actualizarState = e => {
        actualizarTurno({
            ...turno,
            [e.target.name]:e.target.value 
        });
    }

 
    const {mascota, propietario, fecha, hora, sintomas} = turno;


    const submitTurno = e => {
        e.preventDefault();


        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
     
        actualizarError(false);

     
        turno.id= shortid.generate()
   
        crearTurno(turno);

        actualizarTurno({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''

        })

    }

    return (  
        <Fragment>
        <h1 className="text-center">Crear Turno</h1>

        { error ? <p className="text-center bg-danger text-white">Todos los campos son obligatorios</p> : null }

        <form
            onSubmit={submitTurno}
        >   
            <div className="form-row">
                <div className
                
                
                ="col-6 col-md-6 mt-4 py-2">
                    <label className="font-weight-bold">Nombre Mascota:</label>
                    <input
                        type="text"
                        name="mascota"
                        className="form-control" 
                        placeholder="Nombre de la mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />
                </div>
                <div className
                
                
                ="col-6 col-md-6 mt-4 py-2">
                    <label className="font-weight-bold">Nombre dueño:</label>
                    <input
                        type="text"
                        name="propietario"
                        className="form-control" 
                        placeholder="Nombre Dueño de la mascota"
                        onChange={actualizarState}
                        value={propietario}
                    />
                </div>
                <div className
                
                
                ="col-6 col-md-6 mt-4 py-2">
                    <label className="font-weight-bold">Fecha:</label>
                    <input
                        type="date"
                        name="fecha"
                        className="form-control" 
                        onChange={actualizarState}
                        value={fecha}
                    />
                </div>
                <div className="col-6 col-md-6 mt-4 py-2">
                    <label className="font-weight-bold">Hora:</label>
                    <input
                        type="time"
                        name="hora"
                        className="form-control" 
                        onChange={actualizarState}
                        value={hora}
                    />
                </div>
                <div className="col-12 col-md-12 mt-4 py-2">
                    <label className="font-weight-bold">Síntomas:</label>
                    <textarea
                        name="sintomas"
                        className="form-control"
                        onChange={actualizarState} 
                        value={sintomas}
                    ></textarea>
                </div>
            </div>
            <button
                type="submit"
                id="btnform"
                className="form-control font-weight-bold rounded-pill mt-5"
            >Agregar Cita</button>
        </form>
        </Fragment>
    );
}
Formulario.propTypes = {
    crearTurno: PropTypes.func.isRequired
}
 
export default Formulario;