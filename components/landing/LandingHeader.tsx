'use client'
// ── LandingHeader.tsx ────────────────────────────────────────────────────────
// Two-row top area:
//   Row 1 — the announcement banner (existing gold-gradient strip), split
//   left/right: "Launching Fall 2026" anchored left, the brand tagline
//   anchored right.
//   Row 2 — the single Customer Portal CTA, aligned under the right edge
//   of row 1. One button, not two: it routes to the real app's sign-in
//   page, which itself offers both "sign in" and (via Clerk's own default
//   footer link) "create an account." Admin Sign In stays out of this bar
//   entirely and in the footer (LandingFooter.tsx), visually secondary.
// Plain link into the real app, same ADMIN_APP_URL/redirect_url pattern as
// LandingPortalAccess.tsx and LandingFooter.tsx; no auth, portal, or
// database logic lives here.
//
// redirect_url carries an explicit ?portal=customer intent marker through
// to /account (not just the bare path) -- this is what lets /account tell
// "explicit Customer Portal click-through" apart from "stale admin
// bookmark" when the visitor is already signed in as the site admin, fixing
// a production bug where clicking this button while signed in as admin
// silently landed on /admin instead of the customer flow. See
// lib/portal/accountRouting.ts in the main app repo.
import { useState } from 'react'

const ADMIN_APP_URL = process.env.NEXT_PUBLIC_ADMIN_APP_URL ?? 'https://pepscore-compscigrads-projects.vercel.app'

const HEADER_STYLES = `
  .ps-banner-row {
    background: linear-gradient(90deg, #8A6B1A 0%, #D4AF37 40%, #E8C84A 60%, #D4AF37 80%, #8A6B1A 100%);
    padding: 9px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: #000;
    text-transform: uppercase;
  }
  .ps-cta-row {
    background: #000;
    padding: 10px 24px;
    display: flex;
    justify-content: flex-end;
  }
  .ps-header-link-primary {
    display: inline-block;
    background: linear-gradient(135deg, #D4AF37, #E8C84A);
    color: #000;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 9px 22px;
    border-radius: 50px;
    transition: box-shadow 0.2s;
    white-space: nowrap;
  }
  @media (max-width: 640px) {
    .ps-banner-row {
      justify-content: center;
      text-align: center;
    }
    .ps-cta-row {
      justify-content: center;
    }
  }
`

export default function LandingHeader() {
  const [hover, setHover] = useState(false)

  return (
    <>
      <style>{HEADER_STYLES}</style>

      <div className="ps-banner-row">
        <span>Launching Fall 2026</span>
        <span>✦ &nbsp;Pepscore Lab &nbsp;|&nbsp; Precision Peptide Solutions&nbsp; ✦</span>
      </div>

      <div className="ps-cta-row">
        <a
          href={`${ADMIN_APP_URL}/sign-in?redirect_url=${encodeURIComponent('/account?portal=customer')}`}
          className="ps-header-link-primary"
          style={hover ? { boxShadow: '0 4px 16px rgba(212,175,55,0.4)' } : undefined}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Customer Portal
        </a>
      </div>
    </>
  )
}
