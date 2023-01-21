import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerateRandomNumber = () => {
    this.setState({
      randomNumber: Math.random() * 100,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range <br /> of 0 to 100
          </p>
          <button
            type="button"
            className="btn"
            onClick={this.onClickGenerateRandomNumber}
          >
            Generate
          </button>
          <h1 className="heading">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
