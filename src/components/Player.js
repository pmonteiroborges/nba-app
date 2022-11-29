import { useState } from 'react';
import playerCareerStats from '/Users/pedromonteiroborges/Desktop/uiux/nba-app/src/assets/player-career-stats.json';
import PlayerStats from './PlayerStats';
import PlayerData from './PlayerData';


export default function Player({
    playerData,
    name,
    addToRoster,
    buttonText,
}) {

    const onRosterClick = () => {
        addToRoster(name)
    }

    return (
        <div className='card-container'>
            <PlayerData name={name} playerData={playerData} />
            <PlayerStats playerData={playerData} />


            <button className="roster-button" onClick={onRosterClick}>
                {buttonText}
            </button>
        </div>
    );
}