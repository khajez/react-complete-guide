import React, {useState} from 'react';
import './App.css';
import Player from './Player/Player';

const App = props => {
  const  [ playerState, setPlayersState ] = useState({
    players: [
      {name: "Patrick Kane", jersey: 88},
      {name: "Marian Hossa", jersey: 81},
      {name: "Jonathan Toews", jersey: 19},
      {name: "Alex DeBrincat", jersey: 12}
    ],
    otherState: 'some other state'
  });

  const switchNameHandler = () => {
    //console.log('button clicked.');
    setPlayersState({
      players: [
        {name: "P. Kane", jersey: 88},
        {name: "M. Hossa", jersey: 81},
        {name: "J. Toews", jersey: 19},
        {name: "A. DeBrincat", jersey: 12}
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPlayersState({
      players: [
        {name: event.target.value, jersey: 88},
        {name: "M. Hossa", jersey: 81},
        {name: "J. Toews", jersey: 19},
        {name: "A. DeBrincat", jersey: 12}
      ]
    });   
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
      <div className="App">
        <h1> Go Blackhawks!</h1>
        <p>One Goal!</p>
        <button style={style} onClick={switchNameHandler}>Switch Name</button>
        <Player
          name={playerState.players[0].name} 
          jersey={playerState.players[0].jersey}
          changed={nameChangedHandler} > Right Winger</Player>

        <Player name={playerState.players[1].name} jersey={playerState.players[1].jersey}/>
        <Player name={playerState.players[2].name} jersey={playerState.players[2].jersey}/>
        <Player name={playerState.players[3].name} jersey={playerState.players[3].jersey}/>
      </div>
    );
};

export default App;



