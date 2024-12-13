/* import React from "react";
import Welcome from "./components/examples/welcome.jsx";
import JSXExample from "./components/examples/jsxExample.jsx";
import PropsExample from "./components/examples/propsExample.jsx";
import StateExample from "./components/examples/stateExample.jsx";
import Boton from "./components/examples/eventExample.jsx";
import FetchData from "./components/examples/useEffectExample.jsx";
import Login from "./components/examples/conditionalExample.jsx";
import List from "./components/examples/listExample.jsx";
import FetchDataApi from "./components/examples/listApiExample.jsx";
import ContextExample from "./components/examples/contextExample.jsx";
import RouterExample from "./components/examples/routerExample.jsx";


function App() {
  return (
    <div>
        <h1>Ejemplos de React</h1>
        <Welcome />
        <JSXExample />
        <PropsExample />
        <StateExample />
        <Boton />
        <FetchData />
        <Login />
        <List />
        <FetchDataApi />
        <ContextExample />
        <RouterExample />
    </div>

  );
}

export default App; */
import React, { useState } from "react";
import imageRickMorty from "./img/rick-morty.png"
import "./App.css"
import Characters from "./components/characters.jsx";


function App(){

  const[characters, setCharacters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);//Pagina inicial
  const [totalPages, setTotalPages] = useState(1);//Total paginas disponibles

  const reqApi = async (page = 1) => {
    const api = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    setTotalPages(characterApi.info.pages);//Da total de paginas disponibles
  };

  React.useEffect(() => {
    reqApi(currentPage);
  }, [currentPage]);// Carga los personajes por pagina

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title" >Rick and Morty</h1>
        { characters ? 
        (
          <Characters 
          characters={characters} 
          setCharacters={setCharacters}
          currentPage ={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          />
        ) : (
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
          <button onClick={() => reqApi(currentPage)} className="btn-search">
            Cargar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  )
}

export default App;

