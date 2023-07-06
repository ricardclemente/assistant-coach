import { useState } from 'react'
import './App.css'
import {AthleteCard} from './components/AthleteCard.jsx'
import { AppHeader } from './components/AppHeader'
import { Home } from './panels/Home'
import { menuItems } from './constants'
import { Calendar } from './panels/Calendar'
import { Exercices } from './panels/Exercices'
import { Athletes } from './panels/Athletes'
import { Profile } from './panels/Profile'

export function App() {
  const [actualPanel, setActualPanel] = useState(menuItems.Home)
  const changeActualPanel=(newPanel) =>{
    if (newPanel===actualPanel) return
    setActualPanel(newPanel)
    renderPanel(newPanel)
  }
  const renderPanel=()=>{
    switch(actualPanel){
      case menuItems.Home:
        return <Home/>;
      case menuItems.Calendar:
        return <Calendar/>;
      case menuItems.Exercices:
        return <Exercices/>;
      case menuItems.Athletes:
        return <Athletes/>;
      case menuItems.Profile:
        return <Profile/>;
    }
    return null;
  }
  return (
    <>
      <AppHeader 
        updatePanel={changeActualPanel}
      />
      {renderPanel()}
    </>
  )
}

export default App
