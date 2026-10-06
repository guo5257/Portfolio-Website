import React, { useState } from 'react'
import { projects, services, testimonials } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

export default function ServicesProof({ onPreview }) {
  const [activeService, setActiveService] = useState(0)
  const [activeQuote, setActiveQuote] = useState(0)
  const quote = testimonials[activeQuote]
  const service = services[activeService]
  const preview = projects.find((project) => project.id === service.previewProjectId)

  return (
    <section id="services" className="services-screen" aria-labelledby="services-title">
      <div className="page-wrap">
        <SectionLabel number="06" english="SERVICES & WORDS" chinese="服务与评价" light />
        <div className="services-layout">
          <div className="services-quote">
            <div className="quote-topline">
              <span>客户评价 / 占位内容</span>
              <span>{quote.id} / {String(testimonials.length).padStart(2, '0')}</span>
            </div>
            <div className="quote-controls">
              <button
                type="button"
                onClick={() => setActiveQuote((activeQuote - 1 + testimonials.length) % testimonials.length)}
                aria-label="上一条评价"
              >←</button>
              <button
                type="button"
                onClick={() => setActiveQuote((activeQuote + 1) % testimonials.length)}
                aria-label="下一条评价"
              >→</button>
            </div>
            <blockquote>{quote.quote}</blockquote>
            <div className="quote-author">
              <span className="quote-avatar" aria-hidden="true">?</span>
              <span><strong>{quote.name}</strong><small>{quote.role}</small></span>
            </div>
            <p className="quote-disclaimer">收到真实评价与使用授权后替换。</p>
          </div>

          <div className="services-list">
            <p className="micro-label">WHAT I CAN HELP WITH</p>
            <h2 id="services-title" className="sr-only">服务方向</h2>
            {services.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={activeService === index ? 'service-choice is-active' : 'service-choice'}
                aria-pressed={activeService === index}
                onClick={() => setActiveService(index)}
              >
                <small>{item.number}</small>
                <span>{item.title}</span>
                <i aria-hidden="true">↗</i>
              </button>
            ))}
            <p className="service-description">{service.en} / {service.detail}</p>
          </div>

          <div className="services-preview">
            <button
              type="button"
              onClick={() => onPreview(preview)}
              aria-label={'放大查看 ' + preview.title}
            >
              <img src={preview.image} alt="" loading="lazy" />
              <span>相关作品预览 ↗</span>
            </button>
            <small>{preview.title}</small>
          </div>
        </div>
      </div>
    </section>
  )
}
