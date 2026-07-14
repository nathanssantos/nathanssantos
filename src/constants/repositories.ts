import site from './site';

const favoriteRepositories = [
  'evolution-graph',
  'react-boilerplate',
  'podjs',
  'clockify-teams',
  'pure-components',
  'marketmind',
];

const repoUrl = (name: string) => `https://github.com/${site.githubUsername}/${name}`;

export const fallbackRepositories: Repository[] = [
  {
    id: 1,
    name: 'evolution-graph',
    language: 'JavaScript',
    stargazers_count: 0,
    html_url: repoUrl('evolution-graph'),
  },
  {
    id: 2,
    name: 'react-boilerplate',
    language: 'TypeScript',
    stargazers_count: 0,
    html_url: repoUrl('react-boilerplate'),
  },
  {
    id: 3,
    name: 'podjs',
    language: 'TypeScript',
    stargazers_count: 0,
    html_url: repoUrl('podjs'),
  },
  {
    id: 4,
    name: 'clockify-teams',
    language: 'JavaScript',
    stargazers_count: 0,
    html_url: repoUrl('clockify-teams'),
  },
  {
    id: 5,
    name: 'pure-components',
    language: 'TypeScript',
    stargazers_count: 0,
    html_url: repoUrl('pure-components'),
  },
  {
    id: 6,
    name: 'marketmind',
    language: 'TypeScript',
    stargazers_count: 0,
    html_url: repoUrl('marketmind'),
  },
];

export default favoriteRepositories;
