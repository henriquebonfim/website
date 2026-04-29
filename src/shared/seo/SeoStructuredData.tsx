import { CERTIFICATIONS } from '@/entities/certification';
import { EXPERIENCES } from '@/entities/experience';
import { PROJECTS } from '@/entities/project';
import { ASSETS, CONTACT, SITE_CONFIG, SOCIAL_LINKS } from '@/shared/constants';

const siteUrl = SITE_CONFIG.url;
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
    name: SITE_CONFIG.name,
    url: siteUrl,
    image: `${siteUrl + ASSETS.background3}`,
    email: CONTACT.email,
    jobTitle: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    sameAs: [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.gitlab,
      SOCIAL_LINKS.dockerhub,
      SOCIAL_LINKS.credly,
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
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    inLanguage: SITE_CONFIG.locale,
    publisher: { '@id': personId },
  },
  {
    '@type': 'Organization',
    '@id': orgId,
    name: 'Henrique Bonfim',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl + ASSETS.headLogo}`,
    },
    member: { '@id': personId },
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  },
  {
    '@type': 'ItemList',
    name: 'Professional experience',
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: EXPERIENCES.length,
    itemListElement: EXPERIENCES.map((experience, index) => {
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
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, index) => ({
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
    numberOfItems: CERTIFICATIONS.length,
    itemListElement: CERTIFICATIONS.map((certification, index) => ({
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
