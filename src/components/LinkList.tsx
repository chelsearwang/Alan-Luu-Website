type Link = {
  label: string
  url: string
}

type Props = {
  links: Link[]
}

export default function LinkList({ links }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {links.map(link => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:opacity-80"
          style={{ border: '1px solid var(--muted-content)44' }}
        >
          <span className="font-medium text-sm">{link.label}</span>
          <span className="text-xs opacity-40">↗</span>
        </a>
      ))}
    </div>
  )
}