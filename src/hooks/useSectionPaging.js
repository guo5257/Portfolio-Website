import { useEffect } from 'react'

const sectionIds = ['hero', 'about', 'featured', 'more-work']

export function scrollToSection(id) {
  const section = document.getElementById(id)
  if (!section) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

export function useSectionPaging() {
  useEffect(() => {
    let lockedUntil = 0
    let touchStartY = null
    let wheelSum = 0

    const activeStage = () => {
      const sections = sectionIds.slice(0, 3).map((id) => document.getElementById(id))
      return sections.findIndex((section) => section && Math.abs(section.getBoundingClientRect().top) < 70)
    }

    const page = (direction) => {
      if (Date.now() < lockedUntil) return false
      const index = activeStage()
      if (index < 0) return false
      const next = index + direction
      if (next < 0 || next >= sectionIds.length) return false
      lockedUntil = Date.now() + 850
      scrollToSection(sectionIds[next])
      return true
    }

    const onWheel = (event) => {
      if (event.ctrlKey || event.target.closest('[data-no-page-scroll]')) return
      if (Date.now() < lockedUntil) {
        event.preventDefault()
        return
      }
      if (activeStage() < 0) return
      // 累积触控板的细小滚动量，一次手势只翻一屏。
      wheelSum += event.deltaY
      if (Math.abs(wheelSum) < 24) {
        event.preventDefault()
        return
      }
      const direction = Math.sign(wheelSum)
      wheelSum = 0
      if (page(direction) || Date.now() < lockedUntil) event.preventDefault()
    }

    const onTouchStart = (event) => {
      touchStartY = event.touches.length === 1 && !event.target.closest('[data-no-page-scroll]') ? event.touches[0].clientY : null
    }
    const onTouchMove = (event) => {
      if (touchStartY !== null && (activeStage() >= 0 || Date.now() < lockedUntil)) event.preventDefault()
    }
    const onTouchEnd = (event) => {
      if (touchStartY === null || event.changedTouches.length !== 1) return
      const distance = touchStartY - event.changedTouches[0].clientY
      touchStartY = null
      if (Math.abs(distance) > 55) page(Math.sign(distance))
    }
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('button, a, input, textarea, [data-no-page-scroll]')) return
      if (event.key === 'PageDown' || event.key === 'ArrowDown') {
        if (page(1)) event.preventDefault()
      } else if (event.key === 'PageUp' || event.key === 'ArrowUp') {
        if (page(-1)) event.preventDefault()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}
