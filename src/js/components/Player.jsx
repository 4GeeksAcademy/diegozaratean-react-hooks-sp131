import React, { useState, version} from "react";

const Player = ()=>{
    const [prevBackground, setPrevBackground] = useState('grey')
    const [playBackground, setPlayBackground] = useState('grey')
    const [stopBackground, setStopBackground] = useState('grey')
    const [nextBackground, setNextBackground] = useState('grey')

    function prev(){        
        if( prevBackground == 'grey'){
            setPrevBackground("green")
            setPlayBackground("grey")
            setStopBackground("grey")
            setNextBackground("grey")
        }else{
            setPrevBackground("grey")
        }
    }

     function play(){        
        if( playBackground == 'grey'){
            setPlayBackground("green")
            setPrevBackground("grey")
            setStopBackground("grey")
            setNextBackground("grey")
        }else{
            setPlayBackground("grey")
        }
    }

    
    function stop(){        
        if( stopBackground == 'grey'){
            setStopBackground("green")
            setPlayBackground("grey")
            setPrevBackground("grey")
            setNextBackground("grey")
        }else{
            setStopBackground("grey")
        }
    }
    function next(){        
        if( nextBackground == 'grey'){
            setNextBackground("green")
            setPlayBackground("grey")
            setStopBackground("grey")
           setPrevBackground("grey")
        }else{
            setNextBackground("grey")
        }
    }
    return(
        <>
            <h1>Mi super reproductor vintage</h1>
            <button onClick={prev} style={{backgroundColor: prevBackground}}>prev</button>
            <button onClick={play}  style={{backgroundColor: playBackground}}>play</button>
            <button onClick={stop}  style={{backgroundColor: stopBackground}}>stop</button>
            <button onClick={next}  style={{backgroundColor: nextBackground}}>next</button>
        </>
    )
}

export default Player