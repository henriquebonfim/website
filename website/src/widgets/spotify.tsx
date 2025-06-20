import { EMBED, SECTION_ITEMS } from '#/shared/constants';
import type { FC, HTMLAttributes } from 'react';

/**
 * Props for SpotifyWidget component.
 */
export type SpotifyWidgetProps = HTMLAttributes<HTMLIFrameElement>;

/**
 * Spotify playlist embed widget.
 * Renders an accessible, responsive Spotify embed section.
 * @param props - HTML section props
 * @returns JSX.Element
 */
export const SpotifyWidget: FC<SpotifyWidgetProps> = ({
  className = '',
  ...rest
}) => (
  <section
    id={SECTION_ITEMS.SPOTIFY}
    aria-label="Spotify Playlist Section"
    tabIndex={0}
    className={`w-full ${className}`.trim()}
  >
    <iframe
      {...rest}
      src={EMBED.SPOTIFY}
      width="100%"
      height="600"
      frameBorder={0}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Playlist"
      className="w-full rounded-2xl border-2 border-[#c3c3c333] bg-[#102850] shadow shadow-stone-600"
      aria-label="Spotify Playlist Embed"
      tabIndex={-1}
    />
  </section>
);
