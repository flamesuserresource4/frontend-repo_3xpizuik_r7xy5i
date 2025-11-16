export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-slate-900 font-semibold mb-3">E-Planet Journal</h3>
          <p className="text-sm text-slate-600">An International Journal of Environmental & Agricultural Research</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-600">E-Planet Journal Editorial Office<br/>123 Green Avenue, New Delhi, India<br/>Email: info@e-planetjournal.org</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-3">Policies</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Open Access Policy</li>
            <li>Publication Ethics</li>
            <li>Peer Review Policy</li>
            <li>Copyright & Licensing</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} E-Planet Journal. All rights reserved.</div>
    </footer>
  )
}
