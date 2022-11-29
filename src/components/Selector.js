import Break from "./Break";
import PositionSelector from "./PositionSelector";
import Roster from "./Roster";
import TeamSelector from "./TeamSelector";
import { teams, positions, sortByStats } from '../constants'
import { useState } from "react";

const initTeamLength = 10
const initTeams = teams.slice(0, initTeamLength)
const expandTeams = teams.slice(initTeamLength, teams.length)

const statToExplanation = {
    "Alphabetical": "sort by alphabetical order",
    "OVR": "a player's overall rating (max 99)",
    "Finishing": "how well a player can score around the rim",
    "Mid-Range": "how well a player can shoot from the mid-range",
    "3PT": "how well a player can shoot behind the three point line",
    "Playmaking": "how well a player can faciliate his teammates",
    "Rebounding": "how well a player can grab rebounds after a miss",
    "Defense": "how well a player can prevent the opposing player from scoring",
}

export default function Selector({
    roster,
    playerData,
    setSortBy,
    setFilterByTeam,
    setFilterByPosition,
}) {
    const [shownTeams, setShownTeams] = useState(initTeams)

    const teamComponents = shownTeams.map(team =>
        <TeamSelector id={team.substring(0, 3)} teamName={team} setFilterByTeam={setFilterByTeam} />
    )

    const onExpandClicked = () => {
        if (shownTeams.length === initTeamLength) {
            setShownTeams([...shownTeams].concat(expandTeams))
        } else {
            setShownTeams(shownTeams.filter(oldTeam => initTeams.includes(oldTeam)))
        }
    }


    // const teamComponentsWithBreak = []
    // for (const element of teamComponents) {
    //     teamComponentsWithBreak.push(element)
    //     teamComponentsWithBreak.push(<Break />)
    // }

    const positionComponents = positions.map(pos =>
        <PositionSelector position={pos} setFilterByPosition={setFilterByPosition} />
    )

    const radioButtons = sortByStats.map(stat => (
        <div>
            <input onClick={() => setSortBy(stat)} type={"radio"} id={stat} value={"Alphabetical"} name={"stats"}></input>
            <label className="sort-text" for={stat}>
                {stat}
                <span className="popup-text">
                    {statToExplanation[stat]}
                </span>
            </label>
            <br></br>
        </div>
    ))

    return (
        <div className="selector">
            <div className="selector-segment" id="sorting">
                <h4>Sort By</h4>
                <div className="sort-buttons">
                    {radioButtons}
                </div>
            </div>

            <div className="selector-segment" id="teams">
                <h4>Team</h4>
                <div className="team-container">
                    {teamComponents}
                </div>
                <button className="expand" onClick={onExpandClicked}>{shownTeams.length === initTeamLength ? "+ More" : "- Less"}</button>
            </div>


            <div className="selector-segment">
                <h4>Position</h4>
                <div className="position-container">
                    {positionComponents}
                </div>
            </div>

            <div className="selector-segment" id="roster-container">
                <h4>Roster</h4>
                <Roster playerData={playerData} roster={roster} />
            </div>

        </div>
    );
}