import "./Nav.css"
import logo from "../../images/movie-png.png"
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav_wrapper">
        <div className="nav_logo">
            <img  src={logo} alt="logo" />
            <strong> Movies</strong>
        </div>
        <form id="nav_search-form">
                <input type="text" id="search-input" placeholder='Search for movies or TV shows' />
        </form>
        <a href="/">Login</a>
      </div>
    </nav>
  )
}

export default Nav
