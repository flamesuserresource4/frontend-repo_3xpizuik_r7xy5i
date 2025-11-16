import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact</h1>
        <p className="text-slate-700">For general inquiries, please contact the editorial office at info@e-planetjournal.org</p>
      </main>
      <Footer />
    </div>
  )
}
