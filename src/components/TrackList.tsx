'use client'

import { useState, useRef } from 'react'
import { tracks } from '@/data/alan'

type AudioState = {
  trackId: number
  currentTime: number // how many seconds into track
  duration: number
}

export default function TrackList() {
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [audioState, setAudioState] = useState<AudioState | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function handlePlay(track: typeof tracks[0]) {
    // click on track alr playing -> pause it
    if (playingId === track.id) {
      audioRef.current?.pause()
      setPlayingId(null)
    } else {
      if (expandedId === track.id && audioRef.current && audioState?.trackId === track.id) {
        // paused track that's expanded -> resume playing
        audioRef.current.play()
        setPlayingId(track.id)
      } else {
        // new track — stop old, load new
        audioRef.current?.pause()
        const audio = new Audio(track.src)

        audio.onloadedmetadata = () => {  // set duration
          setAudioState({ trackId: track.id, currentTime: 0, duration: audio.duration })
        }

        audio.ontimeupdate = () => {  // move dot
          setAudioState({ trackId: track.id, currentTime: audio.currentTime, duration: audio.duration })
        }

        audio.onended = () => { // track ends, reset everything
          setPlayingId(null)
          setAudioState(prev => prev ? { ...prev, currentTime: 0 } : null)
        }

        audio.play()
        audioRef.current = audio
        setPlayingId(track.id)
        setExpandedId(track.id)
      }
    }
  }

  // expand and close track
  function handleToggleExpand(trackId: number) {
    if (expandedId === trackId) {
      audioRef.current?.pause()
      setPlayingId(null)
      setExpandedId(null)
      setAudioState(null)
    } else {
      setExpandedId(trackId)
    }
  }
  // update scrubber if dragged
  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
      setAudioState(prev => prev ? { ...prev, currentTime: newTime } : null)
    }
  }

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col gap-3">
      {tracks.map(track => {
        const isPlaying = playingId === track.id
        const isExpanded = expandedId === track.id

        // only use audioState if it belongs to this track
        const trackAudio = audioState?.trackId === track.id ? audioState : null
        // track what percent of the song has played
        const progress = trackAudio && trackAudio.duration > 0
          ? (trackAudio.currentTime / trackAudio.duration) * 100
          : 0

        return (
          <div
            key={track.id}
            className="flex flex-col gap-3 p-4 rounded-xl border transition-all duration-300"
            style={{
              backgroundColor: 'var(--panel-music)',
              borderColor: isExpanded ? 'var(--accent-music)' : 'var(--muted-music)44',
            }}
          >
            {/* Top row */}
            <div className="flex items-center gap-4">

              <button
                onClick={() => handlePlay(track)}
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: isPlaying ? 'var(--accent-music)' : 'var(--muted-music)44',
                  color: 'var(--text-music)',
                }}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: 'var(--text-music)' }}>
                  {track.title}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--muted-music)' }}>
                  {track.description}
                </p>
              </div>

              <button
                onClick={() => handleToggleExpand(track.id)}
                className="w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 text-xs"
                style={{
                  color: isExpanded ? 'var(--accent-music)' : 'var(--muted-music)',
                  backgroundColor: isExpanded ? 'var(--accent-music-dim)' : 'transparent',
                }}
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
              >
                {isExpanded ? '▲' : '▼'}
              </button>

            </div>

            {/* Scrubber */}
            {isExpanded && (
              <div className="flex flex-col gap-1 px-1">
                <div className="relative w-full h-5 flex items-center">

                  <div
                    className="absolute w-full h-[2px] rounded-full"
                    style={{ backgroundColor: 'var(--muted-music)' }}
                  />

                  <div
                    className="absolute h-[2px] rounded-full"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: 'var(--accent-music)',
                    }}
                  />

                  <div
                    className="absolute w-3 h-3 rounded-full shadow-md"
                    style={{
                      left: `calc(${progress}% - 6px)`,
                      backgroundColor: 'var(--accent-music)',
                    }}
                  />

                  <input
                    type="range"
                    min={0}
                    max={trackAudio?.duration || 0}
                    step={0.1}
                    value={trackAudio?.currentTime || 0}
                    onChange={handleSeek}
                    className="absolute w-full opacity-0 cursor-pointer h-5"
                  />
                </div>

                <div className="flex justify-between text-xs" style={{ color: 'var(--muted-music)' }}>
                  <span>{formatTime(trackAudio?.currentTime || 0)}</span>
                  <span>{formatTime(trackAudio?.duration || 0)}</span>
                </div>
              </div>
            )}

          </div>
        )
      })}
    </div>
  )
}