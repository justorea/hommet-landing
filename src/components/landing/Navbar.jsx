import "../../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="lp-nav">
      <Link to="/" className="lp-nav__logo">
        hommet<span>.</span>
      </Link>
      <ul className="lp-nav__links">
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#proceso">Proceso</a>
        </li>
        <li>
          <a href="#portafolio">Proyectos</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
      </ul>
      <a href="#contacto" className="lp-nav__cta">
        Cotizar proyecto
      </a>
    </nav>
  );
}
