import { API, SECTION_ITEMS } from '#/shared/constants';
import type { FC } from 'react';

export const YoutubeWidget: FC = () => {
  return (
    <section
      id={SECTION_ITEMS.YOUTUBE}
      className="flex h-full w-full flex-col gap-4"
    >
      <iframe
        className="rounded-lg border-3 border-[#333333] bg-[#131313] shadow-lg"
        id="ytplayer"
        width="100%"
        height="500"
        src={API.YOUTUBE_EMBED}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
};
