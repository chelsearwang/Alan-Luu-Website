'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContentPanel from '@/components/ContentPanel'

type Section = 'about' | 'works' | 'links'

export default function Home() {
  const [isMusicMode, setIsMusicMode] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('about')

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: isMusicMode ? 'var(--bg-music)' : 'var(--bg-content)',
        color: isMusicMode ? 'var(--text-music)' : 'var(--text-content)',
      }}
    >
      <ContentPanel isMusicMode={isMusicMode} activeSection={activeSection} />

      {/* Right side avatar placeholder */}
      <div className="absolute top-0 right-0 w-[45%] h-[calc(100vh-96px)] flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
          avatar
        </div>
      </div>

      <Navbar
        isMusicMode={isMusicMode}
        onToggle={() => setIsMusicMode(prev => !prev)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </main>
  )
}