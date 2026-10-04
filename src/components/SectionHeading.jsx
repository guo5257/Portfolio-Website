import React from 'react'

export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <h2>{title}</h2>
      {children && <div className="section-heading-extra">{children}</div>}
    </div>
  )
}
