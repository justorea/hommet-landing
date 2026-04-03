import { useState } from "react";
import "../../styles/Contacto.css";

export default function Contacto() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!phone.trim()) return;
    const msg = encodeURIComponent(
      "Hola, me interesa cotizar un proyecto con Hommet.",
    );
    window.open(`https://wa.me/522221234567?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="lp-contacto">
      <div className="lp-contacto__top">
        <p className="lp-label">Hablemos</p>
      </div>
      <div className="lp-contacto__body">
        <h2 className="lp-contacto__title">
          ¿Listo para
          <br />
          <em>transformar</em>
          <br />
          tu espacio?
        </h2>
        <p className="lp-contacto__sub">
          Cuéntanos tu proyecto. Te contactamos en menos de 24 horas con una
          consulta sin costo.
        </p>
        <div className="lp-contacto__form">
          <input
            className="lp-contacto__input"
            type="tel"
            placeholder="Tu número de WhatsApp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="lp-contacto__submit" onClick={handleSubmit}>
            {sent ? "¡Enviado!" : "Solicitar cotización"}
          </button>
        </div>
        <div className="lp-contacto__alts">
          <a href="mailto:hola@hommet.mx" className="lp-contacto__alt">
            hola@hommet.mx
          </a>
          <a href="tel:+522221234567" className="lp-contacto__alt">
            +52 (222) 123 4567
          </a>
          <span className="lp-contacto__alt">Puebla, México</span>
        </div>
      </div>
    </section>
  );
}
