import Hero from '@/components/Hero'
import Works from '@/components/Work/Works'
import { ScrollProvider } from '@/components/Providers/ScrollProvider';

const Home =() => {
  return (
    <ScrollProvider>
      <Hero />
      <Works />
    </ScrollProvider>
  )
}

export default Home;