import {
  FaSearch,
  FaProjectDiagram,
  FaCube,
} from "react-icons/fa"

const processSteps = [
  {
    icon: <FaSearch />,
    title: "Precision 3D Scanning",
    desc: "High-accuracy scanning captures every detail of the physical component.",
  },

  {
    icon: <FaProjectDiagram />,
    title: "Point Cloud Processing",
    desc: "Raw scan data is cleaned, aligned, and converted into optimized geometry.",
  },

  {
    icon: <FaCube />,
    title: "Parametric Modeling",
    desc: "Production-ready CAD models are created for manufacturing workflows.",
  },
]

const Process = () => {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-orange-400 uppercase tracking-widest mb-4">
            Reverse Engineering Workflow
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Our 3-Step Reverse Engineering Process
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We follow a streamlined and accurate workflow to transform
            physical parts into production-ready CAD assets.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#111827] border border-white/10 rounded-3xl p-10 hover:border-orange-500 hover:shadow-orange-500/10 hover:shadow-2xl transition-all duration-300"
            >

              <div className="absolute -top-5 left-8 bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="text-5xl text-orange-400 mb-8 mt-4">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Process