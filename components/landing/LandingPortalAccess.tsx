// ── LandingPortalAccess.tsx ─────────────────────────────────────────────────
// Informational-only: what the customer portal offers. The single
// "Customer Portal" CTA that actually routes into the app lives once, in
// LandingHeader.tsx — this section deliberately carries no button of its
// own, so there is exactly one portal entry point on the page.

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
      </div>
    </section>
  )
}
