import {  useState, useEffect } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail' 
import Form from './components/Form/Form';



function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  
  const [characters, setCharacters] = useState([]);

  const [ access, setAccess ] = useState(false);
  const username = "mariarosafuhr@gmail.com";
  const password = "mari1234"

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  function login(userData){
    if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home")
    } 
  }
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
  };
   return(
    <div className="App" style={{padding: "50px"}}>
      {
        location.pathname !== "/" && <Nav onSearch={onSearch}/>
      }
    
    
      <Nav onSearch={onSearch} />
      <Routes>
        <Route 
        path="/"
         element={<Form Login={login}/>}
         />
        <Route
         path="/home" 
         element={<Cards characters={characters} 
         onClose={onClose}/>}
         />
        <Route 
        path="/about" 
        element={<About/>}
        />
        <Route 
        path="/detail/:detailId" 
        element={<Detail/>}
        />
       </Routes>
       </div>
   );
   }
    


export default App;
