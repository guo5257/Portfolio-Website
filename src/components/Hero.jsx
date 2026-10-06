import React from 'react'
import { ArrowDownIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero-screen" aria-labelledby="hero-title">
      <div className="hero-side-label hero-side-left">
        <span>视觉设计师，持续探索画面与体验之间的可能。</span>
      </div>

      <div className="hero-art" data-media-slot="hero">
        <img
          src="/images/portfolio-cover.jpg"
          alt="黄色与透明材质组合的钥匙扣视觉作品"
          fetchPriority="high"
        />
        <span className="hero-art-index">ARCHIVE OBJECT / 001</span>
      </div>

      <div className="hero-side-label hero-side-right">
        <span id="hero-title">TIAN</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <a className="hero-scroll" href="#profile">
        <span>向下滚动</span>
        <ArrowDownIcon />
      </a>
    </section>
  )
}
