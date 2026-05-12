import "./index.css"

const Header = () => {
  return (
    <nav className="navbar">

      <div className="logo-section">

        <h1 className="logo">
          Go Business
        </h1>

        <span className="dot"></span>

      </div>

      <ul className="nav-links">

        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Projects</li>
        <li>Contact</li>

      </ul>

      <button className="try-btn">
        Try for free
      </button>

    </nav>
  )
}

export default Header