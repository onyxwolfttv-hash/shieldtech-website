import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import ServicePage from './components/ServicePage'
import CompliancePage from './components/CompliancePage'

function App() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:serviceId" element={<ServicePage />} />
                <Route path="/compliance/:complianceId" element={<CompliancePage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App