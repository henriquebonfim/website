import { SECTION_ITEMS, SOCIAL_LINKS } from '#/shared/constants';
import { SocialMedia } from '#/widgets/social-badges';
import { ToolsCarousel } from '#/widgets/tools-carousel';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import type { FC } from 'react';
import Terminal from '../ui/terminal';

export const Profile: FC = () => (
  <aside className="min-w-60 lg:col-span-1">
    <section id={SECTION_ITEMS.PROFILE}>
      <Terminal title="Hello World!">
        <article
          className="prose prose-img:m-0 prose-h1:m-0 prose-h3:m-0 prose-sm md:prose-base justify-cente mx-auto flex flex-col items-center text-center font-serif"
          aria-label="Henrique Profile"
        >
          <div className="avatar my-3">
            <div className="ring-primary ring-offset-base-100 w-33 rounded-full ring-1 ring-offset-1">
              <img
                src={SOCIAL_LINKS.IMAGE}
                alt={t`Henrique photo`}
                title={t`This is me!`}
                className="transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          <h1>Henrique Bonfim</h1>
          <h3>
            <Trans>Senior Software Engineer</Trans>
          </h3>
          <div className="not-prose m-3">
            <SocialMedia />
          </div>
          <h5>
            <Trans>
              Leveraging <i>GenAI</i> to drive <b>next-generation solutions.</b>
            </Trans>
          </h5>
        </article>
        <ToolsCarousel />
      </Terminal>
    </section>
  </aside>
);
