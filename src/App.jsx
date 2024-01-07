import { useState } from 'react';
import './App.css'
import ChessBoard from './components/ChessBoard'
import LeftNavigation from './components/LeftNavigation';
import PlayerName from './components/PlayerName';
import FlippedChessBoard from './components/FlippedChessBoard';
import ArrayBasedChessBoard from './components/ArrayBasedChessBoard';

function App() {

  const [flipChessBoard, setFlipChessBoard] = useState(false);
  function handleBoardFlip() {
    setFlipChessBoard((flip) => !flip)
  }

  return (
    <>
      <h1>Welcome to the Local Chess Game!!</h1>
      <PlayerName playerName="Opponent" />

      <div className="centerPiece">
        <div className="leftNavigation"><LeftNavigation /></div>
        <div className='chessBoardContainer'>
          {flipChessBoard ? <FlippedChessBoard /> : <ChessBoard />}

        </div>
        <div className="rightNavigation">
          <ol className='rightNavigation'>
            <li><button className='rightNavigation' onClick={handleBoardFlip}>Flip Pieces</button></li>
            <li><button className='rightNavigation' onClick={() => window.location.reload(false)}>Click to reload!</button></li>
          </ol>
        </div>
      </div>

      <PlayerName playerName='Player' />
      <div className="centerPiece">
        <div className="chessBoardContainer">
          <ArrayBasedChessBoard />
        </div>
      </div>



    </>
  )
}

export default App
