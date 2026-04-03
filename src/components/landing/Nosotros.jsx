import "../../styles/Nosotros.css";

const STATS = [
  { n: "8", suffix: "+", label: "Años de experiencia" },
  { n: "200", suffix: "+", label: "Proyectos terminados" },
  { n: "100", suffix: "%", label: "A la medida" },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="lp-nosotros">
      <div className="lp-nosotros__img-wrap">
        <video
          className="lp-nosotros__img"
          src="/taller-hommet.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="lp-nosotros__content">
        <p className="lp-label">Nosotros</p>
        <h2 className="lp-nosotros__title">
          Artesanos del
          <br />
          <em>espacio</em> moderno
        </h2>
        <p className="lp-nosotros__text">
          Hommet nació de la convicción de que tu hogar merece muebles que se
          adapten a ti, no al revés. Combinamos diseño contemporáneo con
          fabricación artesanal para crear piezas que definen espacios.
        </p>
        <p className="lp-nosotros__text">
          Con sede en Puebla, atendemos proyectos residenciales en toda la
          región, trabajando de la mano con el cliente en cada etapa del
          proceso.
        </p>
        <div className="lp-nosotros__stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <span className="lp-stat__n">
                {s.n}
                <span>{s.suffix}</span>
              </span>
              <p className="lp-stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
