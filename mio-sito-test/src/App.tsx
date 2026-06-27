import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
      <h1>Il mio sito di test</h1>
      <p>React + Vite funziona.</p>
    </main>
  )
}

export default App
