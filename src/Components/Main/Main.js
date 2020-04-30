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
                <div className='meme' style={{backgroundImage: `url(${cina})`}}>
                    
                    <p className="top">{this.state.textUp}</p>
                    <p className="bottom">{this.state.textBottom}</p>
                </div>
            </div>
        )
    }
}


export default Main