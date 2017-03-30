import React from 'react'
import ReactDOM from 'react-dom'

let User = React.createClass({
	getInitialState: function(){
    return {
      active: false
    }
  },

  render: function(){
		let active = this.state.active ? 'Yes' : 'No'
    return (
        <div className="user">
          <div>Name: {this.props.name}</div>
          <div>Active: {active}</div>
          <button onClick={this.toggleActive}>Toggle Active</button>
        </div>
      )
	},

  toggleActive: function(){
    this.setState({
      active: !this.state.active
    })
  }

})

let App = React.createClass({
  render: function() {
    return (
    <div>
      <h1>User List2:</h1>
      <User name="Jason Sutter" github="jasonsutter87"/>
      <User name="Renan Barbosa" github="RenanBa"/>
      <User name="Jason Fassler" />
    </div>
    )
  }
})


// flow of data... You can pass a varible name foo for the App  component.
// since its all nested that prop name will be avialibe down the chain.
ReactDOM.render(<App />, document.getElementById('root'))
