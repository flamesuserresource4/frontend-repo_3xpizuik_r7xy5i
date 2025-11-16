import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function About(){
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch(`${BE}/api/about`).then(r=>r.json()).then(setAbout).catch(()=>setAbout(null))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About E-Planet Journal</h1>
        {about && (
          <>
            <p className="text-slate-700">{about.mission}</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Scope</h2>
              <ul className="mt-2 list-disc list-inside text-slate-700">
                {about.scope?.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded p-4">
                <div className="text-slate-500 text-sm">Frequency</div>
                <div className="font-semibold">{about.frequency}</div>
              </div>
              <div className="border border-slate-200 rounded p-4">
                <div className="text-slate-500 text-sm">NAAS Rating</div>
                <div className="font-semibold">{about.naas_rating}</div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Indexing</h2>
              <ul className="mt-2 list-disc list-inside text-slate-700">
                {about.indexing?.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Publication Timeline</h2>
              <p className="text-slate-700">{about.timeline}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="text-slate-700">{about.contact?.address}</p>
              <p className="text-blue-700">{about.contact?.email}</p>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
