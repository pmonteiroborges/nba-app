import './App.css';
import { useState, useEffect } from 'react';
import playerData from './assets/nba-players.json';
import logo from './assets/nbalogo.webp'
import Player from './components/Player';
import Selector from './components/Selector';
import { allStars } from './constants';


const gradeComparison = (a, b) => {
  const gradeToNum = {
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
  const [currRoster, setCurrRoster] = useState([])

  const addPlayerToRoster = (player) => {
    // if the player is in the list, don't add it again
    if (!currRoster.includes(player)) {
      if (currRoster.length < 5) {
        setCurrRoster(oldRoster => [...oldRoster, player])
        return true

      }
      return false
    } else {
      setCurrRoster(oldRoster => oldRoster.filter(oldPlayer => oldPlayer !== player))
      return true
    }
  }

  const [sortBy, setSortBy] = useState("")
  const [filterByTeam, setFilterByTeam] = useState([])
  const [filterByPosition, setFilterByPosition] = useState([])

  const allStarPlayerNames = Object.keys(allStars)

  const allStarPlayerComponents = () => {
    // sort players by alphabetical order by default
    let players = allStarPlayerNames.sort()

    // filtering

    // reset list if state lists becomes empty
    if (filterByPosition.length === 0 || filterByTeam.length === 0) {
      players = allStarPlayerNames.sort()
    }

    players = players.filter(player =>
      filterByPosition.includes(allStars[player]["Primary Position"]) || filterByPosition.length === 0)

    players = players.filter(player =>
      filterByTeam.includes(allStars[player]["Team"]) || filterByTeam.length === 0)


    console.log({ player: players })
    console.log({ filterByTeam: filterByTeam })

    // sorting
    if (sortBy === "") {

    }
    else if (sortBy === "OVR") {
      players.sort((a, b) => allStars[b]["OVR"] - allStars[a]["OVR"])
    }
    else if (sortBy === "Alphabetical") {
      players.sort()
    }
    else {
      players.sort((a, b) => gradeComparison(allStars[a][sortBy], allStars[b][sortBy]))
    }
    return players.map(
      name => <Player playerData={allStars[name]} name={name} addToRoster={addPlayerToRoster} buttonText={currRoster.includes(name) ? "Remove from Roster" : "Add to Roster"} />
    )
  }

  return (
    <div className="App">

      <div className='header'>
        <img src={logo} className="logo"
          alt='basketball'></img>
        <h1>NBA All-Star Roster Selection</h1>
      </div>

      <div className='grid-container'>
        <Selector roster={currRoster} setSortBy={setSortBy} setFilterByTeam={setFilterByTeam} setFilterByPosition={setFilterByPosition} />

        <div className='player-container'>
          {allStarPlayerComponents()}
        </div>
      </div>
    </div>
  );
}

export default App;


