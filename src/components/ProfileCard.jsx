import React, { useState } from 'react'
import { profileKeywords } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

export default function ProfileCard() {
  const [activeKeyword, setActiveKeyword] = useState(0)

  return (
    <section id="profile" className="profile-screen" aria-labelledby="profile-title">
      <div className="page-wrap">
        <SectionLabel number="02" english="PERSONAL FILE" chinese="个人档案" light />
        <article className="profile-card">
          <div className="profile-card-head">
            <span>FILE NO. 001 / TIAN</span>
            <span>VISUAL DESIGNER</span>
          </div>

          <div className="profile-card-main grid grid-cols-1 lg:grid-cols-2">
            <div className="profile-image">
              <img src="/images/portfolio-cover.jpg" alt="个人代表性钥匙扣作品" loading="lazy" />
              <span>OBJECT STUDY / 001</span>
            </div>

            <div className="profile-copy">
              <p className="micro-label">ABOUT THE PERSON BEHIND THE WORK</p>
              <h2 id="profile-title">小田仙人<span>TIAN</span></h2>
              <p className="profile-role">职业方向 / <strong>{profileKeywords[activeKeyword]}</strong></p>
              <p className="profile-description">
                拥有 5 年设计经验，现为抖音视觉设计师专家。
                曾服务于快手、百度等互联网公司，关注视觉语言如何连接内容与人。
              </p>
              <div className="profile-keywords" aria-label="切换职业关键词">
                {profileKeywords.map((keyword, index) => (
                  <button
                    key={keyword}
                    type="button"
                    aria-pressed={activeKeyword === index}
                    onClick={() => setActiveKeyword(index)}
                  >
                    {String(index + 1).padStart(2, '0')} {keyword}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="profile-card-foot">
            <span>所在地 / 待补充</span>
            <span>专业领域 / {String(activeKeyword + 1).padStart(2, '0')} — 03</span>
            <a href="#services">了解更多 <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </section>
  )
}
