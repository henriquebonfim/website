import { EMBED, IMAGES } from '#/shared/constants';
import { PrettyJSON } from '#/widgets/terminal';
import { Windows96 } from '#/widgets/windows';
import { YoutubeWidget } from '#/widgets/youtube';
import { msg } from '@lingui/core/macro';
import { Trans, useLingui } from '@lingui/react/macro';
import { memo, type FC } from 'react';

/**
 * About component displays my journey from childhood curiosity to senior software engineer.
 * @returns {JSX.Element} The rendered about section.
 */
const About: FC = memo(() => {
  const { i18n } = useLingui();
  return (
    <div className="p-3" role="none">
      <article
        aria-label={i18n._(msg`About me`)}
        className="prose prose-neutral prose-h2:m-3 prose-img:m-3 prose-p:text-left prose-p:indent-3 prose-headings:font-bold prose-p:text-neutral-content prose-a:text-neutral-content prose-a:underline prose-a:decoration-2 prose-a:decoration-dotted prose-a:hover:decoration-solid md:prose-lg lg:prose-xl xl:prose-2xl hyphens-none"
        role="article"
      >
        <h1 className="bg-linear-to-r from-black to-white bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent hover:backdrop-blur-sm md:text-5xl">
          <Trans>About Me</Trans>
        </h1>

        <hr className="divider divider-neutral" role="separator" />

        <figure
          className="not-prose not-sm:carousel relative flex h-33 flex-row space-x-3 sm:mb-33"
          role="figure"
          aria-label={i18n._(msg`Henrique over the years`)}
          aria-roledescription={i18n._(
            msg`Image carousel showcasing Henrique's journey`,
          )}
        >
          <img
            src={IMAGES.MYSELF_CHILD}
            alt={i18n._(msg`Henrique over the years`)}
            className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 sm:translate-y-9"
            role="img"
            aria-label={i18n._(msg`Henrique as a child`)}
          />

          <img
            src={IMAGES.MYSELF_FORMAL}
            alt={i18n._(msg`Henrique over the years`)}
            className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 sm:-translate-y-9"
            role="img"
            aria-label={i18n._(msg`Henrique formal`)}
          />

          <img
            src={IMAGES.MYSELF_FLYING}
            alt={i18n._(msg`Henrique over the years`)}
            className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 sm:translate-y-9"
            role="img"
            aria-label={i18n._(msg`Henrique flying`)}
          />

          <img
            src={IMAGES.MYSELF_CODING}
            alt={i18n._(msg`Henrique over the years`)}
            className="z-1 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 xl:h-64"
            role="img"
            aria-label={i18n._(msg`Henrique coding`)}
          />

          <img
            src={IMAGES.MYSELF_EATING}
            alt={i18n._(msg`Henrique over the years`)}
            className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 sm:translate-y-9"
            role="img"
            aria-label={i18n._(msg`Henrique eating`)}
          />

          <img
            src={IMAGES.MYSELF}
            alt={i18n._(msg`Henrique over the years`)}
            className="w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 sm:-translate-y-9"
            role="img"
            aria-label={i18n._(msg`Henrique today`)}
          />
        </figure>

        <div id="introduction">
          <h2 className='after:animate-ping after:tracking-widest after:content-["|"] after:motion-reduce:animate-none'>
            <Trans>Fresh start</Trans>
          </h2>
          <p>
            <Trans>
              I was born in 1996, at the beginning of the digital age. I had
              access to technology from an early age - TV, VCR, radio, a Super
              Nintendo - and all of this "magic" sparked my natural curiosity
              about it all.
            </Trans>
          </p>
          <img
            src={IMAGES.MYSELF_CHILD}
            alt={i18n._(msg`Henrique over the years`)}
            className="float-left w-18 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:w-33"
            role="img"
            aria-label={i18n._(msg`Henrique as a child`)}
          />
          <blockquote role="blockquote">
            -&nbsp;<Trans>How can energy put images inside a wooden box?</Trans>
          </blockquote>
          <p>
            <Trans>
              I was an energetic child who learned quickly, observing and
              listening to everything that fascinated me. I think one of my
              greatest childhood achievements was building a soapbox car out of
              scraps and learning to play the guitar. I was always fascinated by
              doing things that were out of the ordinary, at least for me.
            </Trans>
          </p>
        </div>

        <div id="adolescence">
          <p>
            <Trans>
              Childhood was fun, but when I got my first computer, Debian 4 with
              CD/DVD-RW and dial-up internet that barely lasted 2 hours online,
              things became more interesting.
            </Trans>
          </p>
          <img
            src={IMAGES.MYSELF_FORMAL}
            alt={i18n._(msg`Henrique over the years`)}
            className="float-right w-32 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:w-44"
            role="img"
            aria-label={i18n._(msg`Henrique formal`)}
          />
          <p>
            <Trans>
              At school there was a basic computer course, and every day after
              school, my friends and I would go to the lan house to play
              Counter-Strike 1.6 - a passion that would define my interest in
              technology and team spirit.
            </Trans>
          </p>

          <p>
            <Trans>
              I was never the best student in the class but a turning point came
              at a young age: I took part in the work education program
              sponsored by Coca Cola FEMSA. This course changed my life and set
              a definite goal, planting important seeds in my mind.
            </Trans>
          </p>
          <figure className="not-prose">
            <img
              src={IMAGES.MYSELF_PET}
              alt={i18n._(msg`Henrique over the years`)}
              className="w-full rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:float-left md:m-3 md:w-64"
              role="img"
              aria-label={i18n._(msg`Henrique formal`)}
            />
          </figure>

          <p>
            <Trans>
              It was there that I had my first contact with programming logic
              and wrote my first codes in HTML, CSS and JavaScript. A real
              opportunity to do things out of the ordinary was born.
            </Trans>
          </p>
        </div>

        <div id="adulthood">
          <h2>
            <Trans>The boy becomes a man</Trans>
          </h2>
          <p>
            <img
              src={IMAGES.MYSELF_FLYING}
              alt={i18n._(msg`Henrique over the years`)}
              className="float-left w-20 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:w-44"
              role="img"
              aria-label={i18n._(msg`Henrique flying`)}
            />
            <Trans>
              At the age of 17 (2013), I took a technical course in computer
              maintenance offered by Intel. This earned me my first job as a
              technical support assistant at the Sedit hemodialysis clinic,
              where I discovered the world of help desk and customer service. In
              2015, at the age of 19, I put everything together and moved to
              Campo Grande, MS, to study Information Systems at UFMS.
            </Trans>
          </p>

          <p className="text-center">
            <img
              src={IMAGES.MYSELF_CTEI}
              alt={i18n._(msg`Henrique over the years`)}
              className="float-right w-20 rounded-lg object-cover p-0 shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0"
              role="img"
              aria-label={i18n._(msg`Henrique coding`)}
            />
            <Trans>
              During my degree, I dived headfirst into opportunities: I took
              part in the PET (Tutorial Education Program), university expansion
              projects, CTEI, AGETIC and FETEC. In 2018, I took part in
              programming competitions, winning third place in one of them.
            </Trans>
          </p>
          <img
            src={IMAGES.MYSELF_FETEC}
            alt={i18n._(msg`Henrique over the years`)}
            className="float-left w-20 rotate-y-180 rounded-lg object-cover p-0 shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:w-33"
            role="img"
            aria-label={i18n._(msg`Henrique coding`)}
          />
          <blockquote>
            <Trans>
              "Resilience is not about never falling, but about rising every
              time you fall." - <strong>Henrique Bonfim</strong>
            </Trans>
          </blockquote>
          <img
            src={IMAGES.MYSELF_EVENT}
            alt={i18n._(msg`Henrique over the years`)}
            className="float-right w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0"
            role="img"
            aria-label={i18n._(msg`Henrique coding`)}
          />
          <p>
            <Trans>
              I also got involved with incubators and startups such as IndexT,
              Codate, LivingLab - it was exactly where I wanted to be by that
              time.
            </Trans>
          </p>
        </div>

        <div id="growth">
          <h2>
            <Trans>Growth in the midst of chaos</Trans>
          </h2>
          <p>
            <img
              src={IMAGES.MYSELF_CODING}
              alt={i18n._(msg`Henrique over the years`)}
              className="float-left w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0"
              role="img"
              aria-label={i18n._(msg`Henrique coding`)}
            />
            <Trans>
              The start of the pandemic in 2020 was challenging, but I turned
              this period into an opportunity. I dedicated myself to studying
              Cloud Computing and Machine Learning, playing with IBM Watson and
              TensorFlow. I even tried to create a startup (Softstate
              Solutions), which didn't work out due to a lack of clients. That
              failure taught me a lot and motivated me to keep going.
            </Trans>

            <Trans>
              I went on to work for companies like Portal Solar and Meu
              Financiamento Solar, where I really consolidated my experience as
              a senior developer. At Portal Solar, I maintained high-traffic
              applications that served 100,000 photovoltaic installers in
              Brazil.
            </Trans>
            <img
              src={IMAGES.MYSELF_EATING}
              alt={i18n._(msg`Henrique over the years`)}
              className="float-right w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:w-64"
              role="img"
              aria-label={i18n._(msg`Henrique eating`)}
            />
            <Trans>
              At Meu Financiamento Solar, I contributed to the entire SDLC of
              the country's largest solar credit acquisition platform, helping
              to increase engagement by 300% after launch. In 2023, I was
              selected for AWS re/Start, an intensive cloud immersion program
              that earned me my first AWS certificate. The following year, I
              took part in Google Cloud - Get Certified, earning my Associate
              Cloud Engineer certification.
            </Trans>
          </p>
        </div>

        <div id="present-future">
          <h2>
            <Trans>Present and Future</Trans>
          </h2>
          <p>
            <img
              src={IMAGES.MYSELF}
              alt={i18n._(msg`Henrique over the years`)}
              className="float-left w-33 rounded-lg object-cover shadow-lg grayscale-100 transition-all duration-500 ease-in-out hover:grayscale-0 md:w-64"
              role="img"
              aria-label={i18n._(msg`Henrique`)}
            />
            <Trans>
              Today I work as a freelance Senior Software Engineer,
              collaborating with clients around the world. I have more than 10
              years' experience in IT, specializing in backend development with
              Node.js and TypeScript. I have delivered scalable solutions in
              microservices, serverless and event-driven architectures for
              startups, solar energy, fintech, B2B and more. Recently, I
              architected a B2B solution integrating generative AI with legacy
              microservices, designed robust REST EMBEDs with 99.98% uptime and
              built secure distributed systems using Redis and RabbitMQ.
            </Trans>
          </p>

          <div className="not-prose w-full flex-1">
            <Windows96
              title={i18n._(msg`Help Topics: Windows`)}
              className="bg-neutral flex flex-col content-evenly justify-evenly text-left md:flex-row"
            >
              <YoutubeWidget
                className="m-3"
                url={EMBED.YOUTUBE.SHORT_REC}
                title={i18n._(msg`Henrique playing guitar`)}
              />
              <pre className="p-3">
                <PrettyJSON
                  json={{
                    name: 'Henrique Paulo Bonfim',
                    role: 'Senior Software Engineer',
                    location: 'Florianópolis, SC',
                    experience: i18n._(
                      msg`'10+ years in software development'`,
                    ),
                    specialties: [
                      'Backend Development',
                      'Cloud Architecture',
                      'Microservices',
                      'AI Integration',
                    ],
                    techStack: [
                      'Node.js',
                      'TypeScript',
                      'React',
                      'Python',
                      'AWS',
                      'Google Cloud',
                    ],
                    certifications: [
                      'AWS Cloud Practitioner',
                      'Google Cloud Associate Engineer',
                      'Scrum Foundation Professional',
                    ],
                    hobbies: [
                      i18n._(msg`Music`),
                      i18n._(msg`Piano & Guitar`),
                      i18n._(msg`Lifelong Learning`),
                    ],
                    mission: i18n._(
                      msg`Building solutions that make a difference`,
                    ),
                  }}
                />
              </pre>
            </Windows96>
          </div>
        </div>

        <div id="beyond-code">
          <h2>
            <Trans>Beyond Code</Trans>
          </h2>
          <div>
            <YoutubeWidget
              className="float-right hidden aspect-square w-1/3 sm:block"
              url={EMBED.YOUTUBE.SHORT_GUITAR}
              title={i18n._(msg`Henrique playing guitar`)}
            />
            <p>
              <Trans>
                Alongside technology, music occupies a special place in my life.
                I play piano and guitar, and have learned several other
                instruments. I've performed with other artists, in street bands
                and at public events. This passion reinforces my philosophy of
                lifelong learning and my ability to constantly adapt.
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <YoutubeWidget
              url={EMBED.YOUTUBE.SHORT_ORGAN}
              title={i18n._(msg`Henrique playing organ`)}
            />
            <YoutubeWidget
              url={EMBED.YOUTUBE.SHORT_PIANO}
              title={i18n._(msg`Henrique playing piano`)}
            />
            <YoutubeWidget
              url={EMBED.YOUTUBE.VIDEO_PIANO}
              title={i18n._(msg`Henrique playing piano`)}
            />
          </div>
        </div>

        <hr className="divider divider-primary not-prose" />

        <div id="conclusion">
          <h3 className="text-center indent-3">
            <Trans>
              I believe that technology should make a difference to people's
              lives - and that's what drives me every day.
            </Trans>
          </h3>

          <span>
            <Trans>
              Check out my{' '}
              <a
                href="#projects"
                className="text-neutral-content underline decoration-dotted decoration-2 hover:decoration-solid"
              >
                Projects and Contribuitions
              </a>
              .
            </Trans>
          </span>
        </div>
      </article>
    </div>
  );
});

export default About;
