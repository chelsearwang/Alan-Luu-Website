type Props = {
  isMusicMode: boolean
  onToggle: () => void
}

export default function Navbar({ isMusicMode, onToggle }: Props) {
  const accent = isMusicMode ? 'var(--accent-music)' : 'var(--accent-content)'
  const panel = isMusicMode ? 'var(--panel-music)' : 'var(--panel-content)'
  const muted = isMusicMode ? 'var(--muted-music)' : 'var(--muted-content)'

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 h-24 flex items-center px-8"
      style={{ background: panel, borderTop: `1px solid ${muted}44` }}
    >
      {/* Toggle button — bottom left, bigger */}
      <button
        onClick={onToggle}
        className="w-20 h-20 rounded-full font-bold text-xs tracking-widest mr-8 shrink-0 border-2"
        style={{
          background: accent,
          color: '#fff',
          borderColor: accent,
        }}
      >
        {isMusicMode ? 'MUSIC' : 'CONTENT'}
      </button>

      {/* Nav buttons — centered in remaining space */}
      <div className="flex items-center gap-4">
        <NavButton label="About" muted={muted} />
        <NavButton label="Works" muted={muted} />
        <NavButton label="Links" muted={muted} />
      </div>
    </nav>
  )
}

function NavButton({ label, muted }: { label: string; muted: string }) {
  return (
    <button
      className="h-12 px-6 rounded-full text-sm font-medium tracking-wide"
      style={{
        border: `1px solid ${muted}`,
        color: muted,
      }}
    >
      {label}
    </button>
  )
}