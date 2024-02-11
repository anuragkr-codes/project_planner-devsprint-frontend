import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar';

function App() {
  const [dataTheme, setDataTheme] = useState("dark");

  const toggleAppearance = () => {
    setDataTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div id='app' data-theme={dataTheme}>
      <Navbar toggleAppearance={toggleAppearance} dataTheme={dataTheme} />
      <div style={{height: '200vh', color: 'white'}}>Test Text</div>
    </div>
  )
}

export default App
