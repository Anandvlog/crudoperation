import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150',
    isActive
      ? 'bg-blue-700/10 text-blue-700 hover:bg-blue-700/[0.14] hover:text-blue-800'
      : 'text-slate-600 hover:bg-slate-900/[0.06] hover:text-slate-900',
  ].join(' ')

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/[0.08] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-4 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5">
        <Link
          to="/"
          className="text-center text-lg font-bold tracking-tight text-slate-900 hover:text-blue-700 sm:text-left"
        >
          CRUD Operation
        </Link>
        <nav
          className="flex flex-1 justify-center sm:justify-end"
          aria-label="Main navigation"
        >
          <ul className="flex flex-wrap items-center justify-center gap-1 sm:justify-end">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className={navLinkClass}>
                Service
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
