import TerminalIntro from './TerminalIntro';

export default function Hero() {
  return (
    <div className="container-wide">
      <div className="flex flex-col gap-10 py-8 md:py-12 lg:flex-row lg:items-center">
        {/* Left: text (50%) */}
        <div className="min-w-0 lg:w-1/2">
          <div className="stack">
            <h1>Burak Gültekin<span className="text-signal">.</span></h1>

            <p className="text-signal text-2xl leading-snug font-semibold text-teal-500 md:text-3xl">
              Softwareudvikler og <span className="">digital marketing-konsulent</span>
            </p>

            <p className="text-gunmetal">
              Hey, Burak her 👋🏻 Jeg er frontendudvikler med en forkærlighed for kreative udfordringer, gode brugeroplevelser og digitale løsninger, der gør en forskel. Jeg elsker at omsætte idéer til noget, der både ser godt ud og fungerer i praksis.
            </p>

            <p className="text-gunmetal">
              Velkommen til mit personlige site – tag et kig rundt, og lær mig (og mine projekter)
              lidt bedre at kende.
            </p>
            <div className="flex flex-wrap gap-3 pt-2"><a href="#projects" className="btn btn-primary">Se mine projekter ↗</a><a href="#contact" className="btn btn-outline">Lad os tage en snak</a></div>
          </div>
        </div>

        {/* Right: terminal (50%) */}
        <div className="min-w-0 lg:w-1/2">
          <TerminalIntro
            className="w-full"
            // Optional props:
            // typingSpeedMs={35}
            // lineDelayMs={300}
            // autoHideWhenDone={true}
            // onDone={() => console.log("Terminal finished")}
          />
        </div>
      </div>
    </div>
  );
}

