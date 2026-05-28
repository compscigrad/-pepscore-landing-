'use client'
// ── LandingContact.tsx ────────────────────────────────────────────────────────
// Contact card section

export default function LandingContact() {
  return (
    <section style={{
      padding: '88px 24px 104px',
      background: 'linear-gradient(160deg, #0D0C00 0%, #100F00 50%, #0A0800 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '800px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '200px', height: '1px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
      }} />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.24em', color: 'rgba(212,175,55,0.7)', textTransform: 'uppercase', marginBottom: '14px' }}>
            Connect Directly
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Ready to Discuss Your Needs?
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          {/* Contact Card */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '28px',
            padding: '44px 36px',
            border: '1px solid rgba(212,175,55,0.25)',
            boxShadow: '0 24px 72px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            maxWidth: '420px',
            width: '100%',
          }}>
            <div style={{ marginBottom: '28px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/banner.png"
                alt="Pepscore Labs"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
              />
            </div>

            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '24px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Pepscore Lab &nbsp;|&nbsp; DC Metro Area
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <a href="tel:2024253161" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500,
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                  borderRadius: '12px', width: '46px', height: '46px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0, boxShadow: '0 4px 16px rgba(212,175,55,0.35)',
                }}>📞</span>
                202.425.3161
              </a>
              <a href="https://pepscorelab.com" style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 500,
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                  borderRadius: '12px', width: '46px', height: '46px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', flexShrink: 0, boxShadow: '0 4px 16px rgba(212,175,55,0.35)',
                }}>🌐</span>
                pepscorelab.com
              </a>
            </div>

            <a
              href="#inquiry"
              style={{
                display: 'block',
                marginTop: '32px',
                background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                color: '#000',
                padding: '14px 24px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '13px',
                textDecoration: 'none',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(212,175,55,0.35)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Submit Inquiry →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
