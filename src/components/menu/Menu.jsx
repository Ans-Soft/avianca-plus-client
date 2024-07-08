import { Link } from "react-router-dom"
import "./styles-menu.css"

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/flights">Flights</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
          <li><Link to="/checkouts">Checkouts</Link></li>
        </ul>
      </nav>
    </header>
  )
}