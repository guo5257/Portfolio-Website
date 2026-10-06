import React, { useState } from 'react'
import SiteNav from './components/SiteNav.jsx'
import Hero from './components/Hero.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import BrandMarquee from './components/BrandMarquee.jsx'
import Collage from './components/Collage.jsx'
import ProjectStack from './components/ProjectStack.jsx'
import ServicesProof from './components/ServicesProof.jsx'
import ContactOutro from './components/ContactOutro.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  const [previewProject, setPreviewProject] = useState(null)

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ProfileCard />
        <BrandMarquee />
        <Collage onPreview={setPreviewProject} />
        <ProjectStack onPreview={setPreviewProject} />
        <ServicesProof onPreview={setPreviewProject} />
        <ContactOutro />
      </main>
      <Lightbox work={previewProject} onClose={() => setPreviewProject(null)} />
    </>
  )
}
