import TerminalIntro from './TerminalIntro';

export default function Hero() {
  return (
    <div className="container-wide">
      <div className="flex flex-col gap-10 py-8 md:py-12 lg:flex-row lg:items-start">
        {/* Left: text (50%) */}
        <div className="min-w-0 lg:w-1/2">
          <div className="stack">
            <h1>Burak Gültekin</h1>

            <p className="text-2xl leading-none font-semibold text-teal-500 md:text-3xl">
              Datamatiker og <span className="whitespace-nowrap">digital marketing-konsulent</span>
            </p>

            <p className="font-semibold">
              Hey, Burak her 👋🏻 Jeg studerer softwareudvikling, elsker digitale løsninger og brænder
              for kreative udfordringer. Samtidig hjælper jeg virksomheder med at styrke deres
              digitale tilstedeværelse som digital marketing-konsulent.
            </p>

            <p className="font-semibold">
              Velkommen til mit personlige site – tag et kig rundt, og lær mig (og mine projekter)
              lidt bedre at kende.
            </p>
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
