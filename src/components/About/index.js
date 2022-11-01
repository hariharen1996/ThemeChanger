// Write your code here
import {Component} from 'react'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const imageChange = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

          const textChange = isDarkTheme
            ? 'about-text about-dark'
            : 'about-text about-light'
          const bgChange = isDarkTheme
            ? 'about-container bg-dark'
            : 'about-container bg-light'
          return (
            <>
              <Navbar />
              <div className={bgChange}>
                <img src={imageChange} className="about-img" alt="about" />
                <h1 className={textChange}>About</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
