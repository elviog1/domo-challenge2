export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <span className="fs-3 fw-semibold text-white">compleet labs</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex gap-5">
              <li className="nav-item">
                <a
                  className="fs-5 list-group-item fw-semibold text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="fs-5 list-group-item fw-semibold text-secondary navbar-link"
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="fs-5 list-group-item fw-semibold text-secondary navbar-link"
                  aria-current="page"
                  href="#"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="fs-5 list-group-item fw-semibold text-secondary navbar-link"
                  aria-current="page"
                  href="#"
                >
                  Case studies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="fs-5 list-group-item fw-semibold text-secondary navbar-link"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="fs-5 list-group-item fw-semibold text-secondary navbar-link"
                  aria-current="page"
                  href="#"
                >
                  Hire us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  