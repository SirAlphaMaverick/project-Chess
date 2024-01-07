import { useState } from 'react';
import chessBoardArray from "./ChessBoardArray";
import ChessBoardCreator from './ChessBoardCreator';
import possibleMoves from './PossibleMoves';
import handleMove from './HandleMove';
import handleUnselect from './HandleUnselect';

export default function ArrayBasedChessBoard() {

    const [firstClick, setFirstClick] = useState(true);
    const [oldChessPieceLocation, setOldChessPieceLocation] = useState('');
    const [playerTurn, setPlayerTurn] = useState(true);

    function handleClick(chessPiece, chessPieceLocation) {
        console.log('The Object and Location Below was Clicked!');
        console.log(chessPiece, chessPieceLocation);

        //for eleminating black Selection
        if (firstClick && chessBoardArray[chessPieceLocation].value === '') {
            console.log('select a valid Piece');
            return;
        }

        //for White's Turn
        if (firstClick && chessBoardArray[chessPieceLocation].colour == 'white' && playerTurn) {
            console.log('First Click was Executed. Possible Moves Block called!');
            possibleMoves(chessPieceLocation, playerTurn);
            setFirstClick(false);
            setOldChessPieceLocation(chessPieceLocation);
        } else if (!firstClick && chessBoardArray[oldChessPieceLocation].colour == 'white' && playerTurn) {
            if (handleMove(chessPieceLocation, oldChessPieceLocation)) {
                setPlayerTurn(false);
            }
            handleUnselect();
            setFirstClick(true);
            console.log('Hooray I was Executed');
            console.log('old chess Piece Location = ' + oldChessPieceLocation);
            console.log('new chess Piece Location = ' + chessPieceLocation);
            setOldChessPieceLocation('');
        }

        //For Black's Turn
        if (firstClick && chessBoardArray[chessPieceLocation].colour == 'black' && !playerTurn) {
            console.log('First Click was Executed. Possible Moves Block called!');
            const changePlayerTurn = possibleMoves(chessPieceLocation, playerTurn);
            setFirstClick(false);
            setOldChessPieceLocation(chessPieceLocation);
            setFirstClick(changePlayerTurn);
        } else if (!firstClick && chessBoardArray[oldChessPieceLocation].colour == 'black' && !playerTurn) {
            if (handleMove(chessPieceLocation, oldChessPieceLocation)) {
                setPlayerTurn(true);
            }
            handleUnselect();
            setFirstClick(true);
            console.log('Hooray I was Executed');
            console.log('old chess Piece Location = ' + oldChessPieceLocation);
            console.log('new chess Piece Location = ' + chessPieceLocation);
            setOldChessPieceLocation('');
        }

    }




    return (
        <>
            <ol>
                {chessBoardArray.map((item, itemIndex) => <li key={itemIndex} className="array">
                    <ChessBoardCreator buttonClick={handleClick} chessPiece={item} chessPieceLocation={itemIndex} pieceHightlight={firstClick} /></li>)}
            </ol>
        </>
    )



    // return (
    //     <>
    //     <ol>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[0].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[1].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[2].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[3].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[4].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[5].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[6].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[7].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[8].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[9].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[10].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[11].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[12].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[13].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[14].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[15].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[16].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[17].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[18].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[19].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[20].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[21].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[22].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[23].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[24].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[25].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[26].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[27].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[28].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[29].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[30].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[31].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[32].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[33].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[34].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[35].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[36].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[37].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[38].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[39].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[40].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[41].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[42].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[43].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[44].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[45].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[46].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[47].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[48].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[49].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[50].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[51].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[52].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[53].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[54].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[55].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[56].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[57].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[58].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[59].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[60].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[61].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[62].value} alt="" /></button></li>
    //         <li className='array'><button className="chessBoardCreator"><img src={chessBoardArray[63].value} alt="" /></button></li>
    //     </ol>
    //     </>

    // )
}