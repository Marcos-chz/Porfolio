import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="app">
      <header className='container-fluid'></header>
      <div className='container max'>
        <section className='main row'>
          <div className='col flex flex-column'>
            <h1>Marcos Chávez</h1>
            <h2>Desarollador Web</h2>
          </div>

          <div className='col flex'>
            <img className='my-foto' src="https://ellees.h-cdn.co/assets/15/37/640x942/640x942-52-55d8-11e6-8246-1ff36568f40fayer-y-hoy-asi-ha-cambiado-johnny-depp-1993-12849750-1-esl-es-1993-jpg.jpg" alt="" />
          </div>
        </section>

        <h1>Proyectos</h1>
        <section className='proyects container'>

        </section>
        </div>
    </div>
  );
}

export default App;
