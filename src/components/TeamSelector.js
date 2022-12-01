import { useState } from "react"

export default function TeamSelector({
    id,
    teamName,
    setFilterByTeam,
}) {
    const [checked, setChecked] = useState(false)
    const setFilterToTeamName = () => {
        console.log(checked)
        // old value of checked, so use opposite value
        if (!checked) {
            setFilterByTeam(oldTeams => [...oldTeams, teamName])
        } else {
            setFilterByTeam(oldTeams => oldTeams.filter(team => team !== teamName))
        }

        setChecked(!checked)
    }

    return (
        <div className="team">
            <input className="team-button" onChange={setFilterToTeamName} type="checkbox" id={id} name={"team"}></input>
            <label className="team-label" for={id}>{teamName}</label><br></br>
        </div>
    )
}