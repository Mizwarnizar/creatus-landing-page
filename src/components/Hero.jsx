const Hero = () => {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-orange-400 font-semibold mb-4 tracking-widest uppercase">
            Reverse Engineering Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">

            Convert Physical Parts to

            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {" "}Production-Ready{" "}
            </span>

            CAD Models

          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            High-accuracy reverse engineering for manufacturing,
            mining, and automotive industries. Get STL to
            STEP/IGES conversion with guaranteed accuracy.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/20">
              Request a Quote
            </button>

            <button className="border border-white/10 hover:border-orange-500 hover:bg-white/5 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg">
              Explore Services
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
            alt="Engineering CAD"
            className="rounded-[40px] w-full h-[550px] object-cover shadow-2xl"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero