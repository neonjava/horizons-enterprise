
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import { ThemeProvider } from '@/components/ThemeContext.jsx';
import { CurrencyProvider } from '@/hooks/useCurrency.jsx';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import VpsPage from '@/pages/VpsPage.jsx';
import CloudServersPage from '@/pages/CloudServersPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import DashboardPage from '@/pages/DashboardPage.jsx';
import TermsPage from '@/pages/TermsPage.jsx';
import RefundPolicyPage from '@/pages/RefundPolicyPage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/vps" element={<VpsPage />} />
                <Route path="/cloud-servers" element={<CloudServersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/refund-policy" element={<RefundPolicyPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } />
                
                {/* Catch-all route */}
                <Route path="*" element={
                  <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
                    <h1 className="text-7xl font-extrabold text-primary mb-4 font-['Outfit']">404</h1>
                    <p className="text-2xl text-muted-foreground mb-8 font-medium">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md">
                      Return Home
                    </a>
                  </div>
                } />
              </Routes>
              <Footer />
            </div>
            <Toaster position="bottom-right" richColors />
          </Router>
        </AuthProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
