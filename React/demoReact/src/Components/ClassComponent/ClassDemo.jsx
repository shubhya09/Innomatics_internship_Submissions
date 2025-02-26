import React, { Component } from 'react'

export default class ClassDemo extends Component {

    constructor() {
        super();
        this.state = {
            count : 0,
            name: 'Peter Parker'
    }
}

   counter(){
    console.log('Counter function called');
    this.setState({count: this.state.count + 1, name: 'Spiderman'})
   }

  render() {
    return (
      <>
        <h1>Class Component Demo</h1>
        <p>{this.state.count}</p>
        <button onClick={()=>this.counter()}>Count</button>
        <p>{this.state.name}</p>
      </>
    )
  }
}
