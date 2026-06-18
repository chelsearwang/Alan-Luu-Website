'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ContentPanel from '@/components/ContentPanel'

export default function Home() {
  const [isMusicMode, setIsMusicMode] = useState(false)

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: isMusicMode ? 'var(--bg-music)' : 'var(--bg-content)',
        color: isMusicMode ? 'var(--text-music)' : 'var(--text-content)',
      }}
    >
      {/* Left side content */}
      <ContentPanel isMusicMode={isMusicMode} />

      {/* Right side — avatar/logo placeholder for now */}
      <div className="absolute top-0 right-0 w-[45%] h-[calc(100vh-96px)] flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
          avatar
        </div>
      </div>

      {/* Bottom navbar */}
      <Navbar isMusicMode={isMusicMode} onToggle={() => setIsMusicMode(prev => !prev)} />
    </main>
  )
}