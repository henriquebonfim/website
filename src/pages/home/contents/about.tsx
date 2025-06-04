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
      <div aria-label={i18n._(msg`About information`)} className="">
        <div className="">
          <h1 className="mb-4">
            <Trans>Once upon a time...</Trans>
          </h1>
          <hr className="divider divider-neutral" />

          <figure className="not-prose not-md:carousel relative flex h-33 flex-row space-x-3 md:mb-52">
            <img
              src="/assets/photos/myself_child.webp"
              alt={i18n._(msg`Henrique over the years`)}
              className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:translate-y-9"
            />

            <img
              src="/assets/photos/myself_formal.webp"
              alt={i18n._(msg`Henrique over the years`)}
              className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:-translate-y-9"
            />

            <img
              src="/assets/photos/myself_flying.webp"
              alt={i18n._(msg`Henrique over the years`)}
              className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:translate-y-9"
            />

            <img
              src="/assets/photos/myself_coding.webp"
              alt={i18n._(msg`Henrique over the years`)}
              className="z-1 w-64 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:h-64"
            />

            <img
              src="/assets/photos/myself_eating.webp"
              alt={i18n._(msg`Henrique over the years`)}
              className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:translate-y-9"
            />

            <img
              src="/assets/photos/myself.webp"
              alt={i18n._(msg`Henrique over the years`)}
              className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:-translate-y-9"
            />
          </figure>

          <p className="text-center">
            <Trans>
              Sparked by curiosity and love. I found joy in every challenge and
              breakthrough.
              <br />
              Over the years, I've grown from a curious beginner to a seasoned
              engineer, always driven by a passion for creating meaningful
              digital experiences.
            </Trans>
          </p>
        </div>
      </div>

      <div className="mb-10 flex flex-col-reverse gap-8 md:flex-row">
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

      <div className="mb-10 ml-3 flex flex-col gap-6 md:flex-row">
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
            url={API.YOUTUBE_EMBED.VIDEO_PIANO}
            title={i18n._(msg`Henrique playing piano`)}
          />
        </div>
      </div>

      <div className="mb-10 flex flex-col md:gap-8">
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
            className="bg-neutral flex flex-col content-evenly justify-evenly text-left md:flex-row"
          >
            <YoutubeWidget
              className="mx-auto aspect-square max-w-md px-3"
              url={API.YOUTUBE_EMBED.SHORT_GUITAR}
              title={i18n._(msg`Henrique playing piano`)}
            />
            <pre className="p-3 shadow-lg">
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
