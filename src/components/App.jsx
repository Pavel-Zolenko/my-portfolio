import { Layout } from './Layout/Layout';
import { Hero } from './Hero/Hero';
import { Header } from './Header/Header';
import { Projects } from './Projects/Projects';
import { Certificates } from './Certificates/Certificates';
import { Footer } from './Footer/Footer';
import { Contacts } from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Header />
        <Projects />
        <Certificates />
        <Contacts />
        <Footer />
      </Layout>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};
