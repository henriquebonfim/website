import { EMBED, SECTION_ITEMS } from "#/shared/constants";
import type { FC, HTMLAttributes } from "react";

/**
 * Props for NasaWidget component.
 */
export type NasaWidgetProps = HTMLAttributes<HTMLIFrameElement>;

/**
 * Nasa Planets embed widget.
 * Renders an accessible, responsive Nasa embed section.
 * @param props - HTML section props
 * @returns JSX.Element
 */
export const NasaWidget: FC<NasaWidgetProps> = ({
  className = "",
  ...rest
}) => (
  <section
    id={SECTION_ITEMS.NASA}
    aria-label="Nasa Planets Section"
    tabIndex={0}
    className={`mx-3 mt-16 ${className}`.trim()}
  >
    <iframe
      {...rest}
      src={EMBED.NASA}
      width="100%"
      height="599"
      frameBorder={0}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen;"
      loading="lazy"
      title="Nasa "
      className="rounded-3xl border-none"
      aria-label="Nasa Planets Embed"
      tabIndex={-1}
    />
  </section>
);
