'use client';

import About from './About';
import Background from './Background';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';

type HomeProps = {
  repositories: Repository[];
};

const Home = ({ repositories }: HomeProps) => (
  <>
    <Header />
    <main>
      <Background />
      <Hero />
      <About />
      <Experience />
      {!!repositories.length && <Projects projects={repositories} />}
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
