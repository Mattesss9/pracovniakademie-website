import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Wrench, Cylinder, Settings, HardHat } from 'lucide-react'

export function JobProfiles() {
  console.log("JobProfiles component rendering")

  const jobs = [
    {
      icon: <Zap className="h-10 w-10 text-energy-orange" />,
      title: "Svářeči",
      description: "Svařování různých materiálů a konstrukcí dle technické dokumentace",
      requirements: ["Svářečský průkaz", "Praxe s různými metodami svařování", "Přesnost a pečlivost"],
      skills: ["MIG/MAG", "TIG", "Elektrodové svařování"]
    },
    {
      icon: <Wrench className="h-10 w-10 text-energy-orange" />,
      title: "Zámečníci",
      description: "Výroba a montáž kovových konstrukcí, opravy a údržba strojů",
      requirements: ["Vyučení v oboru", "Znalost technického kreslení", "Práce s ručním nářadím"],
      skills: ["Obrábění", "Montáž", "Opravy"]
    },
    {
      icon: <Cylinder className="h-10 w-10 text-energy-orange" />,
      title: "Potrubáři",
      description: "Instalace a údržba potrubních systémů pro různé průmyslové aplikace",
      requirements: ["Znalost materiálů potrubí", "Schopnost čtení projektů", "Technické dovednosti"],
      skills: ["Instalace", "Údržba", "Diagnostika"]
    },
    {
      icon: <Settings className="h-10 w-10 text-energy-orange" />,
      title: "Montéři",
      description: "Montáž průmyslových zařízení, strojů a technologických celků",
      requirements: ["Technické vzdělání", "Mechanická zručnost", "Týmová spolupráce"],
      skills: ["Mechanické práce", "Elektrické práce", "Diagnostika"]
    },
    {
      icon: <HardHat className="h-10 w-10 text-energy-orange" />,
      title: "Pracovníci ve stavebnictví",
      description: "Zedníci, fasádníci, sádrokartonáři, tesaři, betonáře a další stavební profese",
      requirements: ["Stavební praxe", "Fyzická kondice", "Znalost materiálů a technologií"],
      skills: ["Zedničina", "Fasády", "Sádrokarton", "Tesařina", "Betonáže"]
    }
  ]

  return (
    <section id="jobs" className="py-16 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4" data-macaly="jobs-title">
            Hledáme tyto pozice
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto" data-macaly="jobs-subtitle">
            Vyberte si pozici, která nejlépe odpovídá vašim dovednostem a zkušenostem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {job.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-text" data-macaly={`job-title-${index}`}>
                  {job.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-gray text-sm" data-macaly={`job-desc-${index}`}>
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-dark-text mb-2">Požadavky:</h4>
                  <ul className="text-sm text-neutral-gray space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-energy-orange mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary-blue/10 text-primary-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}