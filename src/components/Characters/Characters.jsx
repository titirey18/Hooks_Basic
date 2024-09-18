import React, { useState } from 'react'
import './Characters.css'
const Personaje = ({ personaje }) => {
  const [rotado, setRotado] = useState(false)

  return (
    <div>
      <img
        className={rotado ? 'rotado' : 'image'}
        src={personaje.image}
        alt={personaje.name}
        onClick={() => setRotado(!rotado)}
      />
    </div>
  )
}

export default Personaje
