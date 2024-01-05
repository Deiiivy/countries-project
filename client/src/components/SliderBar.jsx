import React from 'react'
import '../styles/sliderbar.css'
import { Link } from 'react-router-dom'

function SliderBar() {
  return (
    <div className='container'>
      <h1>Logo</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/crear-pais">Crear pais</Link></li>
        <li><Link to="/gestionar-pais">Gestionar Pais</Link></li>
      </ul>
    </div>
  )
}

export default SliderBar