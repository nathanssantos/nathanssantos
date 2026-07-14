import { setRequestLocale } from 'next-intl/server';

import About from '../../components/About';
import BackgroundLoader from '../../components/BackgroundLoader';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import { fallbackRepositories, favoriteRepositories, site } from '../../constants';

const getRepositories = async (): Promise<Repository[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${site.githubUsername}/repos?per_page=100`,
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

const HomePage = async ({ params }: LocalePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  const repositories = await getRepositories();
  const projects = repositories.length > 0 ? repositories : fallbackRepositories;

  return (
    <>
      <Header />
      <main>
        <BackgroundLoader />
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
