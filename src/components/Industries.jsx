import {
  FaIndustry,
  FaCar,
  FaCogs,
  FaBuilding,
} from "react-icons/fa"

const industries = [
  {
    icon: <FaIndustry size={32} />,
    title: "Mining & Heavy Industry",
    desc: "Reverse engineering solutions for mining equipment, heavy machinery, and industrial systems.",
  },

  {
    icon: <FaCar size={32} />,
    title: "Automotive & Aerospace",
    desc: "Precision CAD reconstruction for automotive parts and aerospace engineering workflows.",
  },

  {
    icon: <FaCogs size={32} />,
    title: "Manufacturing",
    desc: "Production-ready CAD models for tooling, fabrication, and component manufacturing.",
  },

  {
    icon: <FaBuilding size={32} />,
    title: "Architecture & Heritage",
    desc: "High-accuracy scanning and reconstruction for buildings and heritage structures.",
  },
]

const Industries = () => {
  return (
    <section className="py-28 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-orange-400 uppercase tracking-widest mb-4">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Comprehensive Scan-to-CAD Workflows
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our reverse engineering solutions support multiple industries
            with precision-driven CAD conversion and production workflows.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-[#1F2937] border border-white/10 rounded-3xl p-8 hover:border-orange-500 hover:shadow-orange-500/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-orange-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Industries