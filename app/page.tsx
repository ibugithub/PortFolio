import Hero from '@/components/Hero'
import Works from '@/components/Work/Works'
import { ScrollProvider } from '@/components/providers/ScrollProvider';
import About from '@/components/About/About';
import Footer from '@/components/Footer';
import Tech from '@/components/Tech/Tech';
import Contact from '@/components/Contact/Contact';

const Home =() => {
  return (
    <ScrollProvider>
      <Hero />
      <About />
      <Tech />
      <Works />
      <Contact />
      <Footer />
    </ScrollProvider>
  )
}

export default Home;