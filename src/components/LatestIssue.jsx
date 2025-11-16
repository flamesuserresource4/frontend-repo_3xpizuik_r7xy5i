import { useEffect, useState } from 'react'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function LatestIssue() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BE}/api/articles?year=2025&volume=23&issue=2`)
      .then(r => r.json())
      .then(d => setArticles(d))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Latest Issue</h2>
          <a href="/issues" className="text-sm text-blue-700 hover:underline">View all issues</a>
        </div>
        {loading ? (
          <p className="text-slate-600">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0,6).map((a) => (
              <article key={a.slug} className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
                <h3 className="font-semibold text-slate-900 line-clamp-2 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{a.authors?.join(', ')}</p>
                <div className="flex items-center justify-between text-sm">
                  <a href={`/articles/${a.slug}`} className="text-blue-700 font-medium hover:underline">Read Article</a>
                  <span className="text-slate-500">Vol {a.volume} • Iss {a.issue} • {a.year}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
