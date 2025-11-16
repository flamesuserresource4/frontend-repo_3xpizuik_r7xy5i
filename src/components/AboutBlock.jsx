export default function AboutBlock() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">About the Journal</h2>
          <p className="mt-3 text-slate-700">E-Planet Journal publishes peer-reviewed research across environmental and agricultural sciences. Our mission is to advance sustainable practices through rigorous scholarship and rapid dissemination.</p>
          <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
            <li>Quarterly publication</li>
            <li>Double-blind peer review</li>
            <li>Open access</li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <h3 className="font-semibold text-slate-900 mb-2">Indexing & Recognition</h3>
          <ul className="text-slate-700 text-sm space-y-1">
            <li>Google Scholar</li>
            <li>CrossRef</li>
            <li>DOAJ (placeholder)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
