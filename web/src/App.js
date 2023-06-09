import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//3 Conceitos principais do React

// Componente: Bloco isolado de HTML, CSS, JS. O qual nao interfere no restante da aplicação
// Estado: Informações mantidas pelo Componente (lembrar: imutabilidade)
// Propriedade: Informações que um Componente PAI passa para um Componente FILHO


function App() {// Componente PAI
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
           <DevItem key={dev._id} dev={dev} />
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
