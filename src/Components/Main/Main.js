import React from 'react'
import cina from './cina.jpeg'
import claretto from './claretto.jpg'



class Main extends React.Component{
    constructor(props){
        super(props)
        this.handleChoose = this.handleChoose.bind(this)
    }
    handleChoose(event){
        this.props.imgChooseHandle(event.target.value)
    }
    render(){
    let styleUp = {}
    if (this.props.textUp.length > 11)
        styleUp = {fontSize: '20px'}
    let styleDown = {}
    if (this.props.textBottom.length > 11){
        styleDown = {fontSize: '20px'}
    }
    return(
        <div className='main'>
            <div className='generatore'>
                <h1>GENERA IL TUO {this.props.currentMeme}MEME</h1>
                <form>
                    <input type='text' name='textUp' value={this.props.textUp} placeHolder='QUESTO SOPRA' onChange={this.props.onChangeHandler}/>
                    <input type='text' name='textBottom' value={this.props.textBottom} placeHolder='QUESTO SOTTO' onChange={this.props.onChangeHandler}/>
                    <span onClick={this.props.reset}>🔄</span>               
                </form>
            </div>
            <div class='memeconswitcher'>
                <div className='meme' style={{backgroundImage: `url(${this.props.currentImg})`}}>    
                    <p className="top" style={styleUp}>{this.props.textUp}</p>
                    <p className="bottom" style={styleDown}>{this.props.textBottom}</p>
                    
                </div>
                    <span>choose your meme</span>
                    <select name='currentImg' onChange={this.handleChoose}>
                        <option value='cina'>Cina</option>
                        <option value='claretto'>Claretto</option>
                    </select>
            </div>
        </div>
        )
    }
}



export default Main