export function ContactForm() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Přihlas se do Pracovní akademie</h2>
      <div className="max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden">
        <iframe
          className="w-full"
          src="https://airtable.com/embed/app1RAgY7RUZkZ6yC/pagz10pnG9K0j8DtO/form"
          frameBorder="0"
          width="100%"
          height="900"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </div>
    </section>
  )
}