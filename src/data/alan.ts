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
  { label: 'YouTube',   url: 'https://youtube.com/@yourchannel' },
  { label: 'Instagram', url: 'https://instagram.com/yourusername' },
  { label: 'Other Platform idk',    url: 'https://tiktok.com/@yourusername' },
]

export const musicLinks = [
  { label: 'Spotify',     url: 'https://open.spotify.com/artist/id' },
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
    title: 'Track One',
    description: 'Album Name · 2024',
    src: '/music/track-one.mp3', // put mp3s in /public/music/
  },
  {
    id: 2,
    title: 'Track Two',
    description: 'Single · 2024',
    src: '/music/track-two.mp3',
  },
  {
    id: 3,
    title: 'Track Three',
    description: 'EP Title · 2023',
    src: '/music/track-three.mp3',
  },
]