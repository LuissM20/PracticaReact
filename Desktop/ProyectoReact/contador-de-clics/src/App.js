import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import Boton from './componentes/Boton';
import "./hojas-de-estilo/Boton.css"
import Contador from './componentes/Contador';
import "./hojas-de-estilo/Contador.css"
import { useState } from 'react';

function App() {
 
  const [numeroDeClics,setClics]=useState(0);

  const manejarClic =()=>{
    setClics(numeroDeClics+1);
  }
  const reiniciarContador =()=>{
    setClics(0);
  }
  const multiplicador =()=>{
    setClics(numeroDeClics*2);
  }
  const restar =()=>{
    setClics(numeroDeClics-1);
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de Free Code Camp'
        />
      </div>
      <div className='contenedor-principal'>
        
        <div>
          <Contador numeroDeClics={numeroDeClics} />
          <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
          <Boton 
          texto="Multiplicador*2"
          esBotonDeClic={false}
          manejarClic={multiplicador} />
          <Boton 
          texto="Restar"
          esBotonDeClic={false}
          manejarClic={restar} />
        </div>
      </div>
    </div>
  );
}

export default App;
