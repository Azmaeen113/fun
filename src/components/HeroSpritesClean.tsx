import React, { useEffect, useRef } from 'react'

type SpriteState = {
  el: HTMLImageElement
  x: number
  y: number
  vy: number
  size: number
  rotation: number
  vRotation: number
  direction: 'down' | 'up'
}

const IMAGES = [
  '/images/Another Roller Coaster FUN Completed NO BG.png',
  '/images/Parachuting FUN Completed NO BG.png',
  '/images/Flying Fun Completed NO BG.png',
  '/images/Roller Coaster FUN Completed NO BG.png',
  '/images/Rope Fun Completed NO BG.png',
  '/images/Shocked FUN Completed NO BG.png',
  '/images/Statue FUN Completed NO BG.png',
  '/images/Swimming FUN Completed NO BG.png',
  '/images/Upside Down FUN Completed NO BG.png',
  '/images/Vomitting FUN Completed NO BG.png',
]

const rand = (min: number, max: number) => Math.random() * (max - min) + min

export default function HeroSpritesClean({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spritesRef = useRef<SpriteState[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = () => container.getBoundingClientRect()

    const makeImg = () => {
      const img = document.createElement('img')
      img.style.position = 'absolute'
      img.style.pointerEvents = 'none'
      img.style.userSelect = 'none'
      img.style.willChange = 'transform, opacity'
      img.draggable = false
      img.style.display = 'block'
      
      // Add error handling for image loading
      img.onerror = () => {
        console.warn('Failed to load image:', img.src)
        img.style.display = 'none'
      }
      
      img.onload = () => {
        img.style.display = 'block'
      }
      
      return img
    }

    const reset = (s: SpriteState, initial = false) => {
      const r = rect()
      const margin = Math.max(r.width, r.height) * 0.06
      const x = rand(-margin, r.width + margin)
      const speed = rand(240, 900)

      if (s.direction === 'down') {
        s.x = x
        s.y = initial ? rand(-r.height * 0.6, r.height * 0.2) : -margin - rand(0, r.height * 0.2)
        s.vy = rand(speed * 0.6, speed)
      } else {
        s.x = x
        s.y = initial ? rand(r.height * 0.8, r.height * 1.3) : r.height + margin + rand(0, r.height * 0.2)
        s.vy = -rand(speed * 0.6, speed)
      }

      s.size = rand(0.35, 1)
      s.rotation = rand(-25, 25)
      s.vRotation = rand(-40, 40)

      const imageSrc = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.src = imageSrc
      s.el.style.opacity = String(rand(0.45, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
      s.el.style.width = `${90 * s.size}px`
      s.el.style.height = 'auto'
      
      // Debug: log the image source being used
      console.log('Loading background sprite image:', imageSrc)
    }

    const spawn = (initial = false) => {
      const el = makeImg()
      container.appendChild(el)
      const dir: 'down' | 'up' = Math.random() < 0.85 ? 'down' : 'up'
      const s: SpriteState = { el, x: 0, y: 0, vy: 0, size: 1, rotation: 0, vRotation: 0, direction: dir }
      reset(s, initial)
      return s
    }

    spritesRef.current = []
    const b = rect()
    const responsiveCap = Math.max(6, Math.floor(b.width / 60))
    const actual = Math.min(count, responsiveCap)
    for (let i = 0; i < actual; i++) spritesRef.current.push(spawn(true))

    const step = (now: number) => {
      if (lastRef.current === null) lastRef.current = now
      const dt = (now - lastRef.current) / 1000
      lastRef.current = now

      const bounds = rect()
      const off = Math.max(bounds.width, bounds.height) * 0.12

      for (const s of spritesRef.current) {
        s.y += s.vy * dt
        s.rotation += s.vRotation * dt
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
        if (s.y < -off || s.y > bounds.height + off) reset(s)
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onResize = () => {
      const r2 = rect()
      for (const s of spritesRef.current) s.x = Math.max(-r2.width * 0.2, Math.min(s.x, r2.width * 1.2))
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      for (const s of spritesRef.current) if (s.el && s.el.parentNode === container) container.removeChild(s.el)
      spritesRef.current = []
    }
  }, [count])

  return <div ref={containerRef} aria-hidden style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }} />
}
