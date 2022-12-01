import { stats } from "../constants"

const gradeColors = {
    'S': "#a31bff",
    'A+': "#0a0",
    'A': "#0a0",
    'A-': "#0a0",
    'B+': "#070",
    'B': "#070",
    'B-': "#070",
    'C+': "#c90",
    'C': "#c90",
    'C-': "#c90",
    'D+': "#d40",
    'D': "#d40",
    'D-': "#d40",
    'F': "#900",
}

export default function PlayerStats({
    playerData,
}) {
    const gradeStyle = (stat) => {
        return {
            'background-color': gradeColors[playerData[stat]],
        }
    }

    const statGrades = stats.map(stat =>
        <div className='grade'>
            <span className='letter-grade' style={gradeStyle(stat)}>{playerData[stat]}</span>
            <p> {stat} </p>
        </div>
    )
    return (
        <div className="stats-container">
            {statGrades}
        </div>
    )
}