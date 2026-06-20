export const profile = {
  name: 'Alan Luu',
  tagline: {
    content: 'Content Creator',
    music: 'Artist',
  },
  about: `insert stuff about alan yay`,
  contact: 'email',
}

export const contentLinks = [
  { label: 'YouTube',   url: 'https://www.youtube.com/@alanluuu' },
  { label: 'Instagram', url: 'https://www.instagram.com/alanluuu_/' },
  { label: 'Other Platform idk',    url: 'https://tiktok.com/@yourusername' },
]

export const musicLinks = [
  { label: 'Spotify',     url: 'https://open.spotify.com/artist/4MhAs6owaq7efiDkymW7Rs?si=j_iLAEFQSW-bL_oUeNPDgg' },
  { label: 'Apple Music', url: 'https://music.apple.com/artist/id' },
]

export const videos = [
  {
    id: 1,
    title: 'Video Title One',
    description: 'Short description of the video.',
    url: 'https://youtube.com/watch?v=VIDEO_ID',
    thumbnail: null, // add a URL or local path later
  },
  {
    id: 2,
    title: 'Video Title Two',
    description: 'Short description of the video.',
    url: 'https://youtube.com/watch?v=VIDEO_ID',
    thumbnail: null,
  },
  {
    id: 3,
    title: 'Video Title Three',
    description: 'Short description of the video.',
    url: 'https://youtube.com/watch?v=VIDEO_ID',
    thumbnail: null,
  },
]

export const tracks = [
  {
    id: 1,
    title: 'Aero Era',
    description: 'Single · 2026',
    src: '/music/AeroEra.mp3', // put mp3s in /public/music/
  },
  {
    id: 2,
    title: 'ONETWO',
    description: 'Single · 2026',
    src: '/music/ONETWO.mp3',
  },
  {
    id: 3,
    title: 'Track Three',
    description: 'EP Title · 2023',
    src: '/music/track-three.mp3',
  },
]