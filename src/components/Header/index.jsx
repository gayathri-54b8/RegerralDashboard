import "./index.css"

const Header = () => {
  return (
    <nav className="navbar">

      <h1 className="logo">
        ReferralApp
      </h1>

      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <input
        type="search"
        placeholder="Search"
        className="search"
      />

      <button className="try-btn">
        Try for free
      </button>

    </nav>
  )
}

export default Header