import React from 'react';
import logo from './icona.png'
import cina2 from './cina2.png'

function Header(){
    return(
        <header class='titolo'>
            <img src={logo} height='50px' />
            <h1>Cina meme generator</h1>
            <img src={cina2} height='50px' />

        </header>
    )
}




export default Header