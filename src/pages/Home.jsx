import Header from '../components/Header'
import Hero from '../components/Hero'
import LatestIssue from '../components/LatestIssue'
import AboutBlock from '../components/AboutBlock'
import Footer from '../components/Footer'

export default function HomePage(){
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <LatestIssue />
        <AboutBlock />
      </main>
      <Footer />
    </div>
  )
}
