'use client'
// ── LandingCatalog.tsx ────────────────────────────────────────────────────────
// Peptide catalog showcase — high-definition product catalog image

export default function LandingCatalog() {
  return (
    <section style={{
      padding: '96px 24px 112px',
      background: 'linear-gradient(180deg, #000 0%, #050500 60%, #0A0800 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gold line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '200px', height: '1px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
      }} />

      {/* Subtle gold ambient */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.28em',
            color: 'rgba(212,175,55,0.7)', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Product Catalog
          </p>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 800,
            color: '#fff', marginBottom: '14px', letterSpacing: '-0.02em',
          }}>
            Research-Grade Peptide Solutions
          </h2>
          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.5)', fontWeight: 300,
            maxWidth: '560px', margin: '0 auto 24px', lineHeight: 1.7,
          }}>
            Third-party tested. COA-certified. Sterility-verified. 99.9% purity standard
            across our complete catalog of pharmaceutical-grade research compounds.
          </p>
          <div style={{
            width: '52px', height: '2px',
            background: 'linear-gradient(90deg, #D4AF37, #E8C84A)',
            margin: '0 auto', borderRadius: '4px',
          }} />
        </div>

        {/* Catalog Image */}
        <div style={{
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(212,175,55,0.2)',
          boxShadow: '0 32px 96px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.08)',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/peptide-catalog.PNG"
            alt="Pepscore Lab — Complete Peptide Research Catalog"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              imageRendering: 'crisp-edges',
            }}
            loading="lazy"
          />
        </div>

        {/* Quality badges below catalog */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '16px',
          justifyContent: 'center', marginTop: '48px',
        }}>
          {[
            { icon: '🧪', label: 'Third-Party Tested' },
            { icon: '📋', label: 'COA Certified' },
            { icon: '🔬', label: 'Sterility Verified' },
            { icon: '⚗️', label: '99.9% Purity Standard' },
            { icon: '🏭', label: 'Pharmaceutical-Grade Sourcing' },
            { icon: '📦', label: 'Wholesale & Retail Available' },
          ].map(b => (
            <div key={b.label} style={{
              background: 'rgba(212,175,55,0.07)',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: '50px',
              padding: '10px 20px',
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(212,175,55,0.9)',
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '52px' }}>
          <a
            href="#inquiry"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #D4AF37, #E8C84A)',
              color: '#000',
              padding: '16px 40px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 10px 32px rgba(212,175,55,0.4)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Inquire About Pricing & Access →
          </a>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '16px', fontWeight: 300 }}>
            Research Use Only (RUO) | Not for human consumption or diagnostic or therapeutic use
          </p>
        </div>

      </div>
    </section>
  )
}
