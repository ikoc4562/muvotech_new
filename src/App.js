import { useEffect } from "react";
import "./index.css";

const references = [
  {
    title: "Nile Humanitarian Development Agency",
    url: "https://nilehumanitarian.org/",
    desc: "Kansainvälisen humanitaarisen organisaation verkkosivusto.",
  },
  {
    title: "Eläinhoitola",
    url: "https://www.elainhoitola.fi/",
    desc: "Selkeä ja luottamusta herättävä palvelusivusto.",
  },
  {
    title: "Indiko",
    url: "https://www.indiko.fi/",
    desc: "Moderni yrityssivusto vahvalla visuaalisella ilmeellä.",
  },
];

const testimonials = [
  {
    name: "Yritysasiakas",
    role: "Paikallinen palveluyritys",
    text: "Yhteistyö sujui erittäin hyvin. Lopputulos oli moderni, nopea ja visuaalisesti laadukas verkkosivusto.",
  },
  {
    name: "Yrittäjä",
    role: "Pienyritys",
    text: "Sivustosta tuli juuri sellainen kuin toivoimme. Selkeä rakenne ja ammattimainen ilme toivat meille uskottavuutta.",
  },
  {
    name: "Asiakasprojekti",
    role: "Brändiuudistus",
    text: "Kommunikointi oli sujuvaa ja projekti eteni nopeasti. Sivusto näyttää premiumilta ja toimii erinomaisesti mobiilissa.",
  },
];

const pricing = [
  {
    title: "Basic",
    price: "Alkaen 790€",
    highlight: false,
    items: [
      "Yksisivuinen verkkosivusto",
      "Responsiivinen toteutus",
      "Perus yhteydenottolomake",
      "Nopea toimitus",
    ],
  },
  {
    title: "Business",
    price: "Alkaen 1490€",
    highlight: true,
    items: [
      "Useampi alasivu",
      "Moderni premium-design",
      "Yhteydenottolomake",
      "Perus SEO-optimointi",
    ],
  },
  {
    title: "Premium",
    price: "Tarjouspyynnön mukaan",
    highlight: false,
    items: [
      "Räätälöity kokonaisuus",
      "Laajempi sisältörakenne",
      "Edistyneet integraatiot",
      "Jatkokehitys ja tuki",
    ],
  },
];

const whatsappNumber = "358449837088";

export default function App() {
  useEffect(() => {
    document.title =
      "MuvoTech | Verkkosivujen suunnittelu ja toteutus Suomessa";

    const setMeta = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let tag = document.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        if (property) {
          tag.setAttribute("property", name);
        } else {
          tag.setAttribute("name", name);
        }
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "MuvoTech suunnittelee ja toteuttaa modernit, nopeat ja näyttävät verkkosivut yrityksille ja yksityisasiakkaille."
    );
    setMeta(
      "keywords",
      "verkkosivut, web design, web development, yrityssivut, responsiivinen verkkosivusto, MuvoTech"
    );
    setMeta("og:title", "MuvoTech | Premium verkkosivut yrityksellesi", true);
    setMeta(
      "og:description",
      "Modernit ja vaikuttavat verkkosivut, jotka tukevat liiketoimintaasi.",
      true
    );
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://www.muvotech.fi", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.muvotech.fi");

    let structuredData = document.getElementById("muvotech-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.id = "muvotech-structured-data";
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "MuvoTech",
      url: "https://www.muvotech.fi",
      email: "info@muvotech.fi",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jalavakatu 7E",
        postalCode: "50130",
        addressCountry: "FI",
      },
      areaServed: "Finland",
      description:
        "MuvoTech suunnittelee ja toteuttaa moderneja verkkosivustoja yrityksille ja yksityisasiakkaille.",
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Ota yhteyttä WhatsAppissa"
        title="Ota yhteyttä WhatsAppissa"
      >
        <span className="wa-icon">✆</span>
        <span>WhatsApp</span>
      </a>

      <header className="header">
        <div className="container nav">
          <a href="/" className="header-logo" aria-label="MuvoTech home">
            <img
              src="/MT_Logo.png"
              alt="MuvoTech logo"
     
            />
          </a>

          <nav className="nav-links">
            <a href="#services">Palvelut</a>
            <a href="#portfolio">Referenssit</a>
            <a href="#pricing">Hinnasto</a>
            <a href="#about">Meistä</a>
            <a href="#contact">Yhteys</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Pyydä tarjous
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid-lines"></div>

        <div className="container hero-grid">
          <div className="hero-left reveal">
            <p className="tag">www.muvotech.fi</p>
            <h1>
              Näyttävät verkkosivut, jotka tekevät vaikutuksen ja tuovat
              asiakkaita.
            </h1>
            <p className="hero-text">
              Suunnittelemme ja toteutamme moderneja verkkosivustoja yrityksille
              ja yksityisasiakkaille. Rakennamme sivuja, jotka näyttävät
              laadukkailta, toimivat nopeasti ja tukevat liiketoimintaasi.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Ota yhteyttä
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                Katso referenssit
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card reveal reveal-delay-1">
                <h3>Moderni</h3>
                <p>Tyylikäs ja ammattimainen design</p>
              </div>
              <div className="stat-card reveal reveal-delay-2">
                <h3>Nopea</h3>
                <p>Responsiivinen ja suorituskykyinen toteutus</p>
              </div>
              <div className="stat-card reveal reveal-delay-3">
                <h3>Luotettava</h3>
                <p>Selkeä prosessi ideasta julkaisuun</p>
              </div>
            </div>
          </div>

          <div className="hero-right reveal">
            <div className="hero-orb hero-orb-one"></div>
            <div className="hero-orb hero-orb-two"></div>

            <div className="showcase-card floating-card">
              <div className="showcase-top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              <div className="showcase-body">
                <p className="mini-label">DIGITAL SOLUTIONS</p>
                <h2>Premium verkkosivut yrityksellesi</h2>
                <p>
                  Muvotech auttaa rakentamaan vahvan digitaalisen ilmeen, joka
                  erottuu kilpailijoista.
                </p>

                <div className="mini-preview">
                  <div className="preview-line preview-line-lg"></div>
                  <div className="preview-line"></div>
                  <div className="preview-grid">
                    <div className="preview-panel"></div>
                    <div className="preview-panel"></div>
                    <div className="preview-panel"></div>
                    <div className="preview-panel"></div>
                  </div>
                </div>

                <div className="mini-boxes">
                  <div className="mini-box">UI / UX Design</div>
                  <div className="mini-box">Web Development</div>
                  <div className="mini-box">Business Websites</div>
                  <div className="mini-box">Responsive Layouts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-tag">Palvelut</p>
            <h2>Kaikki mitä tarvitset vaikuttavaan verkkonäkyvyyteen</h2>
            <p className="section-text">
              Toteutamme verkkosivustoja, jotka näyttävät laadukkailta, tuntuvat
              moderneilta ja tukevat asiakkaidesi päätöksentekoa.
            </p>
          </div>

          <div className="cards">
            <div className="card reveal">
              <h3>Verkkosivujen suunnittelu</h3>
              <p>
                Luomme visuaalisesti vahvoja ja selkeitä verkkosivuja, jotka
                tukevat brändiäsi ja erottavat sinut kilpailijoista.
              </p>
            </div>

            <div className="card reveal reveal-delay-1">
              <h3>Verkkosivujen toteutus</h3>
              <p>
                Rakennamme responsiivisia, nopeita ja helppokäyttöisiä sivuja,
                jotka toimivat saumattomasti kaikilla laitteilla.
              </p>
            </div>

            <div className="card reveal reveal-delay-2">
              <h3>Yritysratkaisut</h3>
              <p>
                Toteutamme yrityksille verkkoratkaisuja, jotka vahvistavat
                digitaalista läsnäoloa ja lisäävät yhteydenottoja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section section-dark">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-tag">Referenssit</p>
            <h2>Aikaisempia toteutuksia</h2>
            <p className="section-text">
              Tässä muutamia verkkosivustoja, joita olen ollut tekemässä.
            </p>
          </div>

          <div className="portfolio-grid">
            {references.map((item, index) => (
              <a
                key={index}
                className={`portfolio-card reveal reveal-delay-${index}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="portfolio-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="portfolio-link">Avaa sivusto →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-tag">Hinnasto</p>
            <h2>Selkeät paketit eri tarpeisiin</h2>
            <p className="section-text">
              Voit aloittaa kevyesti tai rakentaa laajemman kokonaisuuden
              yrityksesi tarpeiden mukaan.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <div
                key={plan.title}
                className={`pricing-card ${
                  plan.highlight ? "pricing-featured" : ""
                } reveal reveal-delay-${index}`}
              >
                {plan.highlight && (
                  <div className="pricing-badge">Suosituin</div>
                )}
                <h3>{plan.title}</h3>
                <div className="price">{plan.price}</div>

                <ul className="pricing-list">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href="#contact" className="btn btn-secondary pricing-btn">
                  Kysy tästä paketista
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-box reveal">
            <p className="section-tag">Miksi Muvotech</p>
            <h2>Verkkosivusto ei ole vain ulkoasu — se on vaikutelma.</h2>
            <p>
              Hyvin rakennettu verkkosivusto auttaa yritystäsi näyttämään
              uskottavalta, vakuuttamaan asiakkaat ja ohjaamaan kävijät ottamaan
              yhteyttä.
            </p>
          </div>

          <div className="about-list">
            <div className="about-item reveal">
              <h3>Visuaalinen laatu</h3>
              <p>Ammattimainen ulkoasu, joka vahvistaa brändiäsi.</p>
            </div>
            <div className="about-item reveal reveal-delay-1">
              <h3>Selkeä rakenne</h3>
              <p>Kävijä löytää tärkeät tiedot nopeasti ja helposti.</p>
            </div>
            <div className="about-item reveal reveal-delay-2">
              <h3>Tuloksiin tähtäävä</h3>
              <p>Sivusto suunnitellaan tukemaan yhteydenottoja ja myyntiä.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section-dark">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-tag">Asiakaskokemuksia</p>
            <h2>Mitä asiakkaat sanovat</h2>
            <p className="section-text">
              Laadukas yhteistyö, selkeä prosessi ja viimeistelty lopputulos.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div
                key={item.name + index}
                className={`testimonial-card reveal reveal-delay-${index}`}
              >
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">“{item.text}”</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-box reveal">
            <p className="section-tag">Yhteys</p>
            <h2>Aloitetaan projektisi</h2>
            <p>
              Kerro, millaisen verkkosivuston tarvitset. Suunnitellaan yhdessä
              ratkaisu, joka näyttää laadukkaalta ja toimii tehokkaasti.
            </p>

            <div className="contact-info">
              <p>
                <strong>Verkkosivusto:</strong> www.muvotech.fi
              </p>
              <p>
                <strong>Sähköposti:</strong> info@muvotech.fi
              </p>
              <p>
                <strong>Osoite:</strong> Jalavakatu 7E, 50130
              </p>
            </div>

            <form
              className="contact-form"
              action="mailto:info@muvotech.fi"
              method="POST"
              encType="text/plain"
            >
              <input type="text" placeholder="Nimi" />
              <input type="email" placeholder="Sähköposti" />
              <input type="text" placeholder="Yritys / projekti" />
              <textarea rows="5" placeholder="Kerro projektistasi"></textarea>
              <button type="submit" className="btn btn-primary full-btn">
                Lähetä viesti
              </button>
            </form>
          </div>

          <div className="map-box reveal reveal-delay-1">
            <p className="section-tag">Sijainti</p>
            <h2>Toimipiste Mikkelissä</h2>
            <p>
              Osoite: Jalavakatu 7E, 50130. Projektit voidaan toteuttaa myös
              etänä eri puolille Suomea ja kansainvälisesti.
            </p>

            <div className="map-frame">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.3505387353182!2d27.240978100000003!3d61.68654809999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469aa11377495555%3A0x8fbb6edc1ffff43e!2sMuvoTech!5e0!3m2!1sen!2sfi!4v1773011162848!5m2!1sen!2sfi"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <div className="footer-brand">
              <img
                src="/MT_Logo.png"
                alt="MuvoTech logo"
                className="footer-logo-img"
                height={"250px"}
              />
            </div>
            <p>Modernit verkkosivut yrityksille ja yksityisasiakkaille.</p>
          </div>

          <div className="footer-links">
            <a href="#services">Palvelut</a>
            <a href="#portfolio">Referenssit</a>
            <a href="#pricing">Hinnasto</a>
            <a href="#contact">Yhteys</a>
          </div>
        </div>

        <div className="container footer-bottom">
          © 2026 Muvotech. Kaikki oikeudet pidätetään.
        </div>
      </footer>
    </div>
  );
}