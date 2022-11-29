import PlayerStats from './PlayerStats';
import PlayerData from './PlayerData';


export default function Player({
    playerData,
    name,
    addToRoster,
    buttonText,
    rosterSize
}) {

    const onRosterClick = () => {
        addToRoster(name)
    }

    return (
        <div className='card-container'>
            <PlayerData name={name} playerData={playerData} />
            <PlayerStats playerData={playerData} />


            <button disabled={(rosterSize === 5 && buttonText === "Add to Roster")} className="roster-button" onClick={onRosterClick}>
                {buttonText}
            </button>
        </div>
    );
}