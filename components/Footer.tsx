

export function Footer() {
  console.log("Footer component rendering")

  return (
    <footer className="bg-dark-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-macaly="footer-company">
              pracovniakademie.cz
            </h3>
            <p className="text-gray-300 mb-4" data-macaly="footer-description">
              Spolehlivý partner pro manuální pozice ve výrobě a stavebnictví. 
              Nabízíme stabilní zaměstnání a profesní růst.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p data-macaly="footer-email">
                Email: prace@pracovniakademie.cz
              </p>
            </div>
          </div>
          

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 pracovniakademie.cz. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}