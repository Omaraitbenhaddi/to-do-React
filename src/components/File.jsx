import React, { Component } from 'react'

export class File extends Component {
    method(name2){
        return <span>{name2}</span>
    }
  render() {
   // const name = "OMAR"
    //const name2 = this.method("AIT BENHADDI")
    return (
      <div>{this.props.name} {this.props.name2}</div>
    )
  }
}

export default File