import React from 'react'
import { contactDetails } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

export default function ContactOutro() {
  return (
    <section id="contact" className="contact-screen" aria-labelledby="contact-title">
      <div className="page-wrap">
        <SectionLabel number="07" english="ABOUT & CONTACT" chinese="联系我" light />
        <div className="contact-layout grid grid-cols-1 lg:grid-cols-2">
          <div className="contact-copy">
            <p className="micro-label">DESIGNER / TIAN</p>
            <h2 id="contact-title">一起做些<br /><em>有意思的事。</em></h2>
            <p className="contact-description">
              我是小田仙人，专注于视觉创意与互动体验。
              如果你正在寻找合作伙伴，欢迎留下你的想法。
            </p>

            <dl className="contact-details">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="contact-image">
            <img src="/images/portfolio-cover.jpg" alt="钥匙扣代表作品的灰度图像" loading="lazy" />
            <span>OBJECT / 001</span>
          </div>
        </div>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} TIAN</span>
          <span>VISUAL DESIGN PORTFOLIO</span>
          <a href="#home">返回顶部 ↑</a>
        </footer>
      </div>
    </section>
  )
}
