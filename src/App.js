

import Display from "./display"
import { Component } from "react"
import Save from "./save.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Stuff</h1>
        <Save />
        <Display />
      </div>

    )
  }
}
export default App