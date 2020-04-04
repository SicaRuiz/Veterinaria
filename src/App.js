import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './compontents/Inicio';
import Turnos from './compontents/Turnos';
import Contactos from './compontents/Contactos';
import BarrNav from './compontents/navbar/BarraNav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <BarrNav />
    <Switch>
      <Route path="/turnos" component={Turnos} />
      <Route path="/contactos" component={Contactos}/>
      <Route path="/" component={Inicio} />
    </Switch>
</Router>


  );
}

export default App;
