import React, { useEffect, useState } from 'react'
import { CloseIcon, MinusIcon, PlusIcon } from './Icons.jsx'
import WorkVisual from './WorkVisual.jsx'

export default function Lightbox({ work, onClose }) {
  const title = work?.title || work?.label || '作品'
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState(null)

  useEffect(() => {
    if (!work) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === '+' || event.key === '=') setZoom((value) => Math.min(3, +(value + 0.25).toFixed(2)))
      if (event.key === '-') setZoom((value) => Math.max(1, +(value - 0.25).toFixed(2)))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = oldOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [work, onClose])

  useEffect(() => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }, [work])

  if (!work) return null

  const changeZoom = (nextZoom) => {
    const clamped = Math.max(1, Math.min(3, nextZoom))
    setZoom(clamped)
    if (clamped === 1) setOffset({ x: 0, y: 0 })
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} 图片预览`} data-no-page-scroll onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="lightbox-toolbar">
        <span>{title}</span>
        <div className="lightbox-actions">
          <button type="button" onClick={() => changeZoom(zoom - 0.25)} aria-label="缩小图片" disabled={zoom <= 1}><MinusIcon /></button>
          <span aria-live="polite">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => changeZoom(zoom + 0.25)} aria-label="放大图片" disabled={zoom >= 3}><PlusIcon /></button>
          <button type="button" className="lightbox-close" onClick={onClose} aria-label="关闭预览"><CloseIcon /></button>
        </div>
      </div>
      <div className="lightbox-stage" onWheel={(event) => { if (event.ctrlKey) { event.preventDefault(); changeZoom(zoom + (event.deltaY < 0 ? 0.25 : -0.25)) } }}>
        <div
          className={`lightbox-image ${zoom > 1 ? 'is-zoomed' : ''}`}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}
          onPointerDown={(event) => {
            if (zoom === 1) return
            event.currentTarget.setPointerCapture(event.pointerId)
            setDragStart({ x: event.clientX - offset.x, y: event.clientY - offset.y })
          }}
          onPointerMove={(event) => {
            if (!dragStart) return
            setOffset({ x: event.clientX - dragStart.x, y: event.clientY - dragStart.y })
          }}
          onPointerUp={() => setDragStart(null)}
          onPointerCancel={() => setDragStart(null)}
        >
          {work.image ? <img className="lightbox-real-image" src={work.image} alt={title} /> : <WorkVisual work={work} />}
        </div>
      </div>
      <p className="lightbox-hint">拖动查看放大区域 · ESC 关闭</p>
    </div>
  )
}
