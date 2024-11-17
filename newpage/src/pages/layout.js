import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import "../styles/nav.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <>
      <Header />
      <nav id="main-nav">
        <div id="toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mybooks">My Books</Link>
          </li>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
          <li>
            <Link to="/discussion">Discussion</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/addbook">Add Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;