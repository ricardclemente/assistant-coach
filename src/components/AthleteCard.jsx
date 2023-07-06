import { useState } from "react"

export function AthleteCard({id,name,speciality, nationality}){
    const [showNationality, setShowNationality] = useState(false)
    const handleClick=()=>{setShowNationality(!showNationality)}
    return(
        <>
        <li key={id}> {name} - {speciality}
        {showNationality && <div>{nationality}</div>}
        </li>
        <button onClick={handleClick}>{showNationality ? "Hide Details" : "Show Details"}</button>
        
        </> 
    )
}