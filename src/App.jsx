import { useState, useEffect } from 'react'
import './App.css'
import Personaje from './components/Characters/Characters'

function App() {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <div className='grid'>
        {personajes.map((personaje) => (
          <Personaje personaje={personaje} />
        ))}
      </div>
    </div>
  )
}

export default App
