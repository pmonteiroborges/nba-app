import { teamsToAbb } from "../constants"

const getTeamImg = (team) =>
    `https://ultimate-gm.s3.us-east-2.amazonaws.com/Logos/${team}.png`

export default function PlayerData({
    name,
    playerData
}) {
    const playerImageUrl = (id) => {
        return `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
    }

    let teamName = playerData["Team"].split(" ")[2]
    if (teamName === undefined) {
        teamName = playerData["Team"].split(" ")[1].toLowerCase()
    } else {
        teamName = teamName.toLowerCase()
    }
    console.log({ teamName: teamName })
    return (
        <div className="player-facts">
            <div className="basic-facts">
                <h3>{playerData["OVR"]}</h3>
                <p>{playerData["Primary Position"]}</p>
                <img className="team-logo" src={getTeamImg(teamName)}></img>
            </div>

            <div className="image-with-name">
                <img className="player-image"
                    src={playerImageUrl(playerData["ID"])}>
                </img>
                <h4>{name}</h4>
            </div>

        </div>
    )
}