'use client'
// ── LandingForm.tsx ──────────────────────────────────────────────────────────
// Inquiry / waitlist form. Submits to the operational pepscore app's
// centralized /api/contact endpoint (POST /api/contact — validation, rate
// limiting, honeypot spam guard, and email routing/logging all live there,
// see that repo's app/api/contact/route.ts and lib/notifications/) rather
// than duplicating that logic here or depending on a third-party form
// service. That endpoint's CORS allowlist explicitly includes this site's
// production and preview origins.
//
// Previously posted to a Formspree endpoint that was still the placeholder
// 'YOUR_FORMSPREE_ID' — every real submission on the live site was silently
// failing (Formspree 404) until this was pointed at a real backend.

import { useState } from 'react'

const PEPSCORE_APP_URL = process.env.NEXT_PUBLIC_PEPSCORE_APP_URL || 'https://pepscore-compscigrads-projects.vercel.app'
const CONTACT_ENDPOINT = `${PEPSCORE_APP_URL}/api/contact`

export default function LandingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  // Honeypot — never rendered visibly (see the input below); a real visitor
  // never fills it, an unsophisticated bot filling every field often does.
  const [website, setWebsite] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError('')
    setSubmitting(true)
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          inquiryType: form.type || undefined,
          message: form.message,
          website,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setSubmitted(true)
      } else {
        setFormError(data.error || 'Something went wrong. Please try again or call 202.425.3161')
      }
    } catch {
      setFormError('Network error. Please call us at 202.425.3161')
    }
    setSubmitting(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(212,175,55,0.2)',
    fontSize: '14px',
    color: '#fff',
    outline: 'none',
    fontFamily: 'inherit',
    background: 'rgba(255,255,255,0.05)',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    color: 'rgba(212,175,55,0.8)',
    marginBottom: '7px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(212,175,55,0.6)'
    e.target.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.08)'
    e.target.style.background = 'rgba(255,255,255,0.07)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(212,175,55,0.2)'
    e.target.style.boxShadow = 'none'
    e.target.style.background = 'rgba(255,255,255,0.05)'
  }

  return (
    <section id="inquiry" style={{
      padding: '96px 24px 112px',
      background: '#080808',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold top border */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '200px', height: '1px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
      }} />

      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.24em', color: 'rgba(212,175,55,0.7)', textTransform: 'uppercase', marginBottom: '16px' }}>
            Inquire Now
          </p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 46px)', fontWeight: 800, color: '#fff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Join the Waitlist
          </h2>
          <div style={{ width: '52px', height: '2px', background: 'linear-gradient(90deg, #D4AF37, #E8C84A)', margin: '0 auto 22px', borderRadius: '4px' }} />
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', fontWeight: 300, lineHeight: 1.65, maxWidth: '540px', margin: '0 auto' }}>
            Be among the first to access Pepscore Lab. Submit your inquiry and we'll contact you with early access details and pricing.
          </p>
        </div>

        {submitted ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 32px',
            background: 'rgba(212,175,55,0.06)',
            borderRadius: '24px',
            border: '1px solid rgba(212,175,55,0.3)',
          }}>
            <div style={{ fontSize: '54px', marginBottom: '20px' }}>✅</div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Inquiry Received</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300, fontSize: '16px', lineHeight: 1.65 }}>
              Thank you for your interest in Pepscore Lab.<br />We'll be in touch with early access details within 24–48 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '24px',
              padding: '44px 40px',
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            {/* Honeypot — visually hidden via clip (never display:none,
                which some bots skip), shielded from real users/assistive
                tech via aria-hidden + tabIndex=-1. */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={e => setWebsite(e.target.value)}
              />
            </div>

            {/* Row: Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
            </div>

            {/* Row: Phone + Inquiry Type */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div>
                <label style={labelStyle}>Phone (Optional)</label>
                <input
                  type="tel"
                  placeholder="202-000-0000"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>
              <div>
                <label style={labelStyle}>Inquiry Type</label>
                <select
                  value={form.type}
                  onChange={e => setForm(p => ({ ...p, type: e.target.value }))}
                  style={{ ...inputStyle, cursor: 'pointer', colorScheme: 'dark' }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  <option value="" style={{ background: '#111' }}>Select type...</option>
                  <option value="Wholesale Inquiry" style={{ background: '#111' }}>Wholesale Inquiry</option>
                  <option value="Retail Inquiry" style={{ background: '#111' }}>Retail Inquiry</option>
                  <option value="Bulk Pricing" style={{ background: '#111' }}>Bulk Pricing</option>
                  <option value="Research Partnership" style={{ background: '#111' }}>Research Partnership</option>
                  <option value="Distributor Interest" style={{ background: '#111' }}>Distributor Interest</option>
                  <option value="General Inquiry" style={{ background: '#111' }}>General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your needs, volume requirements, or questions..."
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            {formError && (
              <p style={{ color: '#e53e3e', fontSize: '13px', textAlign: 'center' }}>{formError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{
                background: submitting ? 'rgba(212,175,55,0.4)' : 'linear-gradient(135deg, #D4AF37, #E8C84A)',
                color: '#000',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '14px',
                border: 'none',
                cursor: submitting ? 'not-allowed' : 'pointer',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                boxShadow: '0 8px 28px rgba(212,175,55,0.3)',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                width: '100%',
              }}
            >
              {submitting ? 'Sending...' : 'Submit Inquiry →'}
            </button>

            <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
              Or call us directly at{' '}
              <a href="tel:2024253161" style={{ color: 'rgba(212,175,55,0.7)', fontWeight: 600, textDecoration: 'none' }}>202.425.3161</a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
