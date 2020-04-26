import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

function App() {
  //  const [oldState, setState] = useState({
  //   selectedCharacter: 1,
  //   destroyed: false
  // })

  const [selectedCharacter, setSelectedCharacter] = useState('1')

  const [chosenSide, setChosenSide] = useState('light')

  const [destroyed, setDestroyed] = useState(false)

  const sideHandler = side => {
    // setState({...oldState, side: side})
    setChosenSide(side) //side is string look at button bind
  }

  const charSelectHandler = event => {
    const charId = event.target.value;
    // setState({...oldState, selectedCharacter: charId })
    setSelectedCharacter(charId)
  }

  const destructionHandler = () => {
    // setState({...oldState, desroyed: true})
    setDestroyed(true)
  }


  let content = (
      <CharPicker 
        side={ chosenSide }
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(null, 'light')}>Light Side</button>
      <button onClick={sideHandler.bind(null, 'dark')}>Dark Side</button>
      {oldState.side == 'dark' && (
        <button onClick={destructionHandler}>Destroy !!</button>
      )}
    </React.Fragment>
  )

  return content
}

export default App;
