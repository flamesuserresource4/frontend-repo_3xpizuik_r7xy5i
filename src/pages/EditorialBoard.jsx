import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function EditorialBoard(){
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch(`${BE}/api/editorial-board`).then(r=>r.json()).then(setMembers).catch(()=>setMembers([]))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Editorial Board</h1>
        <div className="space-y-8">
          {['Chief Editor', 'Editor', 'Reviewer'].map((role) => (
            <section key={role}>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">{role}s</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.filter(m => m.role === role).map((m, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg p-5 bg-white">
                    <img alt={`${m.name} photo`} className="w-full h-40 object-cover rounded" src={m.photo_url || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=60'} />
                    <h3 className="mt-3 font-semibold text-slate-900">{m.name}</h3>
                    <p className="text-sm text-slate-600">{m.designation}</p>
                    <p className="text-sm text-slate-600">{m.affiliation}</p>
                    <p className="text-xs text-slate-500">{m.country}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
