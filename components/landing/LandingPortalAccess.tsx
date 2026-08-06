'use client'
// ── LandingPortalAccess.tsx ─────────────────────────────────────────────────
// Customer Portal entry point — routes into the real customer portal in the
// main Pepscore application. No portal code, auth, or database access lives
// in this repo; these are plain links. See LandingFooter.tsx's Admin Sign In
// for the identical ADMIN_APP_URL pattern this reuses.
//
// Both buttons work regardless of whether the main app's self-service
// registration flag is on yet — "Set Up Account" degrades gracefully to a
// "not set up yet" message if it isn't, never an error.

const ADMIN_APP_URL = process.env.NEXT_PUBLIC_ADMIN_APP_URL ?? 'https://pepscore-compscigrads-projects.vercel.app'

export default function LandingPortalAccess() {
  return (
    <section
      id="customer-portal"
      style={{
        background: 'linear-gradient(180deg, rgba(212,175,55,0.05) 0%, transparent 100%)',
        borderTop: '1px solid rgba(212,175,55,0.12)',
        borderBottom: '1px solid rgba(212,175,55,0.12)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            color: 'rgba(212,175,55,0.7)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Customer Portal
        </p>
        <p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            marginBottom: '32px',
            maxWidth: '540px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: 300,
          }}
        >
          Access your personal Pepscore profile, invoices, payments, purchases, tracking, and account communications.
          Expanded online shopping and inventory features are still under construction and will be added to your
          account as they launch.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={`${ADMIN_APP_URL}/sign-in?redirect_url=/account`}
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
              color: '#000',
              padding: '15px 32px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '13px',
              textDecoration: 'none',
              boxShadow: '0 10px 32px rgba(212,175,55,0.35)',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
            }}
          >
            Customer Sign In
          </a>
          <a
            href={`${ADMIN_APP_URL}/sign-up?redirect_url=/account`}
            style={{
              border: '1px solid rgba(212,175,55,0.45)',
              color: 'rgba(255,255,255,0.9)',
              padding: '15px 32px',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '13px',
              textDecoration: 'none',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              background: 'rgba(212,175,55,0.07)',
              backdropFilter: 'blur(8px)',
            }}
          >
            Set Up My Account
          </a>
        </div>
      </div>
    </section>
  )
}
