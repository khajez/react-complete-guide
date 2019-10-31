import React, {useState} from 'react';
import './App.css';
import Player from './Player/Player';

const App = props => {
  const  [ playerState, setPlayersState ] = useState({
    players: [
      {id: 'asdfg', name: "Patrick Kane", jersey: 88},
      {id: 'pfogkp', name: "Marian Hossa", jersey: 81},
      {id: 'sgfsb', name: "Jonathan Toews", jersey: 19},
      {id: 'oionk',name: "Alex DeBrincat", jersey: 12}
    ],
    otherState: 'some other state',
    showPlayers: false
  });

  const nameChangedHandler = (event, id) => {
    setPlayersState({
      players: [
        {name: event.target.value, jersey: 88},
        {name: "M. Hossa", jersey: 81},
        {name: "J. Toews", jersey: 19},
        {name: "A. DeBrincat", jersey: 12}
      ]
    });   
  };

  const deletePlayerHandler = (index) => {
    const currentPlayers = playerState.players;
    currentPlayers.splice(index,1);
    setPlayersState({players: currentPlayers, showPlayers: true});
  };

  const togglePersonsHandler = () => {
    const currentPlayersState = playerState.players;
    const doesShow = playerState.showPlayers;
    setPlayersState({players: currentPlayersState, showPlayers: !doesShow});
  };

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let players = null;

  if (playerState.showPlayers) {
    players = (
      <div>
        {playerState.players.map( (p, i) => {
            return <Player 
                name={p.name} 
                jersey={p.jersey} 
                key={p.id} 
                click={() => deletePlayerHandler(i)}
                changed={(event) => nameChangedHandler(event, p.id)}/>
        })}
       </div>
    );

    style.backgroundColor = 'red';
  }

  return (
      <div className="App">
        <h1> Go Blackhawks!</h1>
        <p>One Goal!</p>
        <button style={style} onClick={togglePersonsHandler}>Switch Name</button>
        {players}
      </div>
    );
};

export default App;



