
export default function Roster({
    roster,
    playerData
}) {
    const starters = roster.map(player =>
        <p>{player}</p>
    )
    console.log(playerData)

    const ovrs = roster.map(player => playerData[player]["OVR"])


    return (
        <div className="roster">
            {starters}
            <p>{ovrs.length === 0 ? "" : "AVG OVR: " + Math.round(ovrs.reduce((a, b) => a + b, 0) / ovrs.length)}</p>
        </div>
    )
}