import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  fNameShowHide = () => {
    const {firstName} = this.state
    this.setState({firstName: !firstName})
  }

  lNameShowHide = () => {
    const {lastName} = this.state
    this.setState({lastName: !lastName})
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="fContainer">
            <button className="btn" onClick={this.fNameShowHide}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>

          <div className="lContainer">
            <button className="btn" onClick={this.lNameShowHide}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
