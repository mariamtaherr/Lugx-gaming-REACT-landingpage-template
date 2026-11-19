import { useState } from 'react'

const links = [
  { name: 'Home', id: 'home' },
  { name: 'Our Shop', id: 'shop' },
  { name: 'Product Details', id: 'details' },
  { name: 'Contact Us', id: 'contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  function goToSection(id) {
    document.getElementById(id).scrollIntoView()
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 rounded-b-[20px] bg-lugx-blue py-1">
      <div className="mx-auto flex h-[70px] w-full max-w-[1320px] items-center justify-between px-4 lg:h-[80px]">
        <button onClick={() => goToSection('home')} className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" >
            <circle cx="18" cy="18" r="18" fill="white" />
            <path d="M10 10 L26 26 M26 10 L10 26" stroke="#0a72f1" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span className="text-[22px] font-bold text-white">LUGX</span>
        </button>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className={
                'rounded-full px-4 py-2 text-[13px] font-extralight text-white transition-all duration-300 hover:bg-white/15 lg:px-5 lg:text-sm ' +
                (activeId === link.id ? 'bg-white/15' : '')
              }
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => alert('Sign in is not available in this demo')}
            className="ml-3 rounded-full bg-lugx-red px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase transition-all duration-300 "
          >
            Sign In
          </button>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 p-2 md:hidden" aria-label="Menu">
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 rounded-b-[20px] px-4 pb-5 md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="rounded-full px-4 py-2.5 text-left text-sm font-medium text-white transition-all duration-300 "
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => alert('Sign in is not available in this demo')}
            className="mt-2 w-fit rounded-full bg-lugx-red px-6 py-2.5 text-xs font-bold text-white uppercase transition-all duration-300"
          >
            Sign In
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
