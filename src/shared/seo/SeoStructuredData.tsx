import { certifications } from '@/entities/certification';
import { experiences } from '@/entities/experience';
import { projects } from '@/entities/project';

const siteUrl = 'https://henriquebonfim.web.app';
const personId = `${siteUrl}/#person`;
const orgId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

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

const graph = [
  {
    '@type': 'Person',
    '@id': personId,
    name: 'Henrique Bonfim',
    url: siteUrl,
    image: `${siteUrl}/assets/layout/background_3.webp`,
    email: 'henriquebonfim@proton.me',
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer with 10+ years of experience in backend development, microservices, AI integration, and cloud architecture.',
    sameAs: [
      'https://github.com/henriquebonfim',
      'https://www.linkedin.com/in/henriquebonfim',
      'https://www.youtube.com/@henrique_bonfim',
      'https://gitlab.com/hpbonfim',
      'https://hub.docker.com/u/hpbonfim',
      'https://www.credly.com/users/henrique-bonfim',
    ],
    knowsAbout: [
      'Python',
      'TypeScript',
      'Node.js',
      'React',
      'Microservices',
      'Cloud Architecture',
      'AI Integration',
      'Backend Development',
      'AWS',
      'Google Cloud Platform',
      'Kubernetes',
      'DevOps',
      'Observability',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Federal University of Mato Grosso do Sul',
      sameAs: 'https://www.ufms.br',
    },
    worksFor: { '@id': orgId },
  },
  {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteUrl,
    name: 'Henrique Bonfim',
    description:
      'Portfolio and professional website for Henrique Bonfim, a Senior Software Engineer.',
    inLanguage: 'en',
    publisher: { '@id': personId },
  },
  {
    '@type': 'Organization',
    '@id': orgId,
    name: 'Henrique Bonfim',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/layout/logo.webp`,
    },
    member: { '@id': personId },
    sameAs: ['https://github.com/henriquebonfim', 'https://www.linkedin.com/in/henriquebonfim'],
  },
  {
    '@type': 'ItemList',
    name: 'Professional experience',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
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
          endDate: endDate || undefined,
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
    '@type': 'ItemList',
    '@id': `${siteUrl}/#certifications`,
    name: 'Certifications',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': graph,
};

export const SeoStructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
