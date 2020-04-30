import React from 'react';
import iconaCinaDx from './iconaCina.png'
import iconaCinaSx from './iconaCina2.png'
import iconaClaretto from './iconaClaretto.png'


function Header(props){
    let iconaDx;
    let iconaSx;
    if(props.currentMeme === 'CLARETTO'){
        iconaDx = iconaClaretto;
        iconaSx = iconaClaretto;
    }
    else if(props.currentMeme === 'CINA'){
        iconaDx = iconaCinaDx; 
        iconaSx = iconaCinaSx
    }
    return(
        <header class='titolo'>
            <img src={iconaDx} height='50px' />
            <h1>{props.currentMeme} meme generator</h1>
            <img src={iconaSx} height='50px' />

        </header>
    )
}




export default Header