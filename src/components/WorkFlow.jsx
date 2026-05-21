const software = [
  "SolidWorks",
  "Autodesk Inventor",
  "Solid Edge",
  "STEP",
  "IGES",
  "Parasolid",
]

const Workflow = () => {
  return (
    <section className="py-28 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-orange-400 uppercase tracking-widest mb-4">
          CAD Compatibility
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Native Files for Your Existing Workflow
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
          We deliver production-ready CAD models fully compatible with
          industry-standard engineering and manufacturing software.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          {software.map((item, index) => (
            <div
              key={index}
              className="bg-[#1F2937] border border-white/10 rounded-2xl px-8 py-5 hover:border-orange-500 hover:shadow-orange-500/10 hover:shadow-2xl transition-all duration-300"
            >
              <p className="font-semibold text-lg">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Workflow