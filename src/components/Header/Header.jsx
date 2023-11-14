import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              Blog App
            </Link>
            <a
              className="navbar-item"
              href="https://api-blog-ada.onrender.com/admin"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
