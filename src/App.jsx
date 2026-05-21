import Header from "./components/Header"
import Hero from "./components/Hero"
import TrustBar from "./components/TrustBar"
import MainContent from "./components/MainContent"
import Industries from "./components/Industries"
import Process from "./components/Process"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">

      <Header />

      <main>

        <Hero />

        <TrustBar />

        <MainContent />

        <Industries />

        <Process />

        <Workflow />

        <CTASection />

      </main>

      <Footer />

    </div>
  )
}

export default App