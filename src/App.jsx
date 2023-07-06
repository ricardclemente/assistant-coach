import { useState } from 'react'
import './App.css'
import {AthleteCard} from './AthleteCard.jsx'
import { AppHeader } from './components/AppHeader'

export function App() {
  const [count, setCount] = useState(0)
  const athletes = [
    {id: 1, name: "Usain Bolt", speciality: "100m", nationality:"JAM"},
    {id: 2, name: "Mondo Duplantis", speciality: "Pole Vault", nationality: "SWE"},
    {id: 3, name: "Ating Mu", speciality: "800m", nationality:"USA"}
  ]

  return (
    <>
      <AppHeader />
      <div>
        <h1>ATHLETE LIST</h1>
      </div>
      <ul>
        {athletes.map((athlete => (
          <AthleteCard 
            key={athlete.id}
            id={athlete.id} 
            name={athlete.name} 
            speciality={athlete.speciality} 
            nationality={athlete.nationality} 
          />
        )))}
      </ul>
    </>
  )
}

export default App
