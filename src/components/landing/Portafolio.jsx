import "../../styles/Portafolio.css";

const PROYECTOS = [
  {
    cat: "Cocina",
    name: "Casa Fuentes, Puebla",
    img: "/proyectos/cocina-fuentes.jpg",
    alt: "Cocina moderna minimalista",
  },
  {
    cat: "Closet",
    name: "Residencia Angelópolis",
    img: "/proyectos/closet-angelopolis.png",
    alt: "Closet a medida con vestidor",
    position: "top",
  },
  {
    cat: "Centro de entretenimiento",
    name: "Depto. La Vista",
    img: "/proyectos/centro-vista.jpg",
    alt: "Centro de entretenimiento con TV",
  },
  {
    cat: "Closet",
    name: "Zona Colegios, Puebla",
    img: "/proyectos/closet-colegios.png",
    alt: "Closet principal con iluminación",
  },
  {
    cat: "Cocina",
    name: "Casa Chipilo",
    img: "/proyectos/cocina-chipilo.jpg",
    alt: "Cocina con isla central",
  },
];

export default function Portafolio() {
  return (
    <section id="portafolio" className="lp-section lp-portafolio">
      <p className="lp-label">Portafolio</p>
      <div className="lp-portafolio__header">
        <h2 className="lp-section-title">
          Proyectos
          <br />
          <em>recientes</em>
        </h2>
        <a href="#contacto" className="lp-portafolio__link">
          Ver todos los proyectos
        </a>
      </div>
      <div className="lp-portafolio__grid">
        {PROYECTOS.map((p, i) => (
          <div
            key={i}
            className="lp-port-item"
            style={i === 1 ? { alignSelf: "start" } : {}}
          >
            <img
              className="lp-port-item__img"
              src={p.img}
              alt={p.alt}
              loading="lazy"
              style={{
                objectFit: "cover",
                objectPosition: p.position || "center",
              }}
            />
            <div className="lp-port-item__overlay">
              <div>
                <span className="lp-port-item__cat">{p.cat}</span>
                <p className="lp-port-item__name">{p.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
