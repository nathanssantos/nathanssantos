import { setRequestLocale } from 'next-intl/server';

import About from '../../components/About';
import Background from '../../components/Background';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';

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

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const repositories = await getRepositories();

  return (
    <>
      <Header />
      <main>
        <Background />
        <Hero />
        <About />
        <Experience />
        {repositories.length > 0 && <Projects projects={repositories} />}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
