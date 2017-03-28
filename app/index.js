import React from 'react'
import ReactDOM from 'react-dom'

let App = React.createClass({
  render: function() {
    return <div>
      <h1>Our first Component1</h1>
      <h3>Our first Component2</h3>
      <p>Our first Component3</p>
    </div>
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
