import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';

import ContactCard from '../ui/ContactCard';

export default function Contact() {
  return (
    <div className="container-wide">
      <header className="section-header stack">
        <h2>Kontakt mig</h2>

        <div className="stack-sm">
          <p className="font-bold">Lyder det som et match?</p>
          <p className="text-muted mx-auto max-w-3xl text-center">
            Uanset om du har spørgsmål, idéer eller bare vil tage en snak – så ræk endelig ud. Jeg
            er altid åben for nye forbindelser og spændende muligheder.
          </p>
        </div>
      </header>

      <div className="section-content">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <ContactCard
            icon={<FontAwesomeIcon icon={faPhone} />}
            title="Telefon"
            value="+45 50 66 72 53"
            href="tel:+4550667253"
          />
          <ContactCard
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            title="E-mail"
            value="burak-1998@live.dk"
            href="mailto:burak-1998@live.dk"
          />
          <ContactCard
            icon={<FontAwesomeIcon icon={faSquareLinkedin} />}
            title="LinkedIn"
            value="Burak Gültekin"
            href="https://www.linkedin.com/in/burak-gultekin/"
          />
        </div>
      </div>
    </div>
  );
}

