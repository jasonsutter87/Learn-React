import React from 'react'
import ReactDOM from 'react-dom'


let Counter = React.createClass({
  getInitialState: function(){
    return{
      count: 0 
    }
  },

  componentDidMount: function() {
    
    this.setState({
      count: 5
    })

    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  },

  render: function(){
    return <div>Count: {this.state.count}</div>
  }
})

let App = React.createClass({
  render: function(){
    return <Counter start={5}/>
  }
})

// flow of data... You can pass a varible name foo for the App  component.
// since its all nested that prop name will be avialibe down the chain.
ReactDOM.render(<App />, document.getElementById('root'))
