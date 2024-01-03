import { useState } from 'react';
import chessBoardMatrix from './ChessBoardMatrix.jsx';

export default function ChessBoard () {

    const [colouredPiece, setColouredPiece] = useState('white');
    const [pieceLocation, setPieceLocation] = useState('');
    const [firstClick, setFirstClick] = useState(true);
    const [piece, setPiece] = useState('');
    const [blackCapturedPieces, setBlackCapturedPieces] = useState('');
    const [whiteCapturedPieces, setWhitecapturedPieces] = useState('');

    function handleClick (item, row, column) {
        
        if (firstClick && item.rowItem.value === '')
        {
            return
        }
        console.log("return no work");
        if (firstClick && item.rowItem.value != '' ) {
            setFirstClick(false);
            setPiece(item.rowItem);
            setPieceLocation([[row.rowIndex],[column.columnIndex]]);
            setColouredPiece(item.rowItem.colour);
            console.log(piece);
        }
        else {
            if (colouredPiece != item.rowItem.colour){
                console.log(piece);
                console.log('piece location - ' + pieceLocation);
                if(chessBoardMatrix[column.columnIndex][row.rowIndex].colour === 'black') {
                    setBlackCapturedPieces(piece.value);
                }
                if (chessBoardMatrix[column.columnIndex][row.rowIndex].colour === 'white') {
                    setWhitecapturedPieces(piece.value);
                }
                chessBoardMatrix[pieceLocation[1]][pieceLocation[0]]='';
                chessBoardMatrix[column.columnIndex][row.rowIndex] = piece;
                
                setFirstClick(true);
                setPiece('');
                setPieceLocation('');
                
            }
            console.log('captured Pieces are' + blackCapturedPieces + ' and' + whiteCapturedPieces);
            
        }

    }


    return(
        <>
        <div className="piecesCaptured"></div>
        <ol>
           <li> 
            {chessBoardMatrix.map((columnItem, columnIndex) => <span key={columnIndex}>{columnItem.map((rowItem, rowIndex) => 
                <button onClick={() => handleClick({rowItem},{rowIndex},{columnIndex})} key={rowIndex}  ><img src={rowItem.value} alt="" /></button>)}</span>)}
            </li>
        </ol>
        <div className="piecesCaptured"></div>
        
        </>
    );
}
