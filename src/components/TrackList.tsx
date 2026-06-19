'use client'

import { useState, useRef } from 'react'
import { tracks } from '@/data/alan'

export default function TrackList() {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function handlePlay(track: typeof tracks[0]) {
    if (playingId === track.id) {
      audioRef.current?.pause()
      setPlayingId(null)
    } else {
      audioRef.current?.pause()
      const audio = new Audio(track.src)
      audio.play()
      audioRef.current = audio
      setPlayingId(track.id)
      audio.onended = () => setPlayingId(null)
    }
  }

   return (
    <div className="flex flex-col gap-3">
      {tracks.map(track => (
        <div
          key={track.id}
          className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
          style={{
            backgroundColor: 'var(--panel-music)',
            borderColor: playingId === track.id ? 'var(--accent-music)' : 'var(--muted-music)44',
          }}
        >
          <button
            onClick={() => handlePlay(track)}
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              backgroundColor: playingId === track.id ? 'var(--accent-music)' : 'var(--muted-music)44',
              color: 'var(--text-music)',
            }}
          >
            {playingId === track.id ? '⏸' : '▶'}
          </button>

          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--text-music)' }}>
              {track.title}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted-music)' }}>
              {track.description}
            </p>
          </div>

          {playingId === track.id && (
            <div className="ml-auto text-xs" style={{ color: 'var(--accent-music)' }}>
              playing
            </div>
          )}
        </div>
      ))}
    </div>
  )
}