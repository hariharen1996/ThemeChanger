// Write your code here
import {Component} from 'react'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const imageChange = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

          const textChange = isDarkTheme ? 'home-text dark' : 'home-text light'
          const bgChange = isDarkTheme
            ? 'home-container h-dark'
            : 'home-container h-light'
          return (
            <>
              <Navbar />
              <div className={bgChange}>
                <img src={imageChange} className="home-img" alt="home" />
                <h1 className={textChange}>Home</h1>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
