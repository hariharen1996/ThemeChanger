// Write your code here
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar/index'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const headingChange = isDarkTheme
            ? 'n-heading n-light'
            : 'n-heading n-dark'
          const textChange = isDarkTheme
            ? 'not-text text-light'
            : 'not-text text-dark'
          const bgChange = isDarkTheme
            ? 'not-found-container bgn-dark'
            : 'not-found-container bgn-light'
          return (
            <>
              <NavBar />
              <div className={bgChange}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="img"
                />
                <h1 className={headingChange}>Lost Your Way?</h1>
                <p className={textChange}>
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
