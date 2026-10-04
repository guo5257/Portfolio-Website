import React from 'react'

export default function WorkVisual({ work, className = '' }) {
  return (
    <div className={`work-visual aspect-${work.aspect} ${className}`}>
      {work.image ? (
        <img src={work.image} alt={work.label} loading="lazy" />
      ) : (
        <div className="placeholder-art" aria-hidden="true">
          <span className="placeholder-cross">+</span>
          <span className="placeholder-caption">IMAGE SPACE</span>
        </div>
      )}
    </div>
  )
}
