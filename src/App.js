import React, { Component } from 'react';
import './App.css'

export default class App extends Component {

  // property

    

  
  //constructor
    constructor(){
      super();
      this.state = {
        name:""
      }
    }


    //methods

     handleChange = (e)=>{
      // console.log("ook")
      console.log(e.target.value)
      this.setState ({
        name:e.target.value
      })
    }
  render() {

    return(
          <div className="App">
            <header className="App-header">
              <form>
                <h3>Hello I am {this.state.name}</h3>
                <input type="text" name='name' onChange={this.handleChange} className='name' placeholder='enter value' />
              </form>
            </header>
          </div>
    )
  }
}




