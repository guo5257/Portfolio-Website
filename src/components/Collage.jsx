import React from 'react'
import { collageTiles, projects } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

export default function Collage({ onPreview }) {
  return (
    <section id="overview" className="collage-screen" aria-labelledby="collage-title">
      <div className="page-wrap">
        <SectionLabel number="04" english="WORK OVERVIEW" chinese="整体展示" light />
        <div className="collage-field">
          <div className="collage-center">
            <span>VISUAL ARCHIVE / 2024—2026</span>
            <h2 id="collage-title">整体展示</h2>
            <p>灵感散落其间，作品各有方向。</p>
          </div>

          {collageTiles.map((tile, index) => {
            const project = projects.find((item) => item.id === tile.projectId)
            const className = 'collage-tile collage-tile-' + (index + 1)

            if (!project) {
              return (
                <div className={className + ' is-placeholder'} key={tile.id}>
                  <span>{tile.placeholder}</span>
                  <small>作品素材待补充</small>
                </div>
              )
            }

            return (
              <button
                type="button"
                className={className}
                key={tile.id}
                onClick={() => onPreview(project)}
                aria-label={'放大查看 ' + project.title}
              >
                <img src={project.image} alt="" loading="lazy" />
                <span>{project.number} / {project.title}</span>
              </button>
            )
          })}
        </div>
        <a className="collage-next" href="#projects">查看重点项目 <span aria-hidden="true">↘</span></a>
      </div>
    </section>
  )
}
