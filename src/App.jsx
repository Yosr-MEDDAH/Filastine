// MODULE 6

import gazaJPG from "./assets/images/Damage_in_Gaza_Strip_during_the_October_2023_-_29.jpg";
import jerusalemJPG from "./assets/images/Jerusalem-2013(2)-Aerial-Temple_Mount-(south_exposure).jpg";
import haifaJPG from "./assets/images/Shrine_of_the_Báb_in_Haifa_6801-11.jpg";
import naplouseJPG from "./assets/images/Palestine_-_Naplouse_et_le_Mont_Ebal.jpg";
import palestinePNG from "./assets/images/State_of_Palestine.png";
import gazaWebP from "./assets/images/Damage_in_Gaza_Strip_during_the_October_2023_-_29.webp";
import jerusalemWebP from "./assets/images/Jerusalem-2013(2)-Aerial-Temple_Mount-(south_exposure).webp";
import haifaWebP from "./assets/images/Shrine_of_the_Báb_in_Haifa_6801-11.webp";
import naplouseWebP from "./assets/images/Palestine_-_Naplouse_et_le_Mont_Ebal.webp";
import palestineWebP from "./assets/images/State_of_Palestine.webp";
import gazaAvif from "./assets/images/Damage_in_Gaza_Strip_during_the_October_2023_-_29.avif";
import jerusalemAvif from "./assets/images/Jerusalem-2013(2)-Aerial-Temple_Mount-(south_exposure).avif";
import haifaAvif from "./assets/images/Shrine_of_the_Báb_in_Haifa_6801-11.avif";
import naplouseAvif from "./assets/images/Palestine_-_Naplouse_et_le_Mont_Ebal.avif";
import palestineAvif from "./assets/images/State_of_Palestine.avif";

import { useState, useRef, useEffect } from "react";

function CarteVille({ ville, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(ville);
    }
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`Voir les détails de ${ville.nom}`}
      onClick={() => onClick(ville)}
      onKeyDown={handleKeyDown}
      style={{
        cursor: "pointer",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--color-surface)",
        boxShadow: "var(--shadow-card)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >

      <picture>
        <source srcSet={ville.imageAvif} type="image/avif" />
        <source srcSet={ville.imageWebP} type="image/webp" />
        <img
          src={ville.imageJPG}
          width={ville.imageWidth}
          height={ville.imageHeight}
          alt={ville.imageAlt}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
        />
      </picture>

      <div style={{ padding: "16px" }}>
        <h3 style={{
          fontSize: "var(--font-size-lg)",
          fontWeight: "bold",
          margin: "0 0 4px 0",
          color: "var(--color-text-primary)",
        }}>
          {ville.nom}
        </h3>
        <p style={{
          color: "var(--color-text-secondary)",
          fontSize: "var(--font-size-sm)",
          margin: "0 0 8px 0",
        }}>
          Population : {ville.population}
        </p>
        <p style={{
          color: "var(--color-text-muted)",
          fontSize: "var(--font-size-sm)",
          margin: 0,
          lineHeight: "1.5",
        }}>
          {ville.description}
        </p>
      </div>
    </article>
  );
}

function Modale({ ville, onClose }) {
  const closeButtonRef = useRef(null);
  useEffect(() => {
    if (ville && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [ville]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  if (!ville) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "var(--color-overlay)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modale-titre"
        onKeyDown={handleKeyDown}
        style={{
          background: "var(--color-bg)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          padding: "32px",
          maxWidth: "500px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >

        <picture>
          <source srcSet={ville.imageAvif} type="image/avif" />
          <source srcSet={ville.imageWebP} type="image/webp" />
          <img
            src={ville.imageJPG}
            width={ville.imageWidth}
            height={ville.imageHeight}
            alt={ville.imageAlt}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", borderRadius: "var(--radius-md)", display: "block" }}
          />
        </picture>

        <h2 id="modale-titre" style={{
          marginTop: "16px",
          color: "var(--color-text-primary)",
          fontSize: "var(--font-size-xl)",
        }}>
          {ville.nom}
        </h2>

        <p style={{
          color: "var(--color-text-secondary)",
          marginTop: "8px",
          lineHeight: "1.6",
        }}>
          {ville.description}
        </p>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Fermer la fenêtre"
          style={{
            cursor: "pointer",
            background: "var(--color-accent)",
            color: "var(--color-white)",
            padding: "8px 20px",
            borderRadius: "var(--radius-sm)",
            border: "none",
            marginTop: "20px",
            fontSize: "var(--font-size-base)",
            fontWeight: "500",
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

const villes = [
  {
    id: 1,
    nom: "Gaza",
    description: "Une ville côtière sur la mer Méditerranée, l'une des plus anciennes villes du monde.",
    population: "2 000 000+",
    imageAvif: gazaAvif,
    imageWebP: gazaWebP,
    imageJPG: gazaJPG,
    imageWidth:600,
    imageHeight:400,
    imageAlt:"Vue de la ville de Gaza et de la mer Méditerranée",
  },
  {
    id: 2,
    nom: "Al-Quds (Jérusalem)",
    description: "La ville sainte, au cœur de l'histoire et de la culture palestinienne.",
    population: "950 000+",
    imageAvif: jerusalemAvif,
    imageWebP: jerusalemWebP,
    imageJPG: jerusalemJPG,
    imageWidth:600,
    imageHeight:400,
    imageAlt:"La mosquée Al-Aqsa et le Dôme du Rocher à Jérusalem",
  },
  {
    id: 3,
    nom: "Haïfa",
    description: "Ville portuaire historique au nord de la Palestine historique.",
    population: "300 000+",
    imageAvif: haifaAvif,
    imageWebP: haifaWebP,
    imageJPG: haifaJPG,
    imageWidth:600,
    imageHeight:400,
    imageAlt:"Vue panoramique de la ville de Haïfa zt du Mont Carmel",
  },
  {
    id: 4,
    nom: "Naplouse",
    description: "Ville de la région de Cisjordanie, connue pour sa culture et son histoire.",
    population: "180 000+",
    imageAvif: naplouseAvif,
    imageWebP: naplouseWebP,
    imageJPG: naplouseJPG,
    imageWidth:600,
    imageHeight:400,
    imageAlt:"Vue du centre-ville de Naplouse et du Mont Ebal",
  },
];

export default function App() {
  const [villeSelectionnee, setVilleSelectionnee] = useState(null);

  const handleClick = (ville) => {
    setVilleSelectionnee(ville);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>

      <a href="#contenu-principal" className="skip-link">
        Aller au contenu principal
      </a>

      <header
        style={{
          padding: "80px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <picture>
          <source srcSet={palestineAvif} type="image/avif" />
          <source srcSet={palestineWebP} type="image/webp" />
          <img
            src={palestinePNG}
            width={1280}
            height={720}  
            alt="Drapeau de la Palestine"  
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />

        </picture>   

        {/* overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "var(--color-overlay-header)",
          zIndex: 1,
        }} aria-hidden="true" />

        <div style={{ position: "relative", zIndex: 2}}>
          <h1 style={{
            fontSize: "var(--font-size-3xl)",
            fontWeight: "900",
            margin: "0 0 16px 0",
            color: "var(--color-white)",
          }}>
            🇵🇸 Filastine
          </h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            margin: 0,
            color: "var(--color-white-soft)",
          }}>
            Découvrez la culture et l'histoire de la Palestine
          </p>
        </div>
      </header>


      <nav
        aria-label="Navigation principale"
        style={{
          background: "var(--color-nav-bg)",
          padding: "12px 20px",
        }}
      >
        <ul style={{ listStyle: "none", display: "flex", gap: "24px", margin: 0, padding: 0 }}>
          <li>
            <a href="/" style={{ color: "var(--color-nav-text)", textDecoration: "none", fontSize: "var(--font-size-base)" }}>
              Accueil
            </a>
          </li>
          <li>
            <a href="/villes" style={{ color: "var(--color-nav-text)", textDecoration: "none", fontSize: "var(--font-size-base)" }}>
              Villes
            </a>
          </li>
          <li>
            <a href="/histoire" style={{ color: "var(--color-nav-text)", textDecoration: "none", fontSize: "var(--font-size-base)" }}>
              Histoire
            </a>
          </li>
          <li>
            <a href="/contact" style={{ color: "var(--color-nav-text)", textDecoration: "none", fontSize: "var(--font-size-base)" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main
        id="contenu-principal"
        tabIndex={-1}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
          background: "var(--color-bg)",
        }}
      >
        <section aria-labelledby="titre-villes">
          <h2 id="titre-villes" style={{
            fontSize: "var(--font-size-2xl)",
            fontWeight: "bold",
            marginBottom: "8px",
            color: "var(--color-text-primary)",
          }}>
            Villes Palestiniennes
          </h2>
          <p style={{
            color: "var(--color-text-muted)",
            marginBottom: "32px",
          }}>
            Explorez les grandes villes de Palestine
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}>
            {villes.map((ville) => (
              <CarteVille key={ville.id} ville={ville} onClick={handleClick} />
            ))}
          </div>
        </section>

        <section aria-labelledby="titre-chiffres" style={{ marginTop: "60px" }}>
          <h2 id="titre-chiffres" style={{
            fontSize: "var(--font-size-xl)",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "var(--color-text-primary)",
          }}>
            Quelques chiffres
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <caption style={{
              textAlign: "left",
              marginBottom: "8px",
              fontWeight: "bold",
              captionSide: "top",
              color: "var(--color-text-primary)",
            }}>
              Données sur la Palestine
            </caption>
            <thead>
              <tr>
                <th scope="col" style={{
                  padding: "12px",
                  borderBottom: "2px solid var(--color-table-border)",
                  textAlign: "left",
                  background: "var(--color-table-header-bg)",
                  color: "var(--color-text-primary)",
                }}>
                  Indicateur
                </th>
                <th scope="col" style={{
                  padding: "12px",
                  borderBottom: "2px solid var(--color-table-border)",
                  textAlign: "left",
                  background: "var(--color-table-header-bg)",
                  color: "var(--color-text-primary)",
                }}>
                  Valeur
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid var(--color-table-border)", color: "var(--color-text-primary)" }}>
                  Superficie de la Palestine historique
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid var(--color-table-border)", color: "var(--color-text-primary)" }}>
                  27 000 km²
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid var(--color-table-border)", color: "var(--color-text-primary)" }}>
                  Réfugiés palestiniens
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid var(--color-table-border)", color: "var(--color-text-primary)" }}>
                  7 millions+
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid var(--color-table-border)", color: "var(--color-text-primary)" }}>
                  Année de la Nakba
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid var(--color-table-border)", color: "var(--color-text-primary)" }}>
                  1948
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="titre-contribuer" style={{ marginTop: "60px" }}>
          <h2 id="titre-contribuer" style={{
            fontSize: "var(--font-size-xl)",
            fontWeight: "bold",
            marginBottom: "24px",
            color: "var(--color-text-primary)",
          }}>
            Contribuer
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>
            <div style={{ color: "var(--color-text-primary)" }}>Nom</div>
            <input
              placeholder="Votre nom"
              style={{
                padding: "10px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--font-size-base)",
                background: "var(--color-bg)",
                color: "var(--color-text-primary)",
              }}
            />
            <div style={{ color: "var(--color-text-primary)" }}>Email</div>
            <input
              placeholder="Votre email"
              style={{
                padding: "10px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--font-size-base)",
                background: "var(--color-bg)",
                color: "var(--color-text-primary)",
              }}
            />
            <div style={{ color: "var(--color-text-primary)" }}>Message</div>
            <textarea
              placeholder="Votre message"
              style={{
                padding: "10px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--font-size-base)",
                height: "120px",
                background: "var(--color-bg)",
                color: "var(--color-text-primary)",
              }}
            />
            <div style={{
              background: "var(--color-accent)",
              color: "var(--color-white)",
              padding: "12px 24px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "var(--font-size-base)",
              fontWeight: "500",
            }}>
              Envoyer
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        background: "var(--color-footer-bg)",
        color: "var(--color-footer-text)",
        textAlign: "center",
        padding: "24px",
        marginTop: "60px",
        fontSize: "var(--font-size-sm)",
      }}>
        <p style={{ margin: 0 }}>Filastine © 2026 — Fait avec ❤️</p>
      </footer>

      <Modale
        ville={villeSelectionnee}
        onClose={() => setVilleSelectionnee(null)}
      />
    </div>
  );
}