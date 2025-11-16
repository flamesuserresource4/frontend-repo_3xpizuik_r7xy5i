import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            E-Planet: An International Journal of Environmental & Agricultural Research
          </h1>
          <p className="mt-4 text-slate-700">ISSN (Online & Print) • NAAS Rating 4.73</p>
          <div className="mt-6 flex gap-3">
            <Link to="/issues" className="inline-flex items-center rounded-md bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold hover:bg-blue-800">Latest Issue</Link>
            <Link to="/submit" className="inline-flex items-center rounded-md border border-blue-200 text-blue-800 px-5 py-2.5 text-sm font-semibold hover:bg-blue-50">Submit Your Manuscript</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
