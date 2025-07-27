import { Card, CardContent } from '@/components/ui/card'
import { Globe, FileUser, Briefcase, DollarSign, GraduationCap, Users } from 'lucide-react'

export function Benefits() {
  console.log("Benefits component rendering")

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-energy-orange" />,
      title: "Práce v ČR i zahraničí",
      description: "Nabízíme možnost práce jak na domácích, tak na zahraničních projektech"
    },
    {
      icon: <FileUser className="h-8 w-8 text-energy-orange" />,
      title: "OSVČ i HPP",
      description: "Flexibilní formy spolupráce podle vašich potřeb a preferencí"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-energy-orange" />,
      title: "Zajímavé zakázky",
      description: "Rozmanité projekty od průmyslu až po stavebnictví"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-energy-orange" />,
      title: "Peníze v čas",
      description: "Spolehlivé a včasné vyplácení odměn bez zbytečných komplikací"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-energy-orange" />,
      title: "Kvalitní školení",
      description: "Kontinuální vzdělávání a rozvoj vašich dovedností"
    },
    {
      icon: <Users className="h-8 w-8 text-energy-orange" />,
      title: "Přátelský tým",
      description: "Pracovní prostředí založené na vzájemné podpoře a respektu"
    }
  ]

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4" data-macaly="benefits-title">
            Proč pracovat u nás
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto" data-macaly="benefits-subtitle">
            Nabízíme výhodné podmínky a stabilní zázemí pro vaši profesní kariéru
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark-text mb-2" data-macaly={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-neutral-gray" data-macaly={`benefit-desc-${index}`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}