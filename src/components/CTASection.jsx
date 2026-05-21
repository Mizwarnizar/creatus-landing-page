const CTASection = () => {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-14 text-center shadow-2xl">

          <p className="uppercase tracking-widest mb-4 text-white/80">
            Ready to Start?
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Get a Rapid Quote Today
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Upload your files or discuss your reverse engineering
            requirements with our CAD specialists today.
          </p>

          <button className="bg-white text-black hover:scale-105 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl">
            Request a Quote
          </button>

        </div>

      </div>

    </section>
  )
}

export default CTASection