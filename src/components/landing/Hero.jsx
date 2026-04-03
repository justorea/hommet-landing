import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="lp-hero">
      <div className="lp-hero__bg" aria-hidden="true" />
      <p className="lp-hero__tag">Muebles a la medida</p>
      <h1 className="lp-hero__title">
        Cada espacio
        <br />
        <em>merece</em>
        <br />
        ser único.
      </h1>
      <p className="lp-hero__sub">
        Diseñamos y fabricamos cocinas, closets y centros de entretenimiento
        hechos exactamente para tu hogar y tu forma de vivir.
      </p>
      <div className="lp-hero__actions">
        <a href="#portafolio" className="lp-btn-primary">
          Ver proyectos
        </a>
        <a href="#contacto" className="lp-btn-ghost">
          Solicitar cotización
        </a>
      </div>
      <span className="lp-hero__scroll" aria-hidden="true">
        Desplazar
      </span>
    </section>
  );
}
