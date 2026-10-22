import { Link } from '@/components/ui/link';
import { buttonStyles } from '@/components/ui/Button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import TerminalIntro from './TerminalIntro';
import HeroDotGrid from './HeroDotGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <>
      <HeroDotGrid />
      <div className="container-wide relative z-10">
        <div className="flex flex-col gap-10 py-8 md:py-12 lg:flex-row lg:items-center">
          {/* Left: text (50%) */}
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-[6px] min-w-0 motion-safe:duration-[600ms] lg:w-1/2">
            <div className="stack">
              <Heading level={1} className="text-4xl md:text-6xl">
                Burak Gültekin<span className="text-primary-subtle-fg">.</span>
              </Heading>

              <Text className="text-fg text-2xl leading-snug font-semibold md:text-3xl">
                Softwareudvikler og <span className="">cand.merc i marketing</span>
              </Text>

              <Text className="text-muted-fg">
                Hey, Burak her 👋🏻 Jeg er frontendudvikler med en forkærlighed for kreative
                udfordringer, gode brugeroplevelser og digitale løsninger, der gør en forskel. Jeg
                elsker at omsætte idéer til noget, der både ser godt ud og fungerer i praksis.
              </Text>

              <Text className="text-muted-fg">
                Velkommen til mit personlige site – tag et kig rundt, og lær mig (og mine projekter)
                lidt bedre at kende.
              </Text>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="#contact" className={buttonStyles({ intent: 'primary', size: 'lg' })}>
                  <FontAwesomeIcon icon={faCommentDots} aria-hidden="true" />
                  Lad os tage en snak
                </Link>
                <Link
                  href="#projects"
                  className={buttonStyles({
                    intent: 'outline',
                    size: 'lg',
                  })}>
                  Se mine projekter
                </Link>
              </div>
            </div>
          </div>

          {/* Right: terminal (50%) */}
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-[6px] motion-safe:fill-mode-backwards min-w-0 motion-safe:duration-[600ms] motion-safe:[animation-delay:100ms] lg:w-1/2">
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
    </>
  );
}
