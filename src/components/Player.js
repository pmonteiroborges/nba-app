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
            <h4>{name}</h4>
            <PlayerStats playerData={playerData} />


            <button disabled={(rosterSize === 5 && buttonText === "Add to Roster")} className="roster-button" onClick={onRosterClick}>
                {buttonText}
            </button>
        </div>
    );
}