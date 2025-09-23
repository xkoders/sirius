import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ComponentsPage from './pages/ComponentsPage'
import { LibraryProvider } from './contexts/LibraryContext'
import './index.scss'

function App() {
  return (
    <LibraryProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </Layout>
    </LibraryProvider>
  )
}

export default App
