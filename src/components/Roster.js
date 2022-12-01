
export default function Roster({
    roster,
    playerData
}) {

    const starters = Object.keys(roster).map((pos) =>
        <p className="position-player">{pos}: {roster[pos]}</p>
    )


    const ovrs =
        Object.values(roster).filter(player => player !== "")
            .map(player =>
                playerData[player]["OVR"]
            )

    console.log(roster)
    return (
        <div className="roster">
            {starters}
            <p className="roster-label">{ovrs.length === 0 ? "" : "AVG OVR: " + Math.round(ovrs.reduce((a, b) => a + b, 0) / ovrs.length)}</p>
        </div>
    )
}