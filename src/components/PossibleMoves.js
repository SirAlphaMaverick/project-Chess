import chessBoardArray from "./ChessBoardArray";

export default function possibleMoves(locationIndex) {

    //Possible Pawn Moves - Both Black and White Side, Does not Contain "en passant"
    if ((chessBoardArray[locationIndex]).type === 'pawn' && chessBoardArray[locationIndex].colour === 'white') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        try {
            if (chessBoardArray[locationIndex - 9].value != '' && chessBoardArray[locationIndex - 9].colour==='black'){
            (chessBoardArray[locationIndex - 9]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try { 
            if (chessBoardArray[locationIndex + 7].value != '' && chessBoardArray[locationIndex + 7].colour==='black'){
                (chessBoardArray[locationIndex + 7]).selection = 'possibleMove';
                } else console.log('Cannot Capture frontright'); 
        } catch { console.log('Nothing on the frontright'); }
        try { 
            if (chessBoardArray[locationIndex -1 ].value != ''){
                console.log('Cannot Move front');
            } else (chessBoardArray[locationIndex - 1]).selection = 'possibleMove';
        } catch { console.log('Nothing on the front'); }
        try { 
            if (chessBoardArray[locationIndex].firstMove && chessBoardArray[locationIndex -2 ].value == '' ){
                (chessBoardArray[locationIndex - 2]).selection = 'possibleMove';
                console.log('first Move ' + chessBoardArray[locationIndex].firstMove);
            } else console.log('Cannot move 2 Spaces in the Front');
        } catch { console.log('Nothing 2 spaces in the front'); }

    }
    if ((chessBoardArray[locationIndex]).type === 'pawn' && chessBoardArray[locationIndex].colour === 'black') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        try {
            if (chessBoardArray[locationIndex + 9].value != '' && chessBoardArray[locationIndex + 9].colour==='white'){
            (chessBoardArray[locationIndex + 9]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try { 
            if (chessBoardArray[locationIndex - 7].value != '' && chessBoardArray[locationIndex - 7].colour==='white'){
                (chessBoardArray[locationIndex - 7]).selection = 'possibleMove';
                } else console.log('Cannot Capture frontright'); 
        } catch { console.log('Nothing on the frontright'); }
        try { 
            if (chessBoardArray[locationIndex +1 ].value != ''){
                console.log('Cannot Capture frontright');
            } else (chessBoardArray[locationIndex + 1]).selection = 'possibleMove';
        } catch { console.log('Nothing on the front'); }
        try { 
            if (chessBoardArray[locationIndex].firstMove==true && chessBoardArray[locationIndex + 2 ].value == '' ){
                (chessBoardArray[locationIndex + 2]).selection = 'possibleMove';
                console.log('first Move ' + chessBoardArray[locationIndex].firstMove);
            } else console.log('Cannot move 2 Spaces in the Front');
        } catch { console.log('Nothing 2 spaces in the front'); }

    }


    //Possible Knight Moves, Noth Black and White.

    if ((chessBoardArray[locationIndex]).type === 'knight' && chessBoardArray[locationIndex].colour === 'white') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        try {
            if ((locationIndex)%8!=0 && (locationIndex-1)%8!=0 && chessBoardArray[locationIndex - 10].colour != 'white'){
            (chessBoardArray[locationIndex - 10]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && (locationIndex+2)%8!=0 && chessBoardArray[locationIndex + 10].colour != 'white'){
            (chessBoardArray[locationIndex + 10]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && (locationIndex+2)%8!=0 && chessBoardArray[locationIndex - 6].colour != 'white'){
            (chessBoardArray[locationIndex - 6]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex)%8!=0 && (locationIndex-1)%8!=0 && chessBoardArray[locationIndex + 6].colour != 'white'){
            (chessBoardArray[locationIndex + 6]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex)%8!=0 && chessBoardArray[locationIndex - 17].colour != 'white'){
            (chessBoardArray[locationIndex - 17]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && chessBoardArray[locationIndex + 17].colour != 'white'){
            (chessBoardArray[locationIndex + 17]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && chessBoardArray[locationIndex - 15].colour != 'white'){
            (chessBoardArray[locationIndex - 15]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex)%8!=0 && chessBoardArray[locationIndex + 15].colour != 'white'){
            (chessBoardArray[locationIndex + 15]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }

    }
    if ((chessBoardArray[locationIndex]).type === 'knight' && chessBoardArray[locationIndex].colour === 'black') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        try {
            if ((locationIndex)%8!=0 && (locationIndex-1)%8!=0 && chessBoardArray[locationIndex - 10].colour != 'black'){
            (chessBoardArray[locationIndex - 10]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && (locationIndex+2)%8!=0 && chessBoardArray[locationIndex + 10].colour != 'black'){
            (chessBoardArray[locationIndex + 10]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && (locationIndex+2)%8!=0 && chessBoardArray[locationIndex - 6].colour != 'black'){
            (chessBoardArray[locationIndex - 6]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex)%8!=0 && (locationIndex-1)%8!=0 && chessBoardArray[locationIndex + 6].colour != 'black'){
            (chessBoardArray[locationIndex + 6]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex)%8!=0 && chessBoardArray[locationIndex - 17].colour != 'black'){
            (chessBoardArray[locationIndex - 17]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && chessBoardArray[locationIndex + 17].colour != 'black'){
            (chessBoardArray[locationIndex + 17]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex+1)%8!=0 && chessBoardArray[locationIndex - 15].colour != 'black'){
            (chessBoardArray[locationIndex - 15]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }
        try {
            if ((locationIndex)%8!=0 && chessBoardArray[locationIndex + 15].colour != 'black'){
            (chessBoardArray[locationIndex + 15]).selection = 'possibleMove';
            } else console.log('Cannot Capture fontleft');
        } catch { console.log('Nothing on the fontleft'); }

    }



    //Possible Bishop Moves, Both Black and White
    if ((chessBoardArray[locationIndex]).type === 'bishop' && chessBoardArray[locationIndex].colour === 'white') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        for (let i=locationIndex+7; i<chessBoardArray.length; i=i+7){
            if((locationIndex)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);  
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }

                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
        for (let j=locationIndex-7; j<chessBoardArray.length && j>-1; j=j-7){
            try {
                if((locationIndex+1)%8!=0 && chessBoardArray[j].colour != 'white'){
                    if (chessBoardArray[j].colour != 'black') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[i].selection = 'possibleMove';
                            break;
                        }
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let j=locationIndex-9; j<chessBoardArray.length && j>-1; j=j-9){
            try {
                if((locationIndex)%8!=0 && chessBoardArray[j].colour != 'white'){
                    if (chessBoardArray[j].colour != 'black') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[i].selection = 'possibleMove';
                            break;
                        }
                        
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let i=locationIndex+9; i<chessBoardArray.length; i=i+9){
            if((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour); 
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    } 
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
    }


    if ((chessBoardArray[locationIndex]).type === 'bishop' && chessBoardArray[locationIndex].colour === 'black') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        for (let i=locationIndex+7; i<chessBoardArray.length; i=i+7){
            if((locationIndex)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);  
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }

                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
        for (let j=locationIndex-7; j<chessBoardArray.length && j>-1; j=j-7){
            try {
                if((locationIndex+1)%8!=0 && chessBoardArray[j].colour != 'black'){
                    if (chessBoardArray[j].colour != 'white') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        }
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let j=locationIndex-9; j<chessBoardArray.length && j>-1; j=j-9){
            try {
                if((locationIndex)%8!=0 && chessBoardArray[j].colour != 'black'){
                    if (chessBoardArray[j].colour != 'white') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        }
                        
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let i=locationIndex+9; i<chessBoardArray.length; i=i+9){
            if((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour); 
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    } 
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
    }


    //possible Moves for Rook, Both Black and White;
    if ((chessBoardArray[locationIndex]).type === 'rook' && chessBoardArray[locationIndex].colour === 'white') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';

        for (let i=locationIndex-1; i>=0 && i<chessBoardArray.length; i=i-1) {
            if ((locationIndex)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex+1; i<chessBoardArray.length; i=i+1) {
            if ((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    if ((i+1)%8===0){
                        break;
                    }
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex-8; i>=0 && i<chessBoardArray.length; i=i-8) {
            try {
                if (chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        } catch {console.log('Cannot Move Left');} 
        }
        for (let i=locationIndex+8; i<chessBoardArray.length; i=i+8) {
            if (chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
    }

    if ((chessBoardArray[locationIndex]).type === 'rook' && chessBoardArray[locationIndex].colour === 'black') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';

        for (let i=locationIndex-1; i>=0 && i<chessBoardArray.length; i=i-1) {
            if ((locationIndex)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex+1; i<chessBoardArray.length; i=i+1) {
            if ((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    if ((i+1)%8===0){
                        break;
                    }
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex-8; i>=0 && i<chessBoardArray.length; i=i-8) {
            try {
                if (chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        } catch {console.log('Cannot Move Left');} 
        }
        for (let i=locationIndex+8; i<chessBoardArray.length; i=i+8) {
            if (chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
    }



    //all possible Moves for Queen, this is gonna be a piece of cake, just add both Bishop and Rook.
    if ((chessBoardArray[locationIndex]).type === 'queen' && chessBoardArray[locationIndex].colour === 'white') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';

        //Bishop Moves added Here
        for (let i=locationIndex+7; i<chessBoardArray.length; i=i+7){
            if((locationIndex)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);  
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }

                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
        for (let j=locationIndex-7; j<chessBoardArray.length && j>-1; j=j-7){
            try {
                if((locationIndex+1)%8!=0 && chessBoardArray[j].colour != 'white'){
                    if (chessBoardArray[j].colour != 'black') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[i].selection = 'possibleMove';
                            break;
                        }
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let j=locationIndex-9; j<chessBoardArray.length && j>-1; j=j-9){
            try {
                if((locationIndex)%8!=0 && chessBoardArray[j].colour != 'white'){
                    if (chessBoardArray[j].colour != 'black') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[i].selection = 'possibleMove';
                            break;
                        }
                        
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let i=locationIndex+9; i<chessBoardArray.length; i=i+9){
            if((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour); 
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    } 
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }

        //rook Moves Added here
        for (let i=locationIndex-1; i>=0 && i<chessBoardArray.length; i=i-1) {
            if ((locationIndex)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex+1; i<chessBoardArray.length; i=i+1) {
            if ((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    if ((i+1)%8===0){
                        break;
                    }
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex-8; i>=0 && i<chessBoardArray.length; i=i-8) {
            try {
                if (chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        } catch {console.log('Cannot Move Left');} 
        }
        for (let i=locationIndex+8; i<chessBoardArray.length; i=i+8) {
            if (chessBoardArray[i].colour != 'white'){
                if (chessBoardArray[i].colour != 'black') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
    }

    if ((chessBoardArray[locationIndex]).type === 'queen' && chessBoardArray[locationIndex].colour === 'black') {
        console.log('Possible Moves Block was executed. Piece  Highlighted');
        console.log(chessBoardArray[locationIndex]);
        (chessBoardArray[locationIndex]).selection = 'selected';
        //Bishop Moves Goes here!
        for (let i=locationIndex+7; i<chessBoardArray.length; i=i+7){
            if((locationIndex)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);  
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }

                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
        for (let j=locationIndex-7; j<chessBoardArray.length && j>-1; j=j-7){
            try {
                if((locationIndex+1)%8!=0 && chessBoardArray[j].colour != 'black'){
                    if (chessBoardArray[j].colour != 'white') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        }
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let j=locationIndex-9; j<chessBoardArray.length && j>-1; j=j-9){
            try {
                if((locationIndex)%8!=0 && chessBoardArray[j].colour != 'black'){
                    if (chessBoardArray[j].colour != 'white') {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);  
                        if ((j+1)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        } 
                        if ((j)%8===0){
                            chessBoardArray[j].selection = 'possibleMove';
                            break;
                        }
                        
                    } else {
                        chessBoardArray[j].selection = 'possibleMove';
                        console.log(chessBoardArray[j].colour);
                        break;
                    }
                } else break;
        }
        catch {console.log('error reading things ahead');}
        }
        for (let i=locationIndex+9; i<chessBoardArray.length; i=i+9){
            if((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour); 
                    if ((i+1)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    } 
                    if ((i)%8===0){
                        chessBoardArray[i].selection = 'possibleMove';
                        break;
                    }
                } else {
                    chessBoardArray[i].selection = 'possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        }
        //rook moves goes here
        for (let i=locationIndex-1; i>=0 && i<chessBoardArray.length; i=i-1) {
            if ((locationIndex)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex+1; i<chessBoardArray.length; i=i+1) {
            if ((locationIndex+1)%8!=0 && chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    if ((i+1)%8===0){
                        break;
                    }
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
        for (let i=locationIndex-8; i>=0 && i<chessBoardArray.length; i=i-8) {
            try {
                if (chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;
        } catch {console.log('Cannot Move Left');} 
        }
        for (let i=locationIndex+8; i<chessBoardArray.length; i=i+8) {
            if (chessBoardArray[i].colour != 'black'){
                if (chessBoardArray[i].colour != 'white') {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                } else {
                    chessBoardArray[i].selection='possibleMove';
                    console.log(chessBoardArray[i].colour);
                    break;
                }
            } else break;   
        }
    }
}