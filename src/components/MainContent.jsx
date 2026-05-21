import QuoteForm from "./QuoteForm"

const MainContent = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          <h1 className="text-5xl font-bold mb-8">
            Scan to CAD & Reverse Engineering Services in NSW
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            We provide high-precision 3D scanning and reverse engineering
            services for manufacturing, mining, automotive, and heavy
            industries. Our solutions help businesses recreate accurate,
            production-ready CAD models from existing physical components.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                Smart CAD Conversion
              </h3>

              <p className="text-gray-300">
                Convert STL, mesh, and scanned data into editable CAD files.
              </p>
            </div>

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                Reduce Downtime
              </h3>

              <p className="text-gray-300">
                Recreate missing or damaged component drawings quickly.
              </p>
            </div>

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">
                Zero Fitment Risk
              </h3>

              <p className="text-gray-300">
                Ensure accurate dimensions and seamless manufacturing fitment.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div>
          <QuoteForm />
        </div>

      </div>

    </section>
  )
}

export default MainContent