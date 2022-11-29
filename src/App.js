import { useState, useEffect } from 'react';
import playerData from './assets/nba-players.json';
import logo from './assets/nbalogo.webp'
import Player from './components/Player';
import Selector from './components/Selector';
import { allStars } from './constants';
import Collapsible from './components/Collapsible';


const gradeComparison = (a, b) => {
  const gradeToNum = {
    'S': 11,
    'A+': 10,
    'A': 9,
    'A-': 8,
    'B+': 7,
    'B': 6,
    'B-': 5,
    'C+': 4,
    'C': 3,
    'C-': 2,
    'D+': 1,
    'D': 0,
    'D-': -1,
    'F': -2,
  }

  return gradeToNum[b] - gradeToNum[a]
}

function App() {
  const [currRoster, setCurrRoster] = useState({
    "PG": "",
    "SG": "",
    "SF": "",
    "PF": "",
    "C": "",
  })

  const addPlayerToRoster = (player) => {
    // if the player is in the list, don't add it again
    if (!Object.values(currRoster).includes(player)) {
      if (Object.values(currRoster).filter(x => x !== "").length < 5) {

        const pp = allStars[player]["Primary Position"]
        const sp = allStars[player]["Secondary Position"]

        if (currRoster[pp] === "") {
          const newRoster = { ...currRoster }
          newRoster[pp] = player
          setCurrRoster(newRoster)

          return true
        } else if (currRoster[sp] === "") {
          const newRoster = { ...currRoster }
          newRoster[sp] = player
          setCurrRoster(newRoster)

          return true
        } else {
          return false
        }
      }
      return false
    } else {
      const newRoster = { ...currRoster }

      for (let pos of Object.keys(newRoster)) {
        if (newRoster[pos] === player) {
          newRoster[pos] = ""
          break
        }
      }

      console.log(newRoster)
      setCurrRoster(newRoster)
      return true
    }
  }

  const [sortBy, setSortBy] = useState("")
  const [filterByTeam, setFilterByTeam] = useState([])
  const [filterByPosition, setFilterByPosition] = useState([])

  const allStarPlayerNames = Object.keys(allStars)

  const allStarPlayerComponents = () => {
    // sort players by alphabetical order by default
    let players = allStarPlayerNames

    // filtering

    // reset list if state lists becomes empty
    if (filterByPosition.length === 0 || filterByTeam.length === 0) {
      players = allStarPlayerNames.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))
    }

    players = players.filter(player =>
      filterByPosition.includes(allStars[player]["Primary Position"]) || filterByPosition.length === 0)

    players = players.filter(player =>
      filterByTeam.includes(allStars[player]["Team"]) || filterByTeam.length === 0)

    // sorting
    if (sortBy === "") {

    }
    else if (sortBy === "OVR") {
      players.sort((a, b) => allStars[b]["OVR"] - allStars[a]["OVR"])
    }
    else if (sortBy === "Alphabetical") {
      // sort by last name
      players.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]))
    }
    else {
      players.sort((a, b) => gradeComparison(allStars[a][sortBy], allStars[b][sortBy]))
    }

    return players.map(
      name => <Player
        playerData={allStars[name]}
        name={name}
        addToRoster={addPlayerToRoster}
        buttonText={Object.values(currRoster).includes(name) ? "Remove from Roster" : "Add to Roster"}
        rosterSize={currRoster.length}
      />
    )
  }

  return (
    <div className="App">

      <div className='header'>
        <img src={logo} className="logo"
          alt='basketball'></img>
        <h1>NBA All-Star Roster Selection</h1>
      </div>

      {/* <Collapsible /> */}
      <div className='grid-container'>
        <Selector roster={currRoster} playerData={allStars} setSortBy={setSortBy} setFilterByTeam={setFilterByTeam} setFilterByPosition={setFilterByPosition} />

        <div className='player-container'>
          {allStarPlayerComponents()}
        </div>
      </div>
    </div>
  );
}

export default App;