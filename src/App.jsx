import React, { useState } from 'react'
import { featuredWorks, moreWorks } from './data.js'
import { useSectionPaging, scrollToSection } from './hooks/useSectionPaging.js'
import { ArrowDownIcon, ArrowIcon } from './components/Icons.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import WorkVisual from './components/WorkVisual.jsx'
import Lightbox from './components/Lightbox.jsx'

function Header() {
  return (
    <header className="site-header">
      <a href="#hero" className="wordmark" aria-label="回到首页">TIAN<span className="wordmark-dot">.</span></a>
      <nav aria-label="主要导航">
        <a href="#about">关于</a>
        <a href="#featured">精选作品</a>
        <a href="#more-work">更多作品</a>
        <a href="#contact">联系</a>
      </nav>
    </header>
  )
}

function Hero() {
  const [videoFailed, setVideoFailed] = useState(false)
  return (
    <section id="hero" className="hero stage" aria-label="首页">
      {!videoFailed && <video className="hero-video" src="/d.mp4" autoPlay muted loop playsInline preload="metadata" onError={() => setVideoFailed(true)} aria-hidden="true" />}
      <div className="hero-shade" />
      <Header />
      <div className="hero-content page-container">
        <p className="hero-kicker">VISUAL DESIGNER · PORTFOLIO</p>
        <h1>设计，让想象<br /><em>被看见。</em></h1>
        <p className="hero-caption">TIAN / 视觉设计师</p>
      </div>
      <button className="scroll-cue" type="button" onClick={() => scrollToSection('about')} aria-label="向下查看关于我">
        <span>SCROLL TO EXPLORE</span><ArrowDownIcon />
      </button>
      <div className="hero-index" aria-hidden="true">01 — 05</div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about stage">
      <div className="page-container about-grid">
        <div className="about-copy">
          <div className="eyebrow"><span className="eyebrow-line" />ABOUT ME</div>
          <h2>你好，<br />我是 <span>TIAN</span><span className="title-period">.</span></h2>
          <div className="about-body">
            <p>我是小田仙人，拥有 5 年设计经验，现为抖音视觉设计师专家。曾服务于快手、百度等互联网公司。</p>
            <p>曾担任 S 级项目「甄嬛联名礼物玩法」的设计主 S，完成 S 级项目「传说商店荣誉出口」板块的设计工作，并负责宫格 PK 赏金赛、拾光成芒等项目。</p>
          </div>
          <div className="about-meta"><span>视觉设计</span><span>品牌表达</span><span>互动体验</span></div>
        </div>
        <div className="portrait-frame" role="img" aria-label="个人照片占位区域">
          <div className="portrait-placeholder"><span className="portrait-shape" /><span>PORTRAIT / 待添加照片</span></div>
          <span className="portrait-note">DESIGNER<br />BASED IN CHINA</span>
        </div>
      </div>
    </section>
  )
}

function Featured({ onPreview }) {
  const [active, setActive] = useState(0)
  const work = featuredWorks[active]
  const move = (direction) => setActive((index) => (index + direction + featuredWorks.length) % featuredWorks.length)

  return (
    <section id="featured" className="featured stage">
      <div className="page-container featured-inner">
        <SectionHeading eyebrow="SELECTED WORKS" title="精选作品">
          <span className="featured-count">{String(active + 1).padStart(2, '0')} <i>/</i> {String(featuredWorks.length).padStart(2, '0')}</span>
        </SectionHeading>
        <div className="featured-carousel" aria-roledescription="轮播图" aria-label="精选作品">
          <button className="carousel-arrow carousel-prev" type="button" onClick={() => move(-1)} aria-label="上一张作品"><ArrowIcon /></button>
          <button className="featured-card" type="button" onClick={() => onPreview(work)} aria-label={`预览${work.label}`}>
            <WorkVisual work={work} />
            <span className="featured-card-meta"><span>{work.label}</span><span>点击预览 ↗</span></span>
          </button>
          <button className="carousel-arrow carousel-next" type="button" onClick={() => move(1)} aria-label="下一张作品"><ArrowIcon /></button>
        </div>
        <div className="carousel-footer"><span>滑动探索更多可能</span><div className="carousel-dots" aria-label="选择作品">{featuredWorks.map((item, index) => <button key={item.id} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`查看${item.label}`} aria-current={index === active ? 'true' : undefined} />)}</div></div>
      </div>
    </section>
  )
}

function MoreWork({ onPreview }) {
  return (
    <section id="more-work" className="more-work">
      <div className="page-container">
        <SectionHeading eyebrow="MORE EXPLORATIONS" title="更多作品"><span className="section-side-note">持续探索视觉表达的边界</span></SectionHeading>
        <div className="masonry-grid columns-2 md:columns-3 lg:columns-4">
          {moreWorks.map((work) => (
            <button className="masonry-card" key={work.id} type="button" onClick={() => onPreview(work)} aria-label={`预览${work.label}`}>
              <WorkVisual work={work} />
              <span className="masonry-card-label"><span>{work.label}</span><span>↗</span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="page-container">
        <SectionHeading eyebrow="GET IN TOUCH" title="一起创造下一件好作品。" />
        <div className="contact-grid grid grid-cols-2 lg:grid-cols-3">
          <div className="contact-item"><span className="contact-label">PHONE / 电话</span><span className="contact-value is-placeholder">待填写手机号</span></div>
          <div className="contact-item"><span className="contact-label">EMAIL / 邮箱</span><span className="contact-value is-placeholder">待填写邮箱地址</span></div>
          <div className="contact-item qr-item"><span className="contact-label">WECHAT / 微信</span><div className="qr-placeholder" aria-label="微信二维码占位区域"><span>QR CODE</span></div></div>
        </div>
        <footer className="site-footer"><span>© {new Date().getFullYear()} TIAN</span><button type="button" onClick={() => scrollToSection('hero')}>返回顶部 ↑</button></footer>
      </div>
    </section>
  )
}

export default function App() {
  const [previewWork, setPreviewWork] = useState(null)
  useSectionPaging()

  return <>
    <main>
      <Hero />
      <About />
      <Featured onPreview={setPreviewWork} />
      <MoreWork onPreview={setPreviewWork} />
      <Contact />
    </main>
    <Lightbox work={previewWork} onClose={() => setPreviewWork(null)} />
  </>
}
