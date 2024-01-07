import chessBoardArray from "./ChessBoardArray";

export default function handleUnselect () {
    chessBoardArray.map((item, itemIndex) => chessBoardArray[itemIndex].selection = 'notSelected');
}