import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function IssuesPage(){
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BE}/api/issues`)
      .then(r=>r.json())
      .then(d=>setIssues(d))
      .catch(()=>setIssues([]))
      .finally(()=>setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Issues & Archive</h1>
        {loading ? <p>Loading...</p> : (
          <div className="space-y-8">
            {issues.map((iss) => (
              <div key={`${iss.year}-${iss.volume}-${iss.issue}`} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Volume {iss.volume}, Issue {iss.issue} ({iss.year})</h2>
                  </div>
                  <a className="text-blue-700 text-sm hover:underline" href={`/issues/${iss.year}/${iss.volume}/${iss.issue}`}>View articles</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
