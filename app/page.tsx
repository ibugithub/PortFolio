import Hero from '@/components/Hero'
import Works from '@/components/Work/Works'
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import About from '@/components/About/About';
const Home =() => {
  return (
    <ScrollProvider>
      <Hero />
      <About />
      <Works />
    </ScrollProvider>
  )
}

export default Home;