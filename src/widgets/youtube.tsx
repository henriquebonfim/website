import { SECTION_ITEMS } from '#/shared/constants';
import type { FC, HTMLAttributes } from 'react';

/**
 * Props for YoutubeWidget component.
 * @property url - The YouTube embed URL (required)
 * @property className - Optional custom class names for the section
 * @property height - Optional height for the iframe element
 */
interface YoutubeWidgetProps extends HTMLAttributes<HTMLIFrameElement> {
  url: string;
  height?: string | number;
}

/**
 * Youtube video embed widget.
 * Renders an accessible, responsive YouTube embed section.
 * @param props - YoutubeWidgetProps
 * @returns JSX.Element
 */
export const YoutubeWidget: FC<YoutubeWidgetProps> = ({ className, url }) => (
  <section
    id={SECTION_ITEMS.YOUTUBE}
    className={className}
    aria-label="YouTube Video Section"
    tabIndex={0}
  >
    <iframe
      height="100%"
      className="aspect-video rounded-lg border-1 border-[#333333] bg-[#131313] shadow-lg"
      id="ytplayer"
      width="100%"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      sandbox="allow-scripts allow-same-origin allow-presentation"
      loading="lazy"
      allowFullScreen
      title="YouTube Video"
      aria-label="YouTube Video Embed"
      tabIndex={-1}
    />
  </section>
);
