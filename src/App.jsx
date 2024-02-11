import { useState } from 'react'
import './App.css'

function App() {
  const [dataTheme, setDataTheme] = useState("dark");

  const toggleAppearance = () => {
    setDataTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div id='app' data-theme={dataTheme}>
      <button onClick={toggleAppearance}>CHANGE</button>
    </div>
  )
}

export default App
