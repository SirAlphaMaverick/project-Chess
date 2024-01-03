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



let a1 = {location:"a1" ,value: whiteRook, selection:false, locationColour: "black", colour:'white'};
let a2 = {location:"a2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white'};
let a3 = {location:"a3" ,value: "", selection:false, locationColour: "black"};
let a4 = {location:"a4" ,value: "", selection:false, locationColour: "white"};
let a5 = {location:"a5" ,value: "", selection:false, locationColour: "black"};
let a6 = {location:"a6" ,value: "", selection:false, locationColour: "white"};
let a7 = {location:"a7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black'};
let a8 = {location:"a8" ,value: blackRook, selection:false, locationColour: "white", colour:'black'};
let b1 = {location:"b1" ,value: whiteKnight, selection:false, locationColour: "white", colour:'white'};
let b2 = {location:"b2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white'};
let b3 = {location:"b3" ,value: "", selection:false, locationColour: "white"};
let b4 = {location:"b4" ,value: "", selection:false, locationColour: "black"};
let b5 = {location:"b5" ,value: "", selection:false, locationColour: "white"};
let b6 = {location:"b6" ,value: "", selection:false, locationColour: "black"};
let b7 = {location:"b7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black'};
let b8 = {location:"b8" ,value: blackKnight, selection:false, locationColour: "black", colour:'black'};
let c1 = {location:"c1" ,value: whiteBishop, selection:false, locationColour: "black", colour:'white'};
let c2 = {location:"c2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white'};;
let c3 = {location:"c3" ,value: "", selection:false, locationColour: "black"};
let c4 = {location:"c4" ,value: "", selection:false, locationColour: "white"};
let c5 = {location:"c5" ,value: "", selection:false, locationColour: "black"};
let c6 = {location:"c6" ,value: "", selection:false, locationColour: "white"};
let c7 = {location:"c7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black'};
let c8 = {location:"c8" ,value: blackBishop, selection:false, locationColour: "white", colour:'black'};
let d1 = {location:"d1" ,value: whiteQueen , selection:false, locationColour: "white", colour:'white'};
let d2 = {location:"d2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white'};
let d3 = {location:"d3" ,value: "", selection:false, locationColour: "white"};
let d4 = {location:"d4" ,value: "", selection:false, locationColour: "black"};
let d5 = {location:"d5" ,value: "", selection:false, locationColour: "white"};
let d6 = {location:"d6" ,value: "", selection:false, locationColour: "black"};
let d7 = {location:"d7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black'};
let d8 = {location:"d8" ,value: blackQueen, selection:false, locationColour: "black", colour:'black'};
let e1 = {location:"e1" ,value: whiteKing, selection:false, locationColour: "black", colour:'white'};
let e2 = {location:"e2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white'};
let e3 = {location:"e3" ,value: "", selection:false, locationColour: "black"};
let e4 = {location:"e4" ,value: "", selection:false, locationColour: "white"};
let e5 = {location:"e5" ,value: "", selection:false, locationColour: "black"};
let e6 = {location:"e6" ,value: "", selection:false, locationColour: "white"};
let e7 = {location:"e7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black'};
let e8 = {location:"e8" ,value: blackKing, selection:false, locationColour: "white", colour:'black'};
let f1 = {location:"f1" ,value: whiteBishop, selection:false, locationColour: "white", colour:'white'};
let f2 = {location:"f2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white'};
let f3 = {location:"f3" ,value: "", selection:false, locationColour: "white"};
let f4 = {location:"f4" ,value: "", selection:false, locationColour: "black"};
let f5 = {location:"f5" ,value: "", selection:false, locationColour: "white"};
let f6 = {location:"f6" ,value: "", selection:false, locationColour: "black"};
let f7 = {location:"f7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black'};
let f8 = {location:"f8" ,value: blackBishop, selection:false, locationColour: "black", colour:'black'};
let g1 = {location:"g1" ,value: whiteKnight, selection:false, locationColour: "black", colour:'white'};
let g2 = {location:"g2" ,value: whitePawn, selection:false, locationColour: "white", colour:'white'};
let g3 = {location:"g3" ,value: "", selection:false, locationColour: "black"};
let g4 = {location:"g4" ,value: "", selection:false, locationColour: "white"};
let g5 = {location:"g5" ,value: "", selection:false, locationColour: "black"};
let g6 = {location:"g6" ,value: "", selection:false, locationColour: "white"};
let g7 = {location:"g7" ,value: blackPawn, selection:false, locationColour: "black", colour:'black'};
let g8 = {location:"g8" ,value: blackKnight, selection:false, locationColour: "white", colour:'black'};
let h1 = {location:"h1" ,value: whiteRook, selection:false, locationColour: "white", colour:'white'};
let h2 = {location:"h2" ,value: whitePawn, selection:false, locationColour: "black", colour:'white'};
let h3 = {location:"h3" ,value: "", selection:false, locationColour: "white"};
let h4 = {location:"h4" ,value: "", selection:false, locationColour: "black"};
let h5 = {location:"h5" ,value: "", selection:false, locationColour: "white"};
let h6 = {location:"h6" ,value: "", selection:false, locationColour: "black"};
let h7 = {location:"h7" ,value: blackPawn, selection:false, locationColour: "white", colour:'black'};
let h8 = {location:"h8" ,value: blackRook, selection:false, locationColour: "black", colour:'black'};


let chessBoardMatrix = [
    [a8,a7,a6,a5,a4,a3,a2,a1],
    [b8,b7,b6,b5,b4,b3,b2,b1],
    [c8,c7,c6,c5,c4,c3,c2,c1],
    [d8,d7,d6,d5,d4,d3,d2,d1],
    [e8,e7,e6,e5,e4,e3,e2,e1],
    [f8,f7,f6,f5,f4,f3,f2,f1],
    [g8,g7,g6,g5,g4,g3,g2,g1],
    [h8,h7,h6,h5,h4,h3,h2,h1]
];

export default chessBoardMatrix;