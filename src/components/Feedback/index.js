// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {value: false}

  thankYouDisplay = () => {
    this.setState({value: true})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources

    const {loveEmojiUrl} = resources
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {value ? (
            <div className="feedback">
              <img src={loveEmojiUrl} alt="love emoji" className="img1" />

              <h1 className="h1">Thank You!</h1>
              <p className="p1">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="h1">
                How satisfied are you with our customer support performance?
              </h1>
              <ul>
                {emojis.map(each => (
                  <li className="li" key={each.id}>
                    <button
                      type="button"
                      onClick={this.thankYouDisplay}
                      className="btn"
                    >
                      <img
                        src={each.imageUrl}
                        alt={each.name}
                        className="img2"
                      />
                    </button>
                    <p className="p1">{each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
