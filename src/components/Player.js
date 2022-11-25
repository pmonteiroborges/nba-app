import { useState } from 'react';
import playerCareerStats from '/Users/pedromonteiroborges/Desktop/uiux/nba-app/src/assets/player-career-stats.json';

let gradeColors = {
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

export default function Player({
    playerData,
    name,
    addToRoster,
    buttonText,
}) {

    console.log(buttonText)
    const playerImageUrl = (id) => {
        return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
    }

    const onRosterClick = () => {
        addToRoster(name)
    }

    const gradeStyle = (stat) => {
        return { 'color': gradeColors[playerData[stat]] }
    }

    return (
        <div>
            <img className="playerImage"
                src={playerImageUrl(playerData["ID"])}>
            </img>
            <p>{name}</p>
            <p className='grade'>OVR: <span style={gradeStyle("OVR")}>{playerData["OVR"]}</span></p>
            <p className='grade'>Finishing: <span style={gradeStyle("Finishing")}>{playerData["Finishing"]}</span></p>
            <p className='grade'>Mid-Range: <span style={gradeStyle("Mid-Range")}>{playerData["Mid-Range"]}</span></p>
            <p className='grade'>3PT: <span style={gradeStyle("3PT")}>{playerData["3PT"]}</span></p>
            <p className='grade'>Playmaking: <span style={gradeStyle("Playmaking")}>{playerData["Playmaking"]}</span></p>
            <p className='grade'>Rebounding: <span style={gradeStyle("Rebounding")}>{playerData["Rebounding"]}</span></p>
            <p className='grade'>Defense: <span style={gradeStyle("Defense")}>{playerData["Defense"]}</span></p>


            <button onClick={onRosterClick}>
                {buttonText}
            </button>
        </div>
    );
}