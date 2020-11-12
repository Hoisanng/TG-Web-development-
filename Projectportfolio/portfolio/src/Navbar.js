import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbarwrapper">
      <ul>
        <li className="home"><Link to="/">Hoisan Ng</Link></li>
        <li><a href="about.asp">Over mij</a></li>
        <li><a href="news.asp">Vaardigheden</a></li>
        <li><a href="contact.asp">Vrije tijd</a></li>
        <li><a href="contact.asp">Contact</a></li>
      </ul>
    </div>
  )
}
export default Navbar;