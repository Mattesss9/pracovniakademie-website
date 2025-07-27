'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  console.log("Hero component rendering")

  const scrollToForm = () => {
    console.log("Scrolling to contact form")
    const element = document.getElementById('contact-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-blue to-primary-blue/90 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-macaly="hero-title">
          Pojďte tvořit s námi!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100" data-macaly="hero-subtitle">
          Hledáme svářeče, zámečníky, potrubáře, montéry a pracovníky ve stavebnictví – přidejte se k našemu týmu!
        </p>
        <Button 
          onClick={scrollToForm}
          size="lg"
          className="bg-energy-orange hover:bg-energy-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          data-macaly="hero-cta"
        >
          Přihlásit se nyní
        </Button>
        
        {/* Navigation dots */}
        <div className="mt-16 flex justify-center space-x-4">
          <a href="#benefits" className="text-blue-200 hover:text-white transition-colors">
            Proč u nás
          </a>
          <span className="text-blue-300">•</span>
          <a href="#jobs" className="text-blue-200 hover:text-white transition-colors">
            Pozice
          </a>
          <span className="text-blue-300">•</span>
          <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">
            Reference
          </a>
          <span className="text-blue-300">•</span>
          <a href="#contact-form" className="text-blue-200 hover:text-white transition-colors">
            Mám zájem o práci
          </a>
        </div>
      </div>
    </section>
  )
}