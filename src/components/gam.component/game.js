import React, { useState } from 'react';
import './game.css';
// import { remove } from 'hookrouter';
function Game() {
    const [count, setCount] = useState(1);
    const [stack, setStack] = useState([]);
    const [winner, setwinner] = useState(false);
    const [array, setarray] = useState({})
    function entry(event) {
        let id = event.target.id
        if (count % 2 === 0) {
            document.getElementById(id).value = "O";
            document.getElementById(id).disabled = true;
            setCount(count + 1)
            var a = stack
            a.push(id)
            setStack(a)
            var ab= array
            ab[id] ="O"
            setarray(ab)

        }
        else {
            document.getElementById(id).value = "X";
            document.getElementById(id).disabled = true;
            setCount(count + 1)
             a = stack
            a.push(id)
            setStack(a)
             ab = array
            ab[id] ="X"
            setarray(ab)

        }

        win()
        console.log(stack)

    }
    function win() {
        console.log(array)
    if((array[1]&&array[2]&&array[3])&&(array[1]===array[2]&&array[2]===array[3])){
        setwinner(true)
    }
    else if((array[4]&&array[6]&&array[5])&&(array[4]===array[5]&&array[5]===array[6])){
        setwinner(true)
    }
    else if((array[7]&&array[8]&&array[9])&&(array[7]===array[8]&&array[8]===array[9])){
        setwinner(true)
    }
    else if((array[1]&&array[4]&&array[7])&&(array[1]===array[4]&&array[4]===array[7])){
        setwinner(true)
    }
    else if((array[2]&&array[8]&&array[5])&&(array[2]===array[5]&&array[5]===array[8])){
        setwinner(true)
    }
    else if((array[3]&&array[6]&&array[9])&&(array[3]===array[6]&&array[6]===array[9])){
        setwinner(true)
    }
    else if((array[1]&&array[5]&&array[9])&&(array[1]===array[5]&&array[5]===array[9])){
        setwinner(true)
    }
    else if((array[3]&&array[5]&&array[7])&&(array[7]===array[5]&&array[5]===array[3])){
        setwinner(true)
    }
    
    }
   function remove(){
     var b=stack
     const id=b.slice(-1)
     b.pop()
     setStack(b)
     document.getElementById(id).value = "";
     setCount(count-1)
     document.getElementById(id).disabled = false;

    }

    if(!winner){
        if(count===10){
            return(
                <div>
                <h1>Gameover</h1>
                <h2>No winner</h2>
                </div>
            )
        }
            else{

            
    return (
        <div>
            <h1>Tic Tak Toe</h1>
            <div>
                <table>

                    <tbody>
                    <tr>
                        <td><input type="button" id="1" onClick={entry} /></td>
                        <td><input type="button" id="2" onClick={entry} /></td>
                        <td><input type="button" id="3" onClick={entry} /></td>
                    </tr>
                    <tr>
                        <td ><input  type="button" id="4" onClick={entry} /></td>
                        <td ><input type="button" id="5" onClick={entry} /></td>
                        <td ><input type="button" id="6" onClick={entry} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" id="7" onClick={entry} /></td>
                        <td ><input type="button" id="8" onClick={entry} /></td>
                        <td><input type="button" id="9" onClick={entry} /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div id="player">
              {count%2!==0?
              <h3>Player 1 turn</h3>              :
                <h3>Player 2 turn</h3>}
                <button style={{marginLeft:'35%'}} disabled={count===1 }onClick={remove} >Cancel last Move</button>
            </div>
        </div>
    )}}
    else{
        if(count%2!==0){
        return(
        <h1>Player 2 wins</h1>
        )}
    else{
        return(
            <h1>Player 1 wins</h1>
            )
    }}

}
export default Game;