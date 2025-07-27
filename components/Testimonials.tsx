import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

export function Testimonials() {
  console.log("Testimonials component rendering")

  const testimonials = [
    {
      name: "Pavel Novák",
      position: "Svářeč",
      text: "Pracuji zde už 3 roky a jsem spokojený. Zajímavé projekty, férové jednání a včasné výplaty. Doporučuji!",
      avatar: "P",
      image: "https://images.pexels.com/photos/8976842/pexels-photo-8976842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name: "Martin Svoboda",
      position: "Zámečník",
      text: "Skvělý kolektiv a možnost se vzdělávat. Firma mi umožnila získat nové certifikace a rozšířit si dovednosti.",
      avatar: "M",
      image: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    },
    {
      name: "Tomáš Dvořák",
      position: "Montér",
      text: "Práce v zahraničí byla skvělá zkušenost. Dobré ubytování, přiměřená mzda a profesionální přístup.",
      avatar: "T", 
      image: "https://images.pexels.com/photos/16850260/pexels-photo-16850260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    }
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4" data-macaly="testimonials-title">
            Co říkají naši zaměstnanci
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto" data-macaly="testimonials-subtitle">
            Přečtěte si zkušenosti našich současných kolegů
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md relative">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-energy-orange/20 mb-4" />
                <p className="text-neutral-gray mb-6 italic leading-relaxed" data-macaly={`testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary-blue text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-dark-text" data-macaly={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-gray" data-macaly={`testimonial-position-${index}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}