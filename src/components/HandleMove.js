import chessBoardArray from "./ChessBoardArray";

export default function handleMove (newLocation, oldLocation) {

    if ((chessBoardArray[newLocation]).selection === 'possibleMove' && newLocation!=oldLocation) {
        (chessBoardArray[newLocation]) = (chessBoardArray[oldLocation]);
        chessBoardArray[oldLocation] = {location:"" ,value: "", selection:'notSelected', locationColour: "", colour:'', type:'', firstMove:false};
        (chessBoardArray[newLocation]).firstMove = false;
        return(true);
    } else {
        console.log('Move is Not possible!');
        return(false);
    }

}