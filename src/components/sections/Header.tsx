import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBomb } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bg-gotham/90 sticky top-0 z-40 h-32 backdrop-saturate-150 supports-[backdrop-filter]:backdrop-blur-md">
      <nav aria-label="Main navigation">
        <div className="container-wide flex h-32 items-center justify-between py-4 md:flex-col md:justify-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <FontAwesomeIcon size="3x" icon={faBomb} />
          </a>

          {/* Mobile: hamburger */}
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm p-2 md:hidden"
            aria-controls="navbar-search"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>

          {/* Desktop: links under the logo */}
          <div id="navbar-search" className="hidden md:mt-3 md:flex">
            <ul className="flex items-center justify-center gap-2 p-0 md:gap-4">
              <li>
                <a href="/" className="nav-link md:text-xl">
                  Feed
                </a>
              </li>
              <li>
                <a href="/subs" className="nav-link md:text-xl">
                  Subs
                </a>
              </li>
              <li>
                <a href="/" className="nav-link md:text-xl">
                  Profile
                </a>
              </li>
              <li>
                <a href="/" className="nav-link md:text-xl">
                  Profile
                </a>
              </li>
              <li>
                <a href="/" className="nav-link md:text-xl">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
    </header>
  );
}
