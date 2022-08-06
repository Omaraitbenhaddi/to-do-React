import React,{Component} from 'react'
import File from './File'

export default class App extends Component {
    constructor(){
      super()
      this.state = {answer : 'yes'}
    }
  render() {
    return (
      <div>
        <File name="OMAR" name2="AIT BENHADDI"/>
        <File  name="AMIRA" name2="AIT BENHADDI"/>
        <File  name="MOAD" name2="AIT BENHADDI"/>
        <h1>Do you love we ? {this.state.answer}</h1>
      </div>
      
    )
  }
}

//export default App 