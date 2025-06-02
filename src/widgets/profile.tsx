import { SECTION_ITEMS, SOCIAL_LINKS } from '#/shared/constants';
import { SocialMedia } from '#/widgets/social-badges';
import { Terminal } from '#/widgets/terminal';
import { ToolsCarousel } from '#/widgets/tools-carousel';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/react/macro';
import { memo, type FC } from 'react';

export const Profile: FC = memo(() => {
  const { i18n } = useLingui();
  return (
    <aside
      className="min-w-60 lg:col-span-1"
      aria-label={i18n._(msg`Henrique Bonfim Profile on top left`)}
    >
      <section id={SECTION_ITEMS.PROFILE} role="none">
        <Terminal title="Hello World!">
          <article
            className="prose prose-img:m-0 prose-h1:m-0 prose-h2:m-0 prose-sm md:prose-base mx-auto flex flex-col items-center justify-center text-center font-serif"
            aria-label={i18n._(msg`Henrique Profile`)}
            role="article"
          >
            <figure
              className="avatar my-3"
              role="figure"
              aria-label={i18n._(msg`Henrique Avatar`)}
            >
              <div
                className="ring-primary ring-offset-base-100 w-33 rounded-full ring-1 ring-offset-1"
                role="none"
              >
                <img
                  role="img"
                  src={SOCIAL_LINKS.IMAGE}
                  alt={i18n._(msg`Henrique photo`)}
                  title={i18n._(msg`This is me!`)}
                  className="transition-all duration-300 hover:scale-105"
                />
              </div>
            </figure>
            <h1>Henrique Bonfim</h1>
            <h2>
              <Trans>Senior Software Engineer</Trans>
            </h2>
            <div className="not-prose m-3">
              <SocialMedia />
            </div>
            <h5>
              <Trans>
                Leveraging <i>GenAI</i> to drive{' '}
                <b>next-generation solutions.</b>
              </Trans>
            </h5>
          </article>
          <ToolsCarousel />
        </Terminal>
      </section>
    </aside>
  );
});
