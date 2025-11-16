import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BE = import.meta.env.VITE_BACKEND_URL || ''

export default function ArticlePage(){
  const { slug } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${BE}/api/articles/${slug}`)
      .then(r=>r.json())
      .then(setData)
      .catch(()=>setData(null))
  }, [slug])

  if(!data) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to={"/issues/" + data.year + "/" + data.volume + "/" + data.issue} className="text-sm text-blue-700 hover:underline">← Back to Issue</Link>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">{data.title}</h1>
        <p className="mt-2 text-slate-700">{data.authors?.map(a=>a.name).join(', ')}{data.affiliations ? ' — ' + data.affiliations.join('; ') : ''}</p>
        <div className="mt-2 text-sm text-slate-600">DOI: {data.doi || '—'}</div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Abstract</h2>
          <p className="mt-2 text-slate-700 leading-7">{data.abstract}</p>
        </div>

        {data.keywords?.length ? (
          <div className="mt-4 text-sm text-slate-600">Keywords: {data.keywords.join(', ')}</div>
        ) : null}

        <div className="mt-8 space-y-6">
          {data.sections?.map((sec, idx) => (
            <section key={idx}>
              <h3 className="text-lg font-semibold text-slate-900">{sec.heading}</h3>
              <p className="mt-2 text-slate-700 leading-7 whitespace-pre-line">{sec.content}</p>
            </section>
          ))}
        </div>

        {data.references?.length ? (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900">References</h3>
            <ol className="mt-2 pl-6 list-decimal text-slate-700 space-y-1">
              {data.references.map((r, i) => (<li key={i}>{r}</li>))}
            </ol>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={data.pdf_url || '#'} className="inline-flex items-center rounded-md bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800">Download PDF</a>
          <span className="text-sm text-slate-600">Cite this article:</span>
          <div className="text-sm text-slate-700 space-y-1">
            <div>APA: {data.citation_formats?.apa || '—'}</div>
            <div>MLA: {data.citation_formats?.mla || '—'}</div>
            <div>Chicago: {data.citation_formats?.chicago || '—'}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
