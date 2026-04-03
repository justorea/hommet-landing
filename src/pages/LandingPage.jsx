import { useEffect } from "react";
import "../styles/globals.css";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Servicios from "../components/landing/Servicios";
import Proceso from "../components/landing/Proceso";
import Portafolio from "../components/landing/Portafolio";
import Nosotros from "../components/landing/Nosotros";
import Contacto from "../components/landing/Contacto";
import Footer from "../components/landing/Footer";

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".lp-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function LandingPage() {
  useScrollReveal();
  return (
    <div className="lp-root">
      <Navbar />
      <Hero />
      <Servicios />
      <Proceso />
      <Portafolio />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}
