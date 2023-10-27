import { useState } from "react";
import { finalIndex } from "../helpers/GetDataCharacters";

export const UseCounter = ( initialValue = 1 ) => {
    const [counter, setCounter] = useState( initialValue )
    const inc = () => {
        
        setCounter( counter + 1 );
    }
    const dec = () => {
        if( counter == 1 ) return;
        setCounter(counter-1);
    }
    const reset = () => {
        if (finalIndex == counter) return;
        setCounter(0);
    }

  return {
            counter,
            inc,
            dec,
            reset
        } 
}
