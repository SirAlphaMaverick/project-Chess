import { useState } from "react";


export default function RightNavigation () {

    const [flipChessBoard, setFlipChessBoard] = useState(false);
    function handleBoardFlip() {
    setFlipChessBoard((flip) => !flip);
 
    }

    return (
        <>
        <ol className="rightNavigation">
            <li><button className='flipChessBoard' onClick={handleBoardFlip}>Flip Pieces</button></li>
            <li><button className='flipChessBoard' onClick={() => window.location.reload(false)}>Click to reload!</button></li>
        </ol>
        </>
    )
}
