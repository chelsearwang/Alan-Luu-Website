type Props = {
  isMusicMode: boolean
}

export default function ContentPanel({ isMusicMode }: Props) {
  return (
    <div className="absolute top-0 left-0 w-[55%] h-[calc(100vh-96px)] p-12 flex flex-col gap-6">

      <h1 className="text-8xl font-bold leading-none tracking-tight">
        ALAN<br />LUU
      </h1>

      <p className="text-sm opacity-60">
        {isMusicMode ? 'placeholder text' : 'different placeholder text'}
      </p>

      {/* Section content placeholder */}
      <div className="mt-4 p-6 rounded-xl opacity-50"
        style={{ background: isMusicMode ? 'var(--panel-music)' : 'var(--panel-content)' }}
      >
        section content goes here
      </div>
    </div>
  )
}