import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'

function App() {
  const [characters, setCharacters] = useState([]);
  /* const example = {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  }; */
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // data --> {}
        (data.name ? characters.filter((char) => char.id === data.id).length === 0 : "") ? setCharacters([...characters, data]):
        alert("Personaje no encontrado")
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char)=>char.id !== Number(id))
    setCharacters(filtered)
  }
  return (
    <div
      className="App"
      style={{
        padding: "25px",
      }}
    >
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;