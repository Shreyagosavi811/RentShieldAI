import './App.css'
import { useState } from 'react'
import LandingPage from './components/LandingPage'
import RentShieldSearch from './components/Rentshieldsearch_'

export default function App() {
  // ── Page State ──────────────────────────────────────────────────────────────
  // 'landing'  → show LandingPage
  // 'search'   → show RentShieldSearch with the query user typed
  const [page, setPage]   = useState('landing')
  const [query, setQuery] = useState('')

  // Called from SearchBar (inside LandingPage) when user clicks "Search PGs"
  // Receives { city, query } object
  const handleSearch = ({ city, query: q }) => {
    const combined = [city, q].filter(Boolean).join(' · ')  // combine city + query
    setQuery(combined)   // store query to pass to search page
    setPage('search')    // switch to search results page
  }

  // Called from RentShieldSearch's Back button
  const handleBack = () => {
    setPage('landing')   // go back to landing page
    setQuery('')         // clear query
  }

  return (
    <>
      {/* Conditionally render pages based on 'page' state */}
      {page === 'landing' && (
        <LandingPage onSearch={handleSearch} />
      )}

      {page === 'search' && (
        <RentShieldSearch initialQuery={query} onBack={handleBack} />
      )}
    </>
  )
}