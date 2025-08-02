'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

export function ContactForm() {
  console.log("ContactForm component rendering")
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    cooperation: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted with data:", formData)
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submission completed")
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Děkujeme za vaši žádost! Brzy se vám ozveme.")
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    console.log(`Form field ${field} changed to:`, value)
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-16 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-dark-text mb-4">
                  Děkujeme za váš zájem!
                </h3>
                <p className="text-neutral-gray">
                  Vaše žádost byla úspěšně odeslána. Brzy se vám ozveme s dalšími informacemi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-16 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4" data-macaly="form-title">
            Máte zájem? Ozvěte se nám!
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto" data-macaly="form-subtitle">
            Vyplňte formulář a my se vám do 24 hodin ozveme s dalšími informacemi
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-xl text-dark-text">
                Formulář zájmu o zaměstnání
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno a příjmení *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Zadejte vaše jméno"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="vas@email.cz"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+420 xxx xxx xxx"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Pozice *</Label>
                    <Select onValueChange={(value) => handleInputChange('position', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Vyberte pozici" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="svarec">Svářeč</SelectItem>
                        <SelectItem value="zamecnik">Zámečník</SelectItem>
                        <SelectItem value="potrubar">Potrubář</SelectItem>
                        <SelectItem value="monter">Montér</SelectItem>
                        <SelectItem value="stavebnik">Pracovník ve stavebnictví</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cooperation">Spolupráce *</Label>
                  <Select onValueChange={(value) => handleInputChange('cooperation', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte typ spolupráce" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="osvc">OSVČ</SelectItem>
                      <SelectItem value="hpp">HPP</SelectItem>
                      <SelectItem value="dpp-dpc">DPP/DPČ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Popište vaše zkušenosti a praxi</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    placeholder="Napište o vaší praxi, certifikátech, předchozích zaměstnáních..."
                    rows={4}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-energy-orange hover:bg-energy-orange/90 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat žádost'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}