import React from 'react'
import ReactDOM from 'react-dom'

let User = React.createClass({
	render: function() {
      
      let github = (this.props.github) ? this.renderGithub(this.props.github) : null
		  return <div>{this.props.name}: { github }</div>
	},

  renderGithub: function(github){
    return <a href={'http://github.com/' + github}>Github</a>
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
