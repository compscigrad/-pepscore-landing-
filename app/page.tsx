// ============================================================
// FILE: app/page.tsx
// REPO: pepscore-landing (PUBLIC — standalone marketing repo)
// PURPOSE: Pepscore Lab authority landing page
// DOMAIN: pepscorelab.com
// ============================================================

import LandingHero from '@/components/landing/LandingHero'
import LandingPositioning from '@/components/landing/LandingPositioning'
import LandingCapabilities from '@/components/landing/LandingCapabilities'
import LandingCatalog from '@/components/landing/LandingCatalog'
import LandingForm from '@/components/landing/LandingForm'
import LandingContact from '@/components/landing/LandingContact'
import LandingFooter from '@/components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'Montserrat', 'Inter', sans-serif", background: '#000', color: '#fff', overflowX: 'hidden' }}>

      {/* Announcement Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #8A6B1A 0%, #D4AF37 40%, #E8C84A 60%, #D4AF37 80%, #8A6B1A 100%)',
        padding: '9px 24px',
        textAlign: 'center',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.14em',
        color: '#000',
        textTransform: 'uppercase',
      }}>
        ✦ &nbsp; Pepscore Lab — Launching Fall 2026 &nbsp;|&nbsp; Precision Peptide Solutions &nbsp; ✦
      </div>

      <LandingHero />
      <LandingPositioning />
      <LandingCapabilities />
      <LandingCatalog />
      <LandingForm />
      <LandingContact />
      <LandingFooter />
    </div>
  )
}
