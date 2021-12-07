import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: true, lastName: true}

  fistNamefunc = () => {
    const {firstName} = this.state
    if (firstName) {
      this.setState(() => ({firstName: false}))
    } else {
      this.setState(() => ({firstName: true}))
    }
  }

  lastNamefunc = () => {
    const {lastName} = this.state
    if (lastName) {
      this.setState(() => ({lastName: false}))
    } else {
      this.setState(() => ({lastName: true}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="mainContainer">
        <div className="cardcontainer">
          <h1>Show/Hide</h1>
          <div className="buttonContainer">
            <button type="submit" onClick={this.fistNamefunc}>
              Show/Hide Firstname
            </button>
            <button type="submit" onClick={this.lastNamefunc}>
              Show/Hide Lastname
            </button>
          </div>
          <div className="buttonContainer">
            {firstName ? null : (
              <div className="name1">
                <p>Joe</p>
              </div>
            )}
            {lastName ? null : (
              <div className="name2">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
