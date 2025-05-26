import { SECTION_ITEMS, SOCIAL_LINKS } from '#/shared/constants';
import { Trans } from '@lingui/react/macro';
import type { FC } from 'react';
import { SocialMedia } from './social-media';
import { Terminal } from './terminal';
import { ToolsCarousel } from './tools-carousel';

export const Profile: FC = () => {
  return (
    <section id={SECTION_ITEMS.PROFILE}>
      <Terminal>
        <article className="prose prose-img:m-1 prose-h1:m-0 prose-h3:m-0 prose-sm md:prose-base justify-cente mx-auto flex flex-col items-center text-center font-serif">
          <img
            src={SOCIAL_LINKS.IMAGE}
            alt="Henrique's photo"
            title="This is me!"
            className="border-neutral h-33 w-33 rounded-2xl border transition-all duration-300 hover:scale-105"
          />
          <h1>Henrique Bonfim</h1>
          <h3>Senior Software Engineer</h3>
          <div className="not-prose m-3">
            <SocialMedia />
          </div>
          <h5>
            <Trans>
              Leveraging<i>GenAI</i> to drive <b>next-generation solutions.</b>
            </Trans>
          </h5>
        </article>
        <ToolsCarousel />
      </Terminal>
    </section>
  );
};
