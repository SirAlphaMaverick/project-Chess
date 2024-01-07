import chessBoardArray from "./ChessBoardArray.jsx";
import { useState } from "react";


export default function ChessBoardCreator({ chessPiece, chessPieceLocation, buttonClick, highlight }) {

    const [refreshElement, setRefreshElement] = useState('');
    

    return (
        <>
            <button id={(chessBoardArray[chessPieceLocation]).selection} onClick={() => {buttonClick(chessPiece, chessPieceLocation)}}
                className="chessBoardCreator"><img src={chessPiece.value} alt="" /></button>
        </>
    )
}