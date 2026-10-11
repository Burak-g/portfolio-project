import portraitImg from '../../assets/images/AC5I8880C2.jpg';
import pixelImg from '../../assets/images/pixel-burak2.png';
import PixelTransition from '../ui/PixelTransition';

export default function About() {
  return (
    <div className="container-wide">
      <div className="flex flex-col gap-12 md:flex-row md:items-center lg:gap-20">
        {/* Left: text */}
        <div className="min-w-0 md:w-1/2">
          <div className="stack">
            <h2>Om mig</h2>

            <p>
              Mit navn er Burak, jeg er 28 år og arbejder som frontendudvikler hos Region
              Midtjylland. Jeg er uddannet datamatiker og har en klar ambition om at udvikle mig som
              full-stack udvikler.
            </p>

            <p>
              Jeg er nysgerrig af natur og elsker at forstå, hvordan ting hænger sammen – hvad enten
              det handler om at knække et problem, lære en ny teknologi eller finde en bedre måde at
              bygge en løsning på. For mig handler softwareudvikling ikke kun om at skrive kode, men
              om at skabe noget, der giver mening for dem, der skal bruge det.
            </p>

            <p>
              Som person er jeg energisk, lyttende og engageret i det, jeg laver. Jeg sætter stor
              pris på samarbejde, sparring og videndeling og trives bedst i et team, hvor vi spiller
              hinanden gode, arbejder mod et fælles mål og samtidig har plads til humor undervejs.
            </p>

            <p>
              Min vej ind i softwareudvikling har ikke været helt traditionel. Jeg har tidligere
              arbejdet med digital marketing, og den erfaring tager jeg stadig med mig. Den har lært
              mig at tænke i mennesker, brugeroplevelser og forretningsmæssige behov – perspektiver,
              som jeg i dag kombinerer med det tekniske.
            </p>
          </div>
        </div>

        {/* Right: image / pixel transition */}
        <div className="flex min-w-0 justify-center md:w-1/2">
          <figure className="relative w-full max-w-96 pt-16 lg:max-w-112">
            <figcaption className="text-signal pointer-events-none absolute top-0 left-0 flex w-full items-start justify-end gap-3">
              <span className="pt-1 font-mono text-xs tracking-wide">
                <span className="portrait-hover-hint">Hold musen over mig</span>
                <span className="portrait-touch-hint">Tryk på mig</span>
              </span>
              <svg
                className="h-14 w-14 shrink-0"
                viewBox="0 0 56 56"
                fill="none"
                aria-hidden="true">
                <path
                  d="M4 8H24L42 26V50M34 42L42 50L50 42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="miter"
                />
              </svg>
            </figcaption>
            <PixelTransition
              firstContent={<img src={portraitImg} alt="Portræt af Burak" />}
              secondContent={
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: '#111',
                  }}>
                  <img src={pixelImg} alt="Portræt af Burak" />
                </div>
              }
              gridSize={24}
              pixelColor="#526b91"
              animationStepDuration={0.4}
              className="custom-pixel-card"
              style={{ width: '100%' }}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
