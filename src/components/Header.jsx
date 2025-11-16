import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/issues', label: 'Issues' },
  { to: '/articles', label: 'Articles' },
  { to: '/submit', label: 'Submit Paper' },
  { to: '/editorial-board', label: 'Editorial Board' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600"></div>
            <span className="font-semibold text-slate-900 tracking-tight">E-Planet Journal</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-slate-900'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button className="md:hidden p-2" aria-label="Open Menu" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block text-sm font-medium ${isActive ? 'text-blue-700' : 'text-slate-700'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
