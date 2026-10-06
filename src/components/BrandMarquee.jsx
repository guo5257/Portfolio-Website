import React from 'react'
import { brands } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

function BrandGroup({ duplicate = false }) {
  return (
    <div className="brand-marquee-group" aria-hidden={duplicate || undefined}>
      {brands.map((brand) => (
        <span key={brand.id} className={brand.placeholder ? 'brand-name is-placeholder' : 'brand-name'}>
          <b>{brand.name}</b>
          <small>{brand.note}</small>
        </span>
      ))}
    </div>
  )
}

export default function BrandMarquee() {
  return (
    <section id="brands" className="brands-screen" aria-label="品牌经历">
      <div className="page-wrap">
        <SectionLabel number="03" english="BRANDS" chinese="品牌经历" light />
        <p className="brands-caption">曾工作或服务的平台 / MORE TO COME</p>
      </div>
      <div className="brand-marquee-window">
        <div className="brand-marquee-track">
          <BrandGroup />
          <BrandGroup duplicate />
        </div>
      </div>
      <div className="page-wrap brands-footnote">品牌标识与更多合作信息待后续补充。</div>
    </section>
  )
}
