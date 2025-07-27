import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { JobProfiles } from '@/components/JobProfiles'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  console.log("Home page rendering")
  
  return (
    <div className="min-h-screen bg-light-bg">
      <Hero />
      <Benefits />
      <JobProfiles />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}