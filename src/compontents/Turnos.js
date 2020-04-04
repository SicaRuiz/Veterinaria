import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './turnosclientes/Formulario';
import Turno from './turnosclientes/Turno';


function Turnos(){

  let primerosTurnos = JSON.parse(localStorage.getItem('turnos'));
  if(!primerosTurnos){
    primerosTurnos = [];
  }

  const [ turnos, guardarTurnos] = useState(primerosTurnos);

  useEffect( () => {
    if(primerosTurnos){
      localStorage.setItem('turnos', JSON.stringify(turnos));
    } else {
      localStorage.setItem('turnos', JSON.stringify([]));
    }
  }, [turnos, primerosTurnos] );

  const crearTurno = turno => {
    guardarTurnos([
      ...turnos,
      turno
    ]);
  }

  const eliminarTurno = id => {
    const nuevosTurnos = turnos.filter(turno => turno.id !== id );
    guardarTurnos(nuevosTurnos);
  }

  const titulo = turnos.length === 0 ? 'No hay Turnos' : 'Administra tus Turnos';



    return (
        <Fragment>

        <div className="container">
        <h1 className="mt-5 text-center shadow rounded-pill back">Turnos</h1>

          <div className="card mt-5 shadow border-0 py-2 px-4">
            <Formulario
              crearTurno={crearTurno}
            />
          </div>
          <div className="container mb-5">
            <h2 className="text-center  rounded-pill shadow py-2 my-5 back">{titulo}</h2>
            <div className="row row-cols-1 row-cols-md-3 ">
              {turnos.map(turno => (
                <Turno 
                  key={turno.id}
                  turno={turno}
                  eliminarTurno={eliminarTurno}
                />
              ))}
            </div>
          </div>
       </div>
    </Fragment>
        
    )
}

export default Turnos;