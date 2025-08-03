export function ContactForm() {
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-center text-xl text-dark-text font-semibold mb-6">
                Formulář zájmu o zaměstnání
              </h3>
              <div className="w-full">
                <iframe
                  className="airtable-embed w-full"
                  src="https://airtable.com/embed/app1RAgY7RUZkZ6yC/shr97DBqGGcy7S0Go"
                  frameBorder="0"
                  width="100%"
                  height="533"
                  style={{
                    background: 'transparent',
                    border: '1px solid #ccc',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}