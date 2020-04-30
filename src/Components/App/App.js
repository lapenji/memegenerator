import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main'
import cina from './cina.jpeg'
import claretto from './claretto.jpg'

import './App.css';
class App extends React.Component{
  constructor(){
    super()
    this.state={
        textUp: '',
        textBottom: '',
        currentImg: cina,
        currentMeme: 'CINA'
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.imgChooseHandle = this.imgChooseHandle.bind(this)
  }
  onChangeHandler(event){
    let testo = event.target.value;
    let dove = event.target.name
    this.setState({
        [dove]: testo
    })
  }
  imgChooseHandle(item){
    let img = item;
    console.log(img)
    switch(img){
        case 'claretto':
            this.setState({currentImg: claretto,
            currentMeme: 'CLARETTO',
            textUp: '',
            textBottom: ''
          })
            
            break;
        case 'cina':
            this.setState({currentImg: cina,
              currentMeme: 'CINA',
              textUp: '',
              textBottom: ''
            })
            break;
        default:
          this.setState({currentImg: cina,
            currentMeme: 'CINA',
            textUp: '',
            textBottom: ''
          })
          break;
            
    
    }
  }
  render(){
    return(
        <div className="App">
          <div className='container'>
            <Header currentMeme={this.state.currentMeme}/>
            <Main  currentMeme={this.state.currentMeme} currentImg={this.state.currentImg} textUp={this.state.textUp} textBottom={this.state.textBottom}
            onChangeHandler={this.onChangeHandler} imgChooseHandle={this.imgChooseHandle}/>
          </div>
        </div>
      );
  }    

}
export default App;
