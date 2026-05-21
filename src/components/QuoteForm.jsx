const QuoteForm = () => {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 sticky top-28">

      <h3 className="text-2xl font-bold mb-6">
        Request a Quote
      </h3>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        />

        <input
          type="file"
          className="w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        />

        <textarea
          rows="5"
          placeholder="Project Details"
          className="w-full bg-[#1F2937] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
        ></textarea>

        <button
          className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 rounded-xl font-semibold text-lg"
        >
          Submit Request
        </button>

      </form>

    </div>
  )
}

export default QuoteForm