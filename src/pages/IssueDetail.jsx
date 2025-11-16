import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function IssueDetail(){
  const { year, volume, issue } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${BE}/api/issues/${year}/${volume}/${issue}`)
      .then(r=>r.json())
      .then(setData)
      .catch(()=>setData({ year, volume, issue, articles: [] }))
  }, [year, volume, issue])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <Link to="/issues" className="text-sm text-blue-700 hover:underline">← Back to Issues</Link>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Volume {volume}, Issue {issue} ({year})</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.articles?.map((a) => (
            <article key={a.slug} className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900 line-clamp-2 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{a.authors}</p>
              <div className="flex items-center justify-between text-sm">
                <Link to={`/articles/${a.slug}`} className="text-blue-700 font-medium hover:underline">Read Article</Link>
                <span className="text-slate-500">DOI: —</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
