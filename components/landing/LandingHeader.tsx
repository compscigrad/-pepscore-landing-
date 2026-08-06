'use client'
// ── LandingHeader.tsx ────────────────────────────────────────────────────────
// Slim top utility bar — the customer entry points, visible without
// scrolling on both desktop and mobile. Admin Sign In deliberately stays
// out of this bar and in the footer, visually secondary (LandingFooter.tsx)
// — this bar is customer-facing only. Plain links into the real app, same
// ADMIN_APP_URL/redirect_url pattern as LandingPortalAccess.tsx and
// LandingFooter.tsx; no auth, portal, or database logic lives here.
import { useState } from 'react'

const ADMIN_APP_URL = process.env.NEXT_PUBLIC_ADMIN_APP_URL ?? 'https://pepscore-compscigrads-projects.vercel.app'

const HEADER_STYLES = `
  .ps-header-bar {
    background: #000;
    border-bottom: 1px solid rgba(212,175,55,0.12);
    padding: 10px 24px;
  }
  .ps-header-inner {
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
  .ps-header-link {
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 9px 16px;
    border-radius: 50px;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .ps-header-link-primary {
    background: linear-gradient(135deg, #D4AF37, #E8C84A);
    color: #000;
  }
  .ps-header-link-secondary {
    border: 1px solid rgba(212,175,55,0.35);
    background: rgba(212,175,55,0.06);
  }
  @media (max-width: 560px) {
    .ps-header-inner {
      justify-content: center;
      flex-wrap: wrap;
    }
    .ps-header-link {
      flex: 1 1 auto;
      text-align: center;
    }
  }
`

export default function LandingHeader() {
  const [primaryHover, setPrimaryHover] = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)

  return (
    <>
      <style>{HEADER_STYLES}</style>
      <div className="ps-header-bar">
        <div className="ps-header-inner">
          <a
            href={`${ADMIN_APP_URL}/sign-in?redirect_url=/account`}
            className="ps-header-link ps-header-link-secondary"
            style={secondaryHover ? { borderColor: 'rgba(212,175,55,0.6)', background: 'rgba(212,175,55,0.12)' } : undefined}
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
          >
            Customer Sign In
          </a>
          <a
            href={`${ADMIN_APP_URL}/sign-up?redirect_url=/account`}
            className="ps-header-link ps-header-link-primary"
            style={primaryHover ? { boxShadow: '0 4px 16px rgba(212,175,55,0.4)' } : undefined}
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
          >
            Set Up My Account
          </a>
        </div>
      </div>
    </>
  )
}
