import { useState } from 'react';
import { useEffect } from "react"
import { getAllStarships } from "../services/sw-appi"

function StarShipCard() {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const StarshipData = async  () => {
            const starshipData = await getAllStarships()
            setStarships(starshipData.results)
        }
        StarshipData()
    }, [])

    return (
        <>
            <div className="cardbox" >
                {starships.map(starship =>
                    <div
                        key={starship.index} >
                        <div className="card" >
                            <h2>{starship.name}</h2>
                            <div className="cardInfo" >
                            <p><span>Model: </span>{starship.model}</p>
                            <p><span>Cost: </span>{starship.cost_in_credits}</p>
                            <p><span>Created: </span>{starship.created}</p>
                        </div>
                        </div>
                       
                    </div>
                )}
            </div>
        </>
    )
}
export default StarShipCard