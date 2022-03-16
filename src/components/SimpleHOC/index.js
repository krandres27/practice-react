import { Component } from 'react'

function simpleHOC (WrappedComponent, color) {
  return class extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log(this.props)
    }

    render() {
      return (
        <WrappedComponent color={color}/>
      )
    }
  }
}

const ComponentAUsingHOC = ({ color }) => {
  return (
    <div style={{ color }}>
      <p>This is component A using HOC, with a color: {color}</p>
    </div>
  )
}

const ComponentBUsingHOC = ({ color }) => {
  return (
    <div style={{ color }}>
      <p>This is component B using HOC, with a color: {color}</p>
    </div>
  )
}

const FinalComponent = ({ color }) => {
  return (
    <div>
      <ComponentAUsingHOC color={color} />
      <ComponentBUsingHOC color={color} />
    </div>
  )
}

export default simpleHOC(FinalComponent, 'red')