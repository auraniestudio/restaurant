import { useState, FormEvent } from 'react'

// Formspree form ID — override with VITE_FORMSPREE_ID in .env if needed
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_ID || 'meerqnge'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

// Half-hour time slots (e.g. 3:00, 3:30, 4:00) — 11:00 AM to 10:30 PM
function getTimeSlots(): { value: string; label: string }[] {
  const slots: { value: string; label: string }[] = []
  for (let h = 11; h <= 22; h++) {
    for (const m of [0, 30]) {
      const value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h
      const ampm = h < 12 ? 'AM' : 'PM'
      const label = `${hour12}:${String(m).padStart(2, '0')} ${ampm}`
      slots.push({ value, label })
    }
  }
  return slots
}

const TIME_SLOTS = getTimeSlots()

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const body = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      time: (form.elements.namedItem('time') as HTMLInputElement).value,
      guests: (form.elements.namedItem('guests') as HTMLInputElement).value,
      specialRequest: (form.elements.namedItem('specialRequest') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || `Request failed: ${res.status}`)
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="reservation" className="py-16 md:py-24 bg-charcoal text-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-serif text-gold text-sm tracking-[0.2em] uppercase mb-4">Reserve</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
            Book a Table
          </h2>
          <p className="mt-4 text-cream/80">
            We look forward to welcoming you. Reservations recommended.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-cream/10 rounded-sm border border-gold/30">
            <p className="font-serif text-xl text-gold mb-2">Thank you</p>
            <p className="text-cream/90">
              Your reservation request has been received. We will confirm shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cream/90 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream/90 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-cream/90 mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-cream/90 mb-2">
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all [color-scheme:dark]"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-cream/90 mb-2">
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all [color-scheme:dark]"
                >
                  <option value="">Select time</option>
                  {TIME_SLOTS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-cream/90 mb-2">
                Number of guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={2}
                max={12}
                required
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                placeholder="2"
              />
            </div>
            <div>
              <label htmlFor="specialRequest" className="block text-sm font-medium text-cream/90 mb-2">
                Special request <span className="text-cream/60 font-normal">(optional)</span>
              </label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                rows={3}
                className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-sm text-white placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-y"
                placeholder="Dietary needs, allergies, celebration, seating preference…"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gold text-white font-medium rounded-sm hover:bg-gold/90 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending…' : 'Submit Reservation'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
