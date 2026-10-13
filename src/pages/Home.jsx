import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Specialties from '../components/Specialties'
import WhyUs from '../components/WhyUs'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Specialties />
      <WhyUs />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

