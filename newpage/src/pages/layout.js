import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import "../styles/nav.css";

const Layout = () => {
  return (
    <>
      <Header />
      <nav id="main-nav">
        <ul id="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mybooks">My Books</Link>
          </li>
          <li>
            <Link to="/addbook">Add Book</Link>
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
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;