import { useCallback, useEffect, useMemo, useState } from 'react'
import { TestimonialCard } from './TestimonialCard'
import { testimonials } from '../data/testimonials'

const SLIDE_DURATION_MS = 5000
const CARDS_PER_SLIDE = 3
const TRANSITION_MS = 600

export function TestimonialsSection() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isTransitionDisabled, setIsTransitionDisabled] = useState(false)

  const slides = useMemo(() => {
    const result: typeof testimonials[] = []
    for (let i = 0; i < testimonials.length; i += CARDS_PER_SLIDE) {
      result.push(testimonials.slice(i, i + CARDS_PER_SLIDE))
    }
    return result
  }, [])

  // Infinite loop: append first slide at the end so we can animate to it, then jump back
  const infiniteSlides = useMemo(() => {
    if (slides.length <= 1) return slides
    return [...slides, slides[0]]
  }, [slides])

  const realCount = slides.length
  const isInfinite = realCount > 1

  const goToSlide = useCallback((index: number) => {
    setSlideIndex(index)
  }, [])

  const goNext = useCallback(() => {
    setSlideIndex((prev) => {
      if (!isInfinite) return prev
      if (prev >= infiniteSlides.length - 1) return prev
      return prev + 1
    })
  }, [isInfinite, infiniteSlides.length])

  useEffect(() => {
    if (!isInfinite) return
    const interval = setInterval(goNext, SLIDE_DURATION_MS)
    return () => clearInterval(interval)
  }, [goNext, isInfinite])

  // When we land on the duplicated first slide, jump back to index 0 without animation
  const handleTransitionEnd = useCallback(() => {
    if (!isInfinite || slideIndex !== infiniteSlides.length - 1) return
    setIsTransitionDisabled(true)
    setSlideIndex(0)
  }, [isInfinite, slideIndex, infiniteSlides.length])

  useEffect(() => {
    if (!isTransitionDisabled) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsTransitionDisabled(false))
    })
    return () => cancelAnimationFrame(id)
  }, [isTransitionDisabled])

  const currentDot = slideIndex % realCount

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-serif text-gold text-sm tracking-[0.2em] uppercase mb-4">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-charcoal/70 max-w-xl mx-auto">
            Experiences that keep our guests coming back.
          </p>
        </div>
        <div className="relative">
          <div
            className="flex will-change-transform"
            style={{
              transform: `translate3d(-${slideIndex * 100}%, 0, 0)`,
              transition: isTransitionDisabled
                ? 'none'
                : `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {infiniteSlides.map((slideTestimonials, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-stretch justify-center"
                style={{ minHeight: 280 }}
              >
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4 items-stretch">
                  {slideTestimonials.map((t) => (
                    <div key={t.name} className="flex">
                      <TestimonialCard {...t} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {realCount > 1 && (
            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="w-full max-w-xs h-0.5 bg-charcoal/10 rounded-full overflow-hidden">
                <div
                  key={slideIndex}
                  className="w-full h-full bg-gold rounded-full origin-left"
                  style={{
                    animation: `slide-progress ${SLIDE_DURATION_MS}ms linear forwards`,
                  }}
                />
              </div>
              <style>{`
                @keyframes slide-progress {
                  from { transform: scaleX(0); }
                  to { transform: scaleX(1); }
                }
              `}</style>
              <div className="flex items-center justify-center gap-2.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goToSlide(i)}
                    className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                      i === currentDot
                        ? 'h-2.5 w-8 bg-gold shadow-sm'
                        : 'h-2 w-2 bg-charcoal/25 hover:bg-charcoal/40 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
