import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function ArticlesPage(){
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch(`${BE}/api/articles`).then(r=>r.json()).then(setArticles).catch(()=>setArticles([]))
  },[])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Articles</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.slug} className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-slate-900 line-clamp-2 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{a.authors?.join(', ')}</p>
              <div className="flex items-center justify-between text-sm">
                <Link to={`/articles/${a.slug}`} className="text-blue-700 font-medium hover:underline">Read Article</Link>
                <span className="text-slate-500">Vol {a.volume} • Iss {a.issue} • {a.year}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
