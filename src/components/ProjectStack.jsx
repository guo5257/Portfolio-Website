import React from 'react'
import { projects } from '../data.js'
import SectionLabel from './SectionLabel.jsx'

export default function ProjectStack({ onPreview }) {
  return (
    <section id="projects" className="projects-screen" aria-labelledby="projects-title">
      <div className="page-wrap">
        <SectionLabel number="05" english="SELECTED PROJECTS" chinese="重点项目" />
        <div className="projects-intro">
          <h2 id="projects-title">重点<span>项目</span></h2>
          <p>向下滚动，逐页翻阅作品档案。<br />向上滚动，可重新展开。</p>
        </div>

        <div className="projects-stack">
          {projects.map((project, index) => (
            <article
              className="project-panel"
              key={project.id}
              style={{ '--stack-index': index, zIndex: index + 1 }}
            >
              <div className="project-tab">
                <span>{project.number} / {String(projects.length).padStart(2, '0')}</span>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-body">
                <div className="project-copy">
                  <span>PROJECT FILE / {project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button type="button" onClick={() => onPreview(project)}>
                    放大查看作品 <span aria-hidden="true">↗</span>
                  </button>
                </div>
                <button
                  className="project-media"
                  type="button"
                  onClick={() => onPreview(project)}
                  aria-label={'放大查看 ' + project.title}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-end">END OF SELECTED PROJECTS / 04</div>
      </div>
    </section>
  )
}
