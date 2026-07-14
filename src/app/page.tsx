import Home from '../components/Home';

const favoriteRepositories = [
  'evolution-graph',
  'react-boilerplate',
  'podjs',
  'clockify-teams',
  'pure-components',
  'marketmind',
];

const getRepositories = async (): Promise<Repository[]> => {
  try {
    const response = await fetch(
      'https://api.github.com/users/nathanssantos/repos?per_page=100',
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const data: Repository[] = await response.json();

    return data
      .filter(({ name }) => favoriteRepositories.includes(name))
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch {
    return [];
  }
};

const HomePage = async () => {
  const repositories = await getRepositories();

  return <Home repositories={repositories} />;
};

export default HomePage;
