import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Issues from './pages/Issues'
import IssueDetail from './pages/IssueDetail'
import Articles from './pages/Articles'
import Article from './pages/Article'
import Submit from './pages/Submit'
import EditorialBoard from './pages/EditorialBoard'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/issues/:year/:volume/:issue" element={<IssueDetail />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/editorial-board" element={<EditorialBoard />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
