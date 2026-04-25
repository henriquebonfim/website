import { certifications } from '@/data/certifications';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';

const siteUrl = 'https://henriquebonfim.web.app';
const personId = `${siteUrl}/#person`;

const normalizeMonth = (value: string) => {
  const [month, year] = value.trim().split('/');

  if (!month || !year) {
    return value;
  }

  return `${year.padStart(4, '0')}-${month.padStart(2, '0')}-01`;
};

const parsePeriod = (period: string) => {
  const [startRaw, endRaw] = period.split(' — ');

  return {
    startDate: normalizeMonth(startRaw ?? ''),
    endDate: normalizeMonth(endRaw ?? ''),
  };
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Henrique Bonfim',
    description:
      'Portfolio and professional website for Henrique Bonfim, a Senior Software Engineer.',
    inLanguage: 'en',
    publisher: {
      '@id': personId,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Henrique Bonfim',
    url: siteUrl,
    logo: `${siteUrl}/assets/layout/logo.webp`,
    sameAs: [
      'https://github.com/henriquebonfim',
      'https://www.linkedin.com/in/henriquebonfim',
      'https://www.youtube.com/@henrique_bonfim',
      'https://gitlab.com/hpbonfim',
      'https://hub.docker.com/u/hpbonfim',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Professional experience',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: experiences.length,
    itemListElement: experiences.map((experience, index) => {
      const { startDate, endDate } = parsePeriod(experience.period);

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Role',
          roleName: experience.role,
          startDate,
          endDate,
          description: experience.highlights.join(' '),
          memberOf: {
            '@type': 'Organization',
            name: experience.company,
          },
        },
      };
    }),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Selected projects',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Project',
        name: project.name,
        description: project.description,
        url: project.url ?? project.repo ?? siteUrl,
        sameAs: [project.repo, project.url].filter(Boolean),
        keywords: Array.from(new Set([...project.tags, ...project.stack])).join(', '),
        identifier: project.command,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Certifications',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: certifications.length,
    itemListElement: certifications.map((certification, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: certification.name,
        description: `${certification.issuer} certification issued in ${certification.year}.`,
        identifier: certification.id,
        url: certification.badgeUrl ?? certification.url ?? siteUrl,
        dateCreated: certification.issuedAt,
        credentialCategory: 'Professional certification',
        recognizedBy: {
          '@type': 'Organization',
          name: certification.issuer,
        },
        competencyRequired: certification.skills,
      },
    })),
  },
];

const toJsonLd = (value: unknown) => JSON.stringify(value);

export const SeoStructuredData = () => {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema['@type']}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
        />
      ))}
    </>
  );
};
