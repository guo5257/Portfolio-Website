import React from 'react'

export default function SectionLabel({ number, english, chinese, light = false }) {
  return (
    <div className={light ? 'section-label is-light' : 'section-label'}>
      <span>{number} / {english}</span>
      <span>{chinese}</span>
    </div>
  )
}
