import { AthleteCard } from "../components/AthleteCard"
export function Athletes(){
    const athletes = [
        {id: 1, name: "Usain Bolt", speciality: "100m", nationality:"JAM"},
        {id: 2, name: "Mondo Duplantis", speciality: "Pole Vault", nationality: "SWE"},
        {id: 3, name: "Ating Mu", speciality: "800m", nationality:"USA"}
      ]

    return (
        <>
            <div>
                <h1>ATHLETES</h1>
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