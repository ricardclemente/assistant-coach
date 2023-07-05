import { useState } from 'react'
import './App.css'
import {AthleteCard} from './AthleteCard.jsx'

export function App() {
  const [count, setCount] = useState(0)
  const athletes = [
    {id: 1, name: "Usain Bolt", speciality: "100m", nationality:"JAM"},
    {id: 2, name: "Mondo Duplantis", speciality: "Pole Vault", nationality: "SWE"},
    {id: 3, name: "Ating Mu", speciality: "800m", nationality:"USA"}
  ]

  return (
    <>
      <div>
        <h1>ATHLETE LIST</h1>
      </div>
      <ul>
        {athletes.map((athlete => (
          <AthleteCard 
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
