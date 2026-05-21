const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            Creatus Technologies
          </h2>

          <p className="text-gray-400 mt-2">
            3D Scan to CAD & Reverse Engineering Services
          </p>
        </div>

        <div className="text-gray-400 text-center md:text-right">
          <p>+91 9448934403</p>
          <p>info@creatustech.com</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer