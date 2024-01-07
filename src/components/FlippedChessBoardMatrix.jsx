import whiteRook from '../assets/whiteRook.png';
import blackRook from '../assets/blackRook.png';
import whiteKnight from '../assets/whiteKnight.png';
import blackKnight from '../assets/blackKnight.png';
import whiteBishop from '../assets/whiteBishop.png';
import blackBishop from '../assets/blackBishop.png';
import whiteQueen from '../assets/whiteQueen.png';
import blackQueen from '../assets/blackQueen.png';
import whiteKing from '../assets/whiteKing.png';
import blackKing from '../assets/blackKing.png';
import whitePawn from '../assets/whitePawn.png';
import blackPawn from '../assets/blackPawn.png';



let a1 = {location:"a1" ,value: whiteRook, selection:false, locationColour: "black", colour:'white', type: "rook"};
let a2 = {location:"a2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white', type: "pawn"};
let a3 = {location:"a3" ,value: "", selection:false, locationColour: "black"};
let a4 = {location:"a4" ,value: "", selection:false, locationColour: "white"};
let a5 = {location:"a5" ,value: "", selection:false, locationColour: "black"};
let a6 = {location:"a6" ,value: "", selection:false, locationColour: "white"};
let a7 = {location:"a7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black', type: "pawn"};
let a8 = {location:"a8" ,value: blackRook, selection:false, locationColour: "white", colour:'black', type: "rook"};
let b1 = {location:"b1" ,value: whiteKnight, selection:false, locationColour: "white", colour:'white', type: "knight"};
let b2 = {location:"b2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white', type: "pawn"};
let b3 = {location:"b3" ,value: "", selection:false, locationColour: "white"};
let b4 = {location:"b4" ,value: "", selection:false, locationColour: "black"};
let b5 = {location:"b5" ,value: "", selection:false, locationColour: "white"};
let b6 = {location:"b6" ,value: "", selection:false, locationColour: "black"};
let b7 = {location:"b7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black', type: "pawn"};
let b8 = {location:"b8" ,value: blackKnight, selection:false, locationColour: "black", colour:'black', type: "knight"};
let c1 = {location:"c1" ,value: whiteBishop, selection:false, locationColour: "black", colour:'white', type: "bishop"};
let c2 = {location:"c2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white', type: "pawn"};;
let c3 = {location:"c3" ,value: "", selection:false, locationColour: "black"};
let c4 = {location:"c4" ,value: "", selection:false, locationColour: "white"};
let c5 = {location:"c5" ,value: "", selection:false, locationColour: "black"};
let c6 = {location:"c6" ,value: "", selection:false, locationColour: "white"};
let c7 = {location:"c7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black', type: "pawn"};
let c8 = {location:"c8" ,value: blackBishop, selection:false, locationColour: "white", colour:'black', type: "bishop"};
let d1 = {location:"d1" ,value: whiteQueen , selection:false, locationColour: "white", colour:'white', type: "queen"};
let d2 = {location:"d2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white', type: "pawn"};
let d3 = {location:"d3" ,value: "", selection:false, locationColour: "white"};
let d4 = {location:"d4" ,value: "", selection:false, locationColour: "black"};
let d5 = {location:"d5" ,value: "", selection:false, locationColour: "white"};
let d6 = {location:"d6" ,value: "", selection:false, locationColour: "black"};
let d7 = {location:"d7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black', type: "pawn"};
let d8 = {location:"d8" ,value: blackQueen, selection:false, locationColour: "black", colour:'black', type: "queen"};
let e1 = {location:"e1" ,value: whiteKing, selection:false, locationColour: "black", colour:'white', type: "king"};
let e2 = {location:"e2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white', type: "pawn"};
let e3 = {location:"e3" ,value: "", selection:false, locationColour: "black"};
let e4 = {location:"e4" ,value: "", selection:false, locationColour: "white"};
let e5 = {location:"e5" ,value: "", selection:false, locationColour: "black"};
let e6 = {location:"e6" ,value: "", selection:false, locationColour: "white"};
let e7 = {location:"e7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black', type: "pawn"};
let e8 = {location:"e8" ,value: blackKing, selection:false, locationColour: "white", colour:'black', type: "king"};
let f1 = {location:"f1" ,value: whiteBishop, selection:false, locationColour: "white", colour:'white', type: "bishop"};
let f2 = {location:"f2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white', type: "pawn"};
let f3 = {location:"f3" ,value: "", selection:false, locationColour: "white"};
let f4 = {location:"f4" ,value: "", selection:false, locationColour: "black"};
let f5 = {location:"f5" ,value: "", selection:false, locationColour: "white"};
let f6 = {location:"f6" ,value: "", selection:false, locationColour: "black"};
let f7 = {location:"f7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black', type: "pawn"};
let f8 = {location:"f8" ,value: blackBishop, selection:false, locationColour: "black", colour:'black', type: "bishop"};
let g1 = {location:"g1" ,value: whiteKnight, selection:false, locationColour: "black", colour:'white', type: "knight"};
let g2 = {location:"g2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white', type: "pawn"};
let g3 = {location:"g3" ,value: "", selection:false, locationColour: "black"};
let g4 = {location:"g4" ,value: "", selection:false, locationColour: "white"};
let g5 = {location:"g5" ,value: "", selection:false, locationColour: "black"};
let g6 = {location:"g6" ,value: "", selection:false, locationColour: "white"};
let g7 = {location:"g7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black', type: "pawn"};
let g8 = {location:"g8" ,value: blackKnight, selection:false, locationColour: "white", colour:'black', type: "knight"};
let h1 = {location:"h1" ,value: whiteRook, selection:false, locationColour: "white", colour:'white', type: "rook"};
let h2 = {location:"h2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white', type: "pawn"};
let h3 = {location:"h3" ,value: "", selection:false, locationColour: "white"};
let h4 = {location:"h4" ,value: "", selection:false, locationColour: "black"};
let h5 = {location:"h5" ,value: "", selection:false, locationColour: "white"};
let h6 = {location:"h6" ,value: "", selection:false, locationColour: "black"};
let h7 = {location:"h7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black', type: "pawn"};
let h8 = {location:"h8" ,value: blackRook, selection:false, locationColour: "black", colour:'black', type: "rook"};


let flippedChessBoardMatrix = [
    [h1,h2,h3,h4,h5,h6,h7,h8],
    [g1,g2,g3,g4,g5,g6,g7,g8],
    [f1,f2,f3,f4,f5,f6,f7,f8],
    [e1,e2,e3,e4,e5,e6,e7,e8],
    [d1,d2,d3,d4,d5,d6,d7,d8],
    [c1,c2,c3,c4,c5,c6,c7,c8],
    [b1,b2,b3,b4,b5,b6,b7,b8],
    [a1,a2,a3,a4,a5,a6,a7,a8]
];

export default flippedChessBoardMatrix;