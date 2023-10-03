import { Layout } from './Layout/Layout';
import { Hero } from './Hero/Hero';
import { Header } from './Header/Header';
import { Projects } from './Projects/Projects';
import { Certificates } from './Certificates/Certificates';
import { Footer } from './Footer/Footer';

export const App = () => {
  return (
    <Layout>
      <Hero />
      <Header />
      <Projects />
      <Certificates />
      <Footer />
    </Layout>
  );
};
