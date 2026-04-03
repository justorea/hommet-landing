import "../../styles/Servicios.css";

const SERVICIOS = [
  {
    num: "01",
    title: "Cocinas",
    text: "Diseñamos cocinas que equilibran estética y funcionalidad. Desde la isla hasta el último cajón, todo pensado para ti.",
    img: "/proyectos/cocina-fuentes.jpg",
  },
  {
    num: "02",
    title: "Closets",
    text: "Sistemas de almacenamiento personalizados para cuartos principales, vestidores y cualquier espacio que requiera orden con estilo.",
    img: "/proyectos/closet-angelopolis.png",
  },
  {
    num: "03",
    title: (
      <>
        Centros de
        <br />
        entretenimiento
      </>
    ),
    text: "Muebles para sala diseñados alrededor de tu tecnología y tu gusto, integrando TV, almacenamiento y acabados de alto nivel.",
    img: "/proyectos/centro-vista.jpg",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="lp-section lp-servicios">
      <p className="lp-label">Servicios</p>
      <div className="lp-servicios__header">
        <h2 className="lp-section-title">
          Lo que
          <br />
          <em>hacemos</em>
        </h2>
        <p className="lp-servicios__desc">
          Trabajamos con materiales premium y tecnología de punta para crear
          muebles que duran una vida. Cada pieza, diseñada desde cero para tu
          espacio.
        </p>
      </div>
      <div className="lp-servicios__grid">
        {SERVICIOS.map((s) => (
          <div key={s.num} className="lp-servicio-card">
            <div
              className="lp-servicio-card__img"
              style={{ backgroundImage: `url('${s.img}')` }}
              aria-hidden="true"
            />
            <p className="lp-servicio-card__num">{s.num}</p>
            <h3 className="lp-servicio-card__title">{s.title}</h3>
            <p className="lp-servicio-card__text">{s.text}</p>
            <a href="#contacto" className="lp-servicio-card__link">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
