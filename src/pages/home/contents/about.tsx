import { API } from '#/shared/constants';
import { Windows96 } from '#/widgets/windows';
import { YoutubeWidget } from '#/widgets/youtube';
import { msg } from '@lingui/core/macro';
import { Trans, useLingui } from '@lingui/react/macro';
import { memo, type FC } from 'react';
import { PrettyJSON } from '../../../widgets/terminal';

/**
 * About component displays a heartfelt, visually engaging journey with images, code, and video.
 * @returns {JSX.Element} The rendered about section.
 */
const About: FC = memo(() => {
  const { i18n } = useLingui();
  return (
    <div className="p-3" role="none">
      <div
        aria-label={i18n._(msg`About information`)}
        className="mb-10 flex flex-col items-center gap-8 md:flex-row"
      >
        <div className="flex-1">
          <h1 className="mb-4">
            <Trans>Once upon a time...</Trans>
          </h1>
          <p className="mb-4">
            <Trans>
              Sparked by curiosity and a love for learning. I found joy in every
              challenge and breakthrough. From late-night coding sessions to
              building my first blog,
              <br />
              Over the years, I've grown from a curious beginner to a seasoned
              engineer, always driven by a passion for creating meaningful
              digital experiences.
            </Trans>
          </p>
        </div>
        <figure className="flex flex-1 justify-center">
          <img
            src="/assets/photos/about_me.webp"
            alt={i18n._(msg`Young Henrique in event, 2019`)}
            className="w-fit rounded-lg border-2 border-blue-200 shadow-lg focus:outline-2 focus:outline-blue-400"
          />
          <figcaption className="sr-only">
            <Trans>Henrique at AWS event</Trans>
          </figcaption>
        </figure>
      </div>

      <div className="mb-10 flex flex-col-reverse items-center gap-8 md:flex-row">
        <figure className="flex flex-1 justify-center">
          <img
            src="/assets/photos/aws.webp"
            alt={i18n._(msg`Henrique at AWS event, smiling and inspired`)}
            className="w-fit rounded-lg border-2 shadow-lg"
          />
          <figcaption className="sr-only">
            <Trans>Young Henrique coding at home, 2010</Trans>
          </figcaption>
        </figure>
        <div className="flex-1">
          <h2 className="mb-2">A Lifelong Learner</h2>
          <p className="mb-4">
            <Trans>
              From my first lines of code, I was hooked. I spent countless hours
              exploring, breaking, and fixing things—each bug a lesson, each
              project a new adventure. My curiosity led me to wear many hats,
              from tech support to cloud engineering.
            </Trans>
          </p>
        </div>
      </div>

      <div className="mb-10 ml-3 flex flex-col items-center gap-6 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2">
            <Trans>Beyond the Code</Trans>
          </h2>
          <p className="mb-4">
            <Trans>
              When I’m not coding, I find inspiration in music. Playing piano
              helps me recharge and approach problems with fresh creativity.
            </Trans>
          </p>
        </div>
        <div className="flex-1">
          <YoutubeWidget
            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
            height="300"
            url={API.YOUTUBE_EMBED.VIDEO_PIANO}
            title={i18n._(msg`Henrique playing piano`)}
          />
        </div>
      </div>

      <div className="mb-10 flex flex-col items-center md:gap-8">
        <div className="flex-1">
          <h2 className="mb-2">
            <Trans>Code is My Craft</Trans>
          </h2>
          <p className="mb-4">
            <Trans>
              I believe in the power of clean, efficient code to solve
              real-world problems. Whether building APIs, designing UIs, or
              architecting cloud solutions, I strive for excellence and
              simplicity.
            </Trans>
          </p>
        </div>
        <div className="not-prose w-full flex-1">
          <Windows96
            title={i18n._(msg`Help Topics: Windows`)}
            className="bg-neutral flex flex-col content-evenly items-center justify-evenly text-left md:flex-row"
          >
            <YoutubeWidget
              className="mx-auto w-full max-w-md rounded-lg p-3 shadow-lg"
              height="300"
              url={API.YOUTUBE_EMBED.SHORT_GUITAR}
              title={i18n._(msg`Henrique playing piano`)}
            />
            <pre className="">
              <PrettyJSON
                json={{
                  name: 'Henrique',
                  role: 'Software Engineer',
                  hobbies: [
                    i18n._(msg`Music`),
                    i18n._(msg`Gaming`),
                    i18n._(msg`Reading`),
                  ],
                  skills: [
                    'JavaScript',
                    'TypeScript',
                    'React',
                    'Node.js',
                    'Python',
                  ],
                  experience: i18n._(msg`'10+ years in software development'`),
                }}
              />
            </pre>
          </Windows96>
        </div>
      </div>

      <h4 className="font-medium">
        <Trans>
          My journey is far from over. I’m always seeking new challenges, eager
          to collaborate, and passionate about building solutions that make a
          difference. Let’s create something amazing together!
        </Trans>
      </h4>
    </div>
  );
});

export default About;
