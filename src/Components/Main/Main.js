import React from 'react'
import cina from './cina.jpeg'

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            textUp: '',
            textBottom: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    onChangeHandler(event){
        let testo = event.target.value;
        let dove = event.target.name
        this.setState({
            [dove]: testo
        })
    }   
    render(){
        return(
            <div className='main'>
                <h1>Genera il tuo CinaMeme</h1>
                <form>
                    <input type='text' name='textUp' value={this.state.textUp} placeHolder='QUESTO SOPRA' onChange={this.onChangeHandler}/>
                    <input type='text' name='textBottom' value={this.state.textBottom} placeHolder='QUESTO SOTTO' onChange={this.onChangeHandler}/>
                    <button>GENERA</button>
                </form>
                <div className='meme'>
                    <img src={cina} height='400px'/>
                    <h2 className="top">{this.state.textUp}</h2>
                    <h2 className="bottom">{this.state.textBottom}</h2>
                </div>
            </div>
        )
    }
}


export default Main