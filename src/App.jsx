import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data.jsx'
import Card from './components/Card'
import Nav from './components/Nav'

function App() {
  const cards = data.map(item=>{
    return <Card item={item} />
  }

  )
  

  return (
    <div className="App">
      <Nav />
      {cards}
  

    </div>
  )
}

export default App
