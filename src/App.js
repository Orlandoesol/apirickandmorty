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
import imageRickMorty from "./img/rick-morty.png"

import "./App.css"
import { useState } from "react";
import Characters from "./components/characters";


function App(){

  const[characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character?page=5');

    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title" >Rick and Morty</h1>
        { characters ? 
        (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
          <button onClick={reqApi} className="btn-search">Cargar Personajes</button>
          </>
        )
      }
      </header>
    </div>
  )
}

export default App;

