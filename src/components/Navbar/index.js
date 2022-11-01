// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const changeTheme = () => {
            toggleTheme()
          }

          const navChange = isDarkTheme ? 'navbar nav-dark' : 'navbar nav-light'
          const imgChange = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const textChange = isDarkTheme ? 'nav dark-text' : 'nav light-text'
          const themeChange = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          return (
            <nav className={navChange}>
              <div className="logo-container">
                <img src={imgChange} className="logo" alt="website logo" />
              </div>
              <ul className="nav-items">
                <Link to="/" className={textChange}>
                  <li className="nav-links">Home</li>
                </Link>
                <Link to="/about" className={textChange}>
                  <li className="nav-links">About</li>
                </Link>
              </ul>
              <div className="theme-container">
                <button
                  className="btn"
                  type="button"
                  // eslint-disable-next-line react/no-unknown-property
                  testid="theme"
                  onClick={changeTheme}
                >
                  <img src={themeChange} className="theme-img" alt="theme" />
                </button>
              </div>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NavBar
