import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="lp-footer">
      <a href="#hero" className="lp-footer__logo">
        hommet<span>.</span>
      </a>
      <ul className="lp-footer__links">
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
      <p className="lp-footer__copy">
        © {new Date().getFullYear()} Hommet. Puebla, México.
      </p>
    </footer>
  );
}
