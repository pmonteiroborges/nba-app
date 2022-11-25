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
            <input onChange={setFilterToTeamName} type="checkbox" id={id} name={"team"}></input>
            <label for={id}>{teamName}</label><br></br>
        </div>
    )
}