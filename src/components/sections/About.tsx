import portraitImg from '../../assets/images/AC5I8880C2.jpg';
import pixelImg from '../../assets/images/ChatGPT Image Oct 2, 2025, 01_09_44 PM.png';
import PixelTransition from '../ui/PixelTransition';

export default function About() {
  return (
    <div className="container-wide">
      <div className="flex flex-col gap-10 md:flex-row md:items-start">
        {/* Left: text */}
        <div className="min-w-0 md:w-1/2">
          <div className="stack">
            <h2>Om mig</h2>

            <p>
              Mit navn er Burak, jeg er 27 år og i gang med at uddanne mig til datamatiker – med en
              klar ambition om at blive full-stack udvikler. Jeg er drevet af nysgerrighed og en
              lyst til at eksperimentere med nye teknologier og bygge løsninger, der gør en forskel
              for mennesker.
            </p>

            <p>
              Jeg er på udkig efter en praktikplads, hvor jeg kan bringe mine færdigheder i spil og
              blive en del af et team, der brænder for godt kodehåndværk og samarbejde. Jeg trives
              allerbedst i fællesskaber med både faglighed og humor – hvor man spiller hinanden gode
              og ikke glemmer at have det sjovt undervejs.
            </p>
          </div>
        </div>

        {/* Right: image / pixel transition */}
        <div className="flex min-w-0 justify-center md:w-1/2 md:justify-end">
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
            pixelColor="#14b8a6"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
        </div>
      </div>
    </div>
  );
}
