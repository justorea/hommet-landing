import "../../styles/Proceso.css";

const PASOS = [
  {
    n: "01",
    title: "Escuchamos",
    text: "Comenzamos con una consulta sin costo. Entendemos tu espacio, tu estilo de vida y tu presupuesto antes de proponer cualquier solución.",
  },
  {
    n: "02",
    title: "Diseñamos",
    text: "Presentamos renders 3D fotorrealistas para que veas exactamente cómo quedará tu proyecto antes de que inicie la producción.",
  },
  {
    n: "03",
    title: "Fabricamos",
    text: "Producimos en nuestro taller con materiales de primera calidad, herrajes europeos y control de calidad en cada etapa.",
  },
  {
    n: "04",
    title: "Instalamos",
    text: "Nuestro equipo instala con precisión milimétrica y no cerramos el proyecto hasta que estés completamente satisfecho.",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="lp-proceso">
      <p className="lp-label">Cómo trabajamos</p>
      <h2 className="lp-section-title">
        Un proceso
        <br />
        <em>transparente</em>
      </h2>
      <div className="lp-proceso__grid">
        {PASOS.map((p) => (
          <div key={p.n} className="lp-paso">
            <p className="lp-paso__n">{p.n}</p>
            <h3 className="lp-paso__title">{p.title}</h3>
            <p className="lp-paso__text">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
