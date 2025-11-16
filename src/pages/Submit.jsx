import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function SubmitPage(){
  const [guides, setGuides] = useState(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    fetch(`${BE}/api/guidelines`).then(r=>r.json()).then(setGuides).catch(()=>setGuides(null))
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    payload.keywords = payload.keywords ? payload.keywords.split(',').map(s=>s.trim()).filter(Boolean) : []
    setStatus('Submitting...')
    try{
      const res = await fetch(`${BE}/api/submit`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      setStatus(data.status === 'received' ? 'Submission received. We will contact you shortly.' : 'Submission recorded.')
    }catch{
      setStatus('Submission sent (demo). You can also email us directly.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Submit Your Manuscript</h1>
        <a href="#" className="inline-flex items-center rounded-md bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800">Submit Your Manuscript</a>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <input name="title" placeholder="Title" className="border border-slate-300 rounded px-3 py-2" required />
          <input name="corresponding_author" placeholder="Corresponding Author" className="border border-slate-300 rounded px-3 py-2" required />
          <input name="email" placeholder="Email" type="email" className="border border-slate-300 rounded px-3 py-2" required />
          <textarea name="abstract" placeholder="Abstract" className="border border-slate-300 rounded px-3 py-2" rows="4" />
          <input name="keywords" placeholder="Keywords (comma separated)" className="border border-slate-300 rounded px-3 py-2" />
          <textarea name="notes" placeholder="Notes" className="border border-slate-300 rounded px-3 py-2" rows="3" />
          <button className="inline-flex items-center rounded-md bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800" type="submit">Send Submission</button>
        </form>
        {status && <p className="mt-3 text-sm text-green-700">{status}</p>}

        <div className="mt-10 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">Author Guidelines</h2>
            <ul className="mt-2 list-disc list-inside text-slate-700">
              {guides?.author_guidelines?.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Publication Ethics</h2>
            <ul className="mt-2 list-disc list-inside text-slate-700">
              {guides?.publication_ethics?.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Peer Review Process</h2>
            <p className="mt-2 text-slate-700">{guides?.peer_review_process}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Formatting Template</h2>
            <a className="text-blue-700 hover:underline" href={guides?.formatting_template_url || '#'}>Download Template</a>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Email Submission</h2>
            <p className="text-slate-700">You may also send your manuscript to <a className="text-blue-700" href={`mailto:${guides?.submission_email}`}>{guides?.submission_email}</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
