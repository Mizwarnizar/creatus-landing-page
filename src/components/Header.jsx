const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B1120]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Creatus Technologies
        </h1>

        <div className="flex items-center gap-6">

          <p className="hidden md:block text-gray-300">
            +91 9448934403
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 px-5 py-2 rounded-xl font-semibold shadow-lg shadow-orange-500/20">
            Request a Quote
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header