export type Certification = {
  name: string;
  issuer: string;
  category: 'AWS' | 'Google Cloud' | 'Microsoft' | 'Kubernetes' | 'Security' | 'AI' | 'Other';
  year: number;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    category: 'AWS',
    year: 2024,
  },
  {
    name: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    category: 'AWS',
    year: 2024,
  },
  {
    name: 'AWS Certified SysOps Administrator',
    issuer: 'Amazon Web Services',
    category: 'AWS',
    year: 2023,
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    category: 'AWS',
    year: 2022,
  },
  {
    name: 'AWS Certified DevOps Engineer — Professional',
    issuer: 'Amazon Web Services',
    category: 'AWS',
    year: 2024,
  },
  {
    name: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
    year: 2024,
  },
  {
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
    year: 2024,
  },
  {
    name: 'Google Cloud Associate Cloud Engineer',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
    year: 2023,
  },
  {
    name: 'Google Cloud Professional DevOps Engineer',
    issuer: 'Google Cloud',
    category: 'Google Cloud',
    year: 2024,
  },
  {
    name: 'CKA — Certified Kubernetes Administrator',
    issuer: 'CNCF',
    category: 'Kubernetes',
    year: 2023,
  },
  {
    name: 'CKAD — Certified Kubernetes Application Developer',
    issuer: 'CNCF',
    category: 'Kubernetes',
    year: 2023,
  },
  {
    name: 'CKS — Certified Kubernetes Security Specialist',
    issuer: 'CNCF',
    category: 'Kubernetes',
    year: 2024,
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    category: 'Microsoft',
    year: 2022,
  },
  {
    name: 'Microsoft Azure Administrator (AZ-104)',
    issuer: 'Microsoft',
    category: 'Microsoft',
    year: 2023,
  },
  {
    name: 'Microsoft Azure Developer (AZ-204)',
    issuer: 'Microsoft',
    category: 'Microsoft',
    year: 2023,
  },
  { name: 'CompTIA Security+', issuer: 'CompTIA', category: 'Security', year: 2022 },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    category: 'Other',
    year: 2023,
  },
  {
    name: 'HashiCorp Certified: Vault Associate',
    issuer: 'HashiCorp',
    category: 'Security',
    year: 2024,
  },
  { name: 'GitHub Actions Certification', issuer: 'GitHub', category: 'Other', year: 2024 },
  { name: 'GitHub Advanced Security', issuer: 'GitHub', category: 'Security', year: 2024 },
  {
    name: 'Linux Foundation Certified IT Associate',
    issuer: 'Linux Foundation',
    category: 'Other',
    year: 2022,
  },
  { name: 'Docker Certified Associate', issuer: 'Docker', category: 'Other', year: 2023 },
  {
    name: 'DeepLearning.AI — LLM Engineering',
    issuer: 'DeepLearning.AI',
    category: 'AI',
    year: 2024,
  },
  { name: 'OpenAI API Engineer', issuer: 'OpenAI Academy', category: 'AI', year: 2024 },
  { name: 'Anthropic Claude Builder', issuer: 'Anthropic', category: 'AI', year: 2024 },
  { name: 'MLOps Specialization', issuer: 'Coursera', category: 'AI', year: 2023 },
];
