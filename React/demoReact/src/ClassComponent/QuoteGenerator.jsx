import React, { Component } from 'react'

export default class QuoteGenerator extends Component {

    constructor() {
        super();
        this.state = {
            quote : 'Click the button to get inspired',
            image: 'https://source.unsplash.com/random/800x600'
        }
    }

    motivationalQuotes = [
        'The only way to achieve the impossible is to believe it is possible.', 
        'The only limit to our realization of tomorrow will be our doubts of today.',
        'The only way to do great work is to love what you do.',    
        'The only thing that will stop you from fulfilling your dreams is you.',
        'The only thing we have to fear is fear itself.',
        'The only person you are destined to become is the person you decide to be.',
    ]

  render() {
    return (
    <>
    
    </>
    )
  }
}
 