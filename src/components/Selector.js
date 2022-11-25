import Break from "./Break";
import PositionSelector from "./PositionSelector";
import Roster from "./Roster";
import TeamSelector from "./TeamSelector";
import { teams, positions, stats } from '../constants'

export default function Selector({
    roster,
    setSortBy,
    setFilterByTeam,
    setFilterByPosition,
}) {
    const teamComponents = teams.map(team =>
        <TeamSelector id={team.substring(0, 3)} teamName={team} setFilterByTeam={setFilterByTeam} />
    )

    const teamComponentsWithBreak = []
    for (const element of teamComponents) {
        teamComponentsWithBreak.push(element)
        teamComponentsWithBreak.push(<Break />)
    }

    const positionComponents = positions.map(pos =>
        <PositionSelector position={pos} setFilterByPosition={setFilterByPosition} />
    )

    const radioButtons = stats.map(stat => (
        <div>
            <input onClick={() => setSortBy(stat)} type={"radio"} id={stat} value={"Alphabetical"} name={"stats"}></input>
            <label for={stat}>{stat}</label><br></br>
        </div>
    ))

    return (
        <div className="selector">
            <h4>Sort By</h4>
            {radioButtons}

            <h4>Team</h4>
            <div className="team-container">
                {teamComponentsWithBreak}
            </div>

            <h4>Position</h4>
            <div className="position-container">
                {positionComponents}
            </div>

            <h4>Roster</h4>
            <Roster roster={roster} />
        </div>
    );
}