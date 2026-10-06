import React, { useEffect, useState } from 'react'
import { navItems } from '../data.js'

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  return (
    <>
      <header className="site-nav">
        <a className="site-nav-home" href="#home" aria-label="返回首页">
          <span className="site-nav-square" aria-hidden="true" />
          <span className="site-nav-home-word">家</span>
          <span className="site-nav-mobile-word">TIAN</span>
        </a>

        <nav className="site-nav-desktop" aria-label="主要导航">
          {navItems.slice(1).map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button
          className="site-nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '关闭' : '菜单'}
          <span className={menuOpen ? 'nav-lines is-open' : 'nav-lines'} aria-hidden="true">
            <i /><i />
          </span>
        </button>
      </header>

      {menuOpen && (
        <nav id="mobile-menu" className="site-nav-mobile" aria-label="移动端导航">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      )}
    </>
  )
}
