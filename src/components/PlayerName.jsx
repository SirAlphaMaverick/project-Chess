import { useState } from "react";

export default function PlayerName ({playerName}) {

    const [defaultPlayerName, setDefaultPlayerName] = useState(playerName);
    const [buttonClicked, setButtonClicked] = useState(false);

    function handlePlayerNameChange(event) {
        setDefaultPlayerName(event.target.value);
    }

    function handleButtonClick () {
        setButtonClicked((value) => !value);
    }

    return (
        <div className="playerNameContainer">
        <div>{buttonClicked ? <input className="playerEdit"type="text" required placeholder={defaultPlayerName} onChange={handlePlayerNameChange}/> : <span>{defaultPlayerName}</span>}</div>
        <button className="playerEdit" onClick={handleButtonClick}>{buttonClicked ? 'Save' : 'Edit' }</button>
        </div>
       
    )
}