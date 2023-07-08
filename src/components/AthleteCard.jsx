import { useState } from "react"
import './AthleteCard.css'
import defaultImage from '../images/DefaultUserPicture.png';

export function AthleteCard({id,name,speciality, nationality}){
    const [showNationality, setShowNationality] = useState(false)
    const handleClick=()=>{setShowNationality(!showNationality)}
    const caretDown = <i className="fa fa-caret-down"></i>
    const caretUp = <i className="fa fa-caret-up"></i>
    return(
        <>
        <li key={id} className="athleteItem"> 
            <div className="athleteCard">
                <div className="imageBox">
                    <img src={defaultImage} className="userimage"/>
                    <div className="innerIcon"></div>
                </div>
                <div className="sideBox">
                    <div className="spanStyle">
                        <b>{name} </b>
                    </div>
                    <div className='spanStyle2'>
                        <b>{speciality}</b> 
                    </div>
                    {showNationality && <span className='spanStyle2'>{nationality}</span>}
                    <div className='spanStyle2'>
                    <button className='athleteButton' onClick={handleClick}>{showNationality ? caretUp : caretDown}</button>
                    </div>
                </div>
            </div>
        </li>
        
        
        </> 
    )
}