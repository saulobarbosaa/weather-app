/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './helpers/initialData';

function App() {

  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetchData(city).then((res) => {
      setData(res);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Cidade" 
          className="p-3 rounded-lg outline-none drop-shadow-lg"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button 
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-2 text-white font-bold drop-shadow-lg hover:bg-blue-500 transition ease-in-out"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />

    </div>
  );
}

export default App;
