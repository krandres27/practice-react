import { Component } from 'react'

class ClassComponent extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    console.log(this)
  }

  render() {
    return (
      <div>
        <button onClick={this.addCounter}>Increment counter</button>
      </div>
    )
  }
}

export default ClassComponent
