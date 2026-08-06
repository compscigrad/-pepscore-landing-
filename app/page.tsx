// ============================================================
// FILE: app/page.tsx
// REPO: pepscore-landing (PUBLIC — standalone marketing repo)
// PURPOSE: Pepscore Lab authority landing page
// DOMAIN: pepscorelab.com
// ============================================================

import LandingHeader from '@/components/landing/LandingHeader'
import LandingHero from '@/components/landing/LandingHero'
import LandingPortalAccess from '@/components/landing/LandingPortalAccess'
import LandingPositioning from '@/components/landing/LandingPositioning'
import LandingCapabilities from '@/components/landing/LandingCapabilities'
import LandingCatalog from '@/components/landing/LandingCatalog'
import LandingForm from '@/components/landing/LandingForm'
import LandingContact from '@/components/landing/LandingContact'
import LandingFooter from '@/components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'Montserrat', 'Inter', sans-serif", background: '#000', color: '#fff', overflowX: 'hidden' }}>

      <LandingHeader />

      <LandingHero />
      <LandingPortalAccess />
      <LandingPositioning />
      <LandingCapabilities />
      <LandingCatalog />
      <LandingForm />
      <LandingContact />
      <LandingFooter />
    </div>
  )
}
