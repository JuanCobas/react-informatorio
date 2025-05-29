import type { Song } from "./song.type";

export const longestSongs: Song[] = [
  { id: "l1", title: "Echoes of Time", artist: "Aurora Skye", category: "Progressive Rock", duration: "10:45", picture: "echoes.jpg", album: "Timeless Horizons" },
  { id: "l2", title: "Epic Journey", artist: "Sound Horizon", category: "Instrumental", duration: "09:30", picture: "journey.jpg", album: "Odyssey" },
  { id: "l3", title: "Dreamscape", artist: "Nova Realm", category: "Ambient", duration: "08:50", picture: "dreamscape.jpg", album: "Sound of Sleep" },
  { id: "l4", title: "Celestial Voyage", artist: "Eclipse Theory", category: "Post-Rock", duration: "08:10", picture: "celestial.jpg", album: "Gravity Trails" },
  { id: "l5", title: "Timeless Fields", artist: "Chronos", category: "Electronic", duration: "07:55", picture: "timeless.jpg", album: "Digital Landscapes" },
  { id: "l6", title: "Endless Loop", artist: "Code Echo", category: "Synthwave", duration: "07:40", picture: "loop.jpg", album: "Neon Systems" },
  { id: "l7", title: "Forgotten Realms", artist: "Mythic Sound", category: "Cinematic", duration: "07:25", picture: "realms.jpg", album: "Legends Unfold" },
];

// 2. Songs from the same category (Pop)
export const sameCategorySongs: Song[] = [
  { id: "c1", title: "Shining Lights", artist: "Lena Nova", category: "Pop", duration: "03:50", picture: "shining.jpg", album: "Glow" },
  { id: "c2", title: "Summer Love", artist: "Ava Rae", category: "Pop", duration: "04:05", picture: "summer.jpg", album: "Heatwaves" },
  { id: "c3", title: "Neon Heart", artist: "Jay Vibe", category: "Pop", duration: "03:40", picture: "neon.jpg", album: "City Pulse" },
  { id: "c4", title: "Golden Days", artist: "Talia Bloom", category: "Pop", duration: "04:15", picture: "golden.jpg", album: "Retro Bloom" },
  { id: "c5", title: "Electric Touch", artist: "Kai Monroe", category: "Pop", duration: "03:55", picture: "electric.jpg", album: "Wired" },
  { id: "c6", title: "Dancing On Air", artist: "Zoe Vega", category: "Pop", duration: "04:00", picture: "dancing.jpg", album: "Rhythm & Stars" },
  { id: "c7", title: "Heartbeat", artist: "Leo Shade", category: "Pop", duration: "03:35", picture: "heartbeat.jpg", album: "Feel the Beat" },
];

// 3. Songs by a specific artist (Ariana Sun)
export const artistSongs: Song[] = [
  { id: "a1", title: "Fire Bloom", artist: "Ariana Sun", category: "R&B", duration: "03:45", picture: "firebloom.jpg", album: "Phoenix" },
  { id: "a2", title: "Velvet Sky", artist: "Ariana Sun", category: "R&B", duration: "04:00", picture: "velvetsky.jpg", album: "Blue Horizons" },
  { id: "a3", title: "Midnight Drive", artist: "Ariana Sun", category: "R&B", duration: "03:30", picture: "midnight.jpg", album: "Night Ride" },
  { id: "a4", title: "Luna's Whisper", artist: "Ariana Sun", category: "R&B", duration: "04:10", picture: "luna.jpg", album: "Moonlight Echoes" },
  { id: "a5", title: "Silver Rain", artist: "Ariana Sun", category: "R&B", duration: "03:55", picture: "silver.jpg", album: "Rain & Roses" },
  { id: "a6", title: "Crimson Veins", artist: "Ariana Sun", category: "R&B", duration: "04:05", picture: "crimson.jpg", album: "Blood & Gold" },
  { id: "a7", title: "Glass Garden", artist: "Ariana Sun", category: "R&B", duration: "03:50", picture: "garden.jpg", album: "Bloom" },
];

// 4. Most Listened Songs
export const mostListenedSongs: Song[] = [
  { id: "m1", title: "Global Hit", artist: "Nova Ray", category: "Pop", duration: "03:25", picture: "hit.jpg", album: "Supernova" },
  { id: "m2", title: "Top Stream", artist: "DJ Flux", category: "Dance", duration: "03:10", picture: "topstream.jpg", album: "Pulse" },
  { id: "m3", title: "Chart Buster", artist: "MC Blaze", category: "Hip-Hop", duration: "02:55", picture: "chartbuster.jpg", album: "Mic Drop" },
  { id: "m4", title: "Viral Sound", artist: "Echo Moon", category: "Electronic", duration: "03:20", picture: "viral.jpg", album: "Waveform" },
  { id: "m5", title: "Infinite Spin", artist: "Galaxy Beats", category: "Dance", duration: "03:30", picture: "spin.jpg", album: "Orbit" },
  { id: "m6", title: "Light Speed", artist: "Astro Pulse", category: "EDM", duration: "03:15", picture: "lightspeed.jpg", album: "Cosmic Flow" },
  { id: "m7", title: "Peak Vibes", artist: "Sky Drop", category: "Pop", duration: "03:40", picture: "peak.jpg", album: "Skyline" },
];