import { API, SECTION_ITEMS } from '#/shared/constants';
import type { FC } from 'react';

export const SpotifyWidget: FC = () => (
  <section id={SECTION_ITEMS.SPOTIFY}>
    <iframe
      src={API.SPOTIFY_EMBED}
      width="100%"
      height="600"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Playlist"
      className="w-full rounded-2xl border-2 border-[#c3c3c333] bg-[#102850] shadow shadow-stone-600"
    ></iframe>
  </section>
);
