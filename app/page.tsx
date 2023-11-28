import Hero from '@/components/Hero'
import Works from '@/components/Work/Works'
import { ScrollProvider } from '@/components/providers/ScrollProvider';
import About from '@/components/About/About';
import Footer from '@/components/Footer';
const Home =() => {
  return (
    <ScrollProvider>
      <Hero />
      <About />
      <Works />
      <Footer />
    </ScrollProvider>
  )
}

export default Home;