const TrustBar = () => {
  const tools = [
    "SolidWorks",
    "Autodesk Inventor",
    "Solid Edge",
    "STEP",
    "IGES",
    "Parasolid",
  ]

  return (
    <section className="py-10 border-y border-white/10 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-400 mb-8 uppercase tracking-widest text-sm">
          Compatible With Industry Standard CAD Tools
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#1F2937] border border-white/10 rounded-2xl py-5 px-4 text-center hover:border-orange-500 transition-all duration-300"
            >
              <p className="font-semibold text-gray-200">
                {tool}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default TrustBar
