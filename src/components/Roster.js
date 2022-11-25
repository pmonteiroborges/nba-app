
export default function Roster({ roster }) {
    const starters = roster.map(player =>
        <p>{player}</p>
    )
    return (
        <div>
            {starters}
        </div>
    )
}