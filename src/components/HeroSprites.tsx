/* Clean single-module HeroSprites component */
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
]

const rand = (min: number, max: number) => Math.random() * (max - min) + min

export default function HeroSprites({ count = 20 }: { count?: number }) {
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

      s.el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.style.opacity = String(rand(0.45, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
      s.el.style.width = `${90 * s.size}px`
      s.el.style.height = 'auto'
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
import React, { useEffect, useRef } from 'react'

// Single clean implementation: vertical-only raining sprites covering the whole viewport.

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
]

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function HeroSprites({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spritesRef = useRef<SpriteState[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = () => container.getBoundingClientRect()

    function makeImg() {
      const img = document.createElement('img')
      img.style.position = 'absolute'
      img.style.pointerEvents = 'none'
      img.style.userSelect = 'none'
      img.style.willChange = 'transform, opacity'
      img.draggable = false
      img.style.display = 'block'
      return img
    }

    function reset(s: SpriteState, initial = false) {
      const r = rect()
      const margin = Math.max(r.width, r.height) * 0.05
      const x = rand(-margin, r.width + margin)
      const speed = rand(220, 800) // faster speeds for frequent crossings

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

      s.el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.style.opacity = String(rand(0.45, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
      s.el.style.width = `${90 * s.size}px`
      s.el.style.height = 'auto'
    }

    function spawn(initial = false) {
      const el = makeImg()
      container.appendChild(el)
      const dir: 'down' | 'up' = Math.random() < 0.85 ? 'down' : 'up'
      const s: SpriteState = { el, x: 0, y: 0, vy: 0, size: 1, rotation: 0, vRotation: 0, direction: dir }
      reset(s, initial)
      return s
    }

    // spawn responsive count
    spritesRef.current = []
    const bounds = rect()
    const responsiveCap = Math.max(6, Math.floor(bounds.width / 60))
    const actual = Math.min(count, responsiveCap)
    for (let i = 0; i < actual; i++) spritesRef.current.push(spawn(true))

    function step(now: number) {
      if (lastRef.current === null) lastRef.current = now
      const dt = (now - lastRef.current) / 1000
      lastRef.current = now

      const b = rect()
      const off = Math.max(b.width, b.height) * 0.12

      for (const s of spritesRef.current) {
        s.y += s.vy * dt
        s.rotation += s.vRotation * dt
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`

        if (s.y < -off || s.y > b.height + off) {
          reset(s)
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onResize = () => {
      const r2 = rect()
      for (const s of spritesRef.current) {
        s.x = Math.max(-r2.width * 0.2, Math.min(s.x, r2.width * 1.2))
      }
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
]

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

// Raining sprites (vertical only). Covers the full viewport (fixed).
export default function HeroSprites({ count = 30 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spritesRef = useRef<SpriteState[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = () => container.getBoundingClientRect()

    function makeImg() {
      const img = document.createElement('img')
      img.style.position = 'absolute'
      img.style.pointerEvents = 'none'
      img.style.userSelect = 'none'
      img.style.willChange = 'transform, opacity'
      img.draggable = false
      return img
    }

    function spawn(): SpriteState {
      const el = makeImg()
      el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      container.appendChild(el)

      const dir: 'down' | 'up' = Math.random() < 0.85 ? 'down' : 'up'
      const s: SpriteState = { el, x: 0, y: 0, vy: 0, size: 1, rotation: 0, vRotation: 0, direction: dir }
      reset(s, true)
      return s
    }

    function reset(s: SpriteState, initial = false) {
      const r = rect()
      const margin = Math.max(r.width, r.height) * 0.05
      const x = rand(-margin, r.width + margin)
      const speed = rand(160, 700)

      if (s.direction === 'down') {
        s.x = x
        s.y = initial ? rand(-r.height * 0.5, r.height * 0.2) : -margin - rand(0, r.height * 0.2)
        s.vy = rand(speed * 0.6, speed)
      } else {
        s.x = x
        s.y = initial ? rand(r.height * 0.8, r.height * 1.3) : r.height + margin + rand(0, r.height * 0.2)
        s.vy = -rand(speed * 0.6, speed)
      }

      s.size = rand(0.35, 1)
      s.rotation = rand(-25, 25)
      s.vRotation = rand(-40, 40)

      s.el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.style.opacity = String(rand(0.45, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
      s.el.style.width = `${90 * s.size}px`
      s.el.style.height = 'auto'
    }

    // initial spawn with responsive cap
    spritesRef.current = []
    const r = rect()
    const responsiveCap = Math.max(8, Math.floor(r.width / 60))
    const actualCount = Math.min(count, responsiveCap)
    for (let i = 0; i < actualCount; i++) spritesRef.current.push(spawn())

    function step(now: number) {
      if (lastRef.current === null) lastRef.current = now
      const dt = (now - lastRef.current) / 1000
      lastRef.current = now

      const bounds = rect()
      const off = Math.max(bounds.width, bounds.height) * 0.12

      for (const s of spritesRef.current) {
        s.y += s.vy * dt
        s.rotation += s.vRotation * dt
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`

        if (s.y < -off || s.y > bounds.height + off) {
          reset(s)
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onResize = () => {
      const b = rect()
      for (const s of spritesRef.current) {
        s.x = Math.max(-b.width * 0.2, Math.min(s.x, b.width * 1.2))
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      for (const s of spritesRef.current) if (s.el && s.el.parentNode === container) container.removeChild(s.el)
      spritesRef.current = []
    }
  }, [count])

  return (
    <div ref={containerRef} aria-hidden style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }} />
  )
}
import React, { useEffect, useRef } from 'react'

type Sprite = {
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
]

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

// Full-viewport decorative sprites that "rain" either down or up and disappear.
export default function HeroSprites({ count = 30 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spritesRef = useRef<Sprite[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = () => container.getBoundingClientRect()

    function createEl() {
      const img = document.createElement('img')
      img.style.position = 'absolute'
      img.style.pointerEvents = 'none'
      img.style.userSelect = 'none'
      img.style.willChange = 'transform, opacity'
      img.style.display = 'block'
      img.draggable = false
      return img
    }

    function createSprite(): Sprite {
      const el = createEl()
      el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      container.appendChild(el)

      const direction = Math.random() < 0.85 ? 'down' : 'up'
      const size = rand(0.3, 1)
      const rotation = rand(-20, 20)
      const vRotation = rand(-30, 30)

      const s: Sprite = { el, x: 0, y: 0, vy: 0, size, rotation, vRotation, direction }
      resetSprite(s, true)
      return s
    }

    function resetSprite(s: Sprite, initial = false) {
      const r = rect()
      const margin = Math.max(r.width, r.height) * 0.05

      // horizontal position random across width
      const x = rand(-margin, r.width + margin)

      // choose speed: faster for larger values so they disappear quicker
      const speed = rand(160, 700) // px per second

      if (s.direction === 'down') {
        s.x = x
        s.y = initial ? rand(-r.height * 0.5, r.height * 0.2) : -margin - rand(0, r.height * 0.2)
        s.vy = rand(speed * 0.6, speed)
      } else {
        // up
        s.x = x
        s.y = initial ? rand(r.height * 0.8, r.height * 1.3) : r.height + margin + rand(0, r.height * 0.2)
        s.vy = -rand(speed * 0.6, speed)
      }

      s.size = rand(0.35, 1)
      s.rotation = rand(-25, 25)
      s.vRotation = rand(-40, 40)

      // visual tweaks
      s.el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.style.zIndex = '0'
      s.el.style.opacity = String(rand(0.45, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
      s.el.style.width = `${90 * s.size}px`
      s.el.style.height = 'auto'
    }

    // clear existing
    spritesRef.current = []
    const r = rect()
    const responsiveCap = Math.max(8, Math.floor((r.width / 60)))
    const actualCount = Math.min(count, responsiveCap)
    for (let i = 0; i < actualCount; i++) spritesRef.current.push(createSprite())

    function step(t: number) {
      if (lastRef.current === null) lastRef.current = t
      const dt = (t - lastRef.current) / 1000
      lastRef.current = t

      const rct = rect()
      const marginOff = Math.max(rct.width, rct.height) * 0.12

      for (const s of spritesRef.current) {
        s.y += s.vy * dt
        s.rotation += s.vRotation * dt
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`

        // if out of viewport by margin, reset (disappear and respawn)
        if (s.y < -marginOff || s.y > rct.height + marginOff) {
          // small delay/randomness before respawn
          resetSprite(s)
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onResize = () => {
      const r2 = rect()
      for (const s of spritesRef.current) {
        s.x = Math.max(-r2.width * 0.2, Math.min(s.x, r2.width * 1.2))
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      for (const s of spritesRef.current) if (s.el && s.el.parentNode === container) container.removeChild(s.el)
      spritesRef.current = []
    }
  }, [count])

  // fixed so it covers entire website background
  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
import React, { useEffect, useRef } from 'react'

type Sprite = {
  el: HTMLImageElement
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  vRotation: number
  size: number
  z: number
}

const IMAGES = [
  '/images/Another Roller Coaster FUN Completed NO BG.png',
]

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function HeroSprites({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spritesRef = useRef<Sprite[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = () => container.getBoundingClientRect()

    function createSprite(): Sprite {
      const img = document.createElement('img')
      img.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      img.style.position = 'absolute'
      img.style.pointerEvents = 'none'
      img.style.userSelect = 'none'
      img.style.willChange = 'transform, opacity'

      container.appendChild(img)

      const s: Sprite = {
        el: img,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        rotation: 0,
        vRotation: 0,
        size: 1,
        z: 1,
      }

      resetSprite(s)
      return s
    }

    function resetSprite(s: Sprite) {
      const r = rect()
      const margin = Math.max(r.width, r.height) * 0.12
      const side = Math.floor(rand(0, 4))
      let x = 0
      let y = 0
      let vx = 0
      let vy = 0

      // faster speed range for more frequent crossings
      const speed = rand(200, 600)

      if (side === 0) {
        x = -margin
        y = rand(-margin, r.height + margin)
        vx = rand(speed * 0.6, speed)
        vy = rand(-30, 30)
      } else if (side === 1) {
        x = r.width + margin
        y = rand(-margin, r.height + margin)
        vx = -rand(speed * 0.6, speed)
        vy = rand(-30, 30)
      } else if (side === 2) {
        x = rand(-margin, r.width + margin)
        y = -margin
        vy = rand(speed * 0.4, speed * 0.9)
        vx = rand(-40, 40)
      } else {
        x = rand(-margin, r.width + margin)
        y = r.height + margin
        vy = -rand(speed * 0.4, speed * 0.9)
        vx = rand(-40, 40)
      }

      s.x = x
      s.y = y
      s.vx = vx
      s.vy = vy
      s.rotation = rand(-18, 18)
      s.vRotation = rand(-30, 30)
      s.size = rand(0.25, 0.9)
      s.z = Math.floor(rand(1, 12))
      s.el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.style.zIndex = String(s.z)
      s.el.style.opacity = String(rand(0.5, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
      s.el.style.width = `${90 * s.size}px`
      s.el.style.height = 'auto'
    }

    // responsive cap (allow more sprites on wider viewports)
    spritesRef.current = []
    const r = rect()
    const responsiveCap = Math.max(4, Math.floor(r.width / 60))
    const actualCount = Math.min(count, responsiveCap)
    for (let i = 0; i < actualCount; i++) spritesRef.current.push(createSprite())

    function step(t: number) {
      if (lastRef.current === null) lastRef.current = t
      const dt = (t - lastRef.current) / 1000
      lastRef.current = t
      const rct = rect()
      const marginOff = Math.max(rct.width, rct.height) * 0.18

      for (const s of spritesRef.current) {
        s.x += s.vx * dt
        s.y += s.vy * dt
        s.rotation += s.vRotation * dt
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`

        if (s.x < -marginOff || s.x > rct.width + marginOff || s.y < -marginOff || s.y > rct.height + marginOff) {
          resetSprite(s)
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onResize = () => {
      const r = rect()
      for (const s of spritesRef.current) {
        s.x = Math.max(-r.width * 0.5, Math.min(s.x, r.width * 1.5))
        s.y = Math.max(-r.height * 0.5, Math.min(s.y, r.height * 1.5))
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      for (const s of spritesRef.current) if (s.el && s.el.parentNode === container) container.removeChild(s.el)
      spritesRef.current = []
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{ position: 'absolute', inset: '0', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
import React, { useEffect, useRef } from 'react'

type Sprite = {
  el: HTMLImageElement
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  vRotation: number
  size: number
  z: number
}

const IMAGES = [
  '/images/Another Roller Coaster FUN Completed NO BG.png',
]

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function HeroSprites({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const spritesRef = useRef<Sprite[]>([])
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number | null>(null)
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
  </div>
  )
}

    const rect = () => container.getBoundingClientRect()

    function createSprite(): Sprite {
      const img = document.createElement('img')
      img.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      img.style.position = 'absolute'
      img.style.pointerEvents = 'none'
      img.style.userSelect = 'none'
      img.style.willChange = 'transform, opacity'

      container.appendChild(img)

      const s: Sprite = {
        el: img,
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        rotation: 0,
        vRotation: 0,
        size: 1,
        z: 1,
      }

      resetSprite(s)
      return s
    }

    function resetSprite(s: Sprite) {
      const r = rect()
      const margin = Math.max(r.width, r.height) * 0.15
      // spawn side: 0=left,1=right,2=top,3=bottom
      const side = Math.floor(rand(0, 4))
      let x = 0
      let y = 0
      let vx = 0
      let vy = 0

  // choose faster speed range (pixels per second) so sprites cross and reset more frequently.
  // Increased range makes motion faster and more dynamic as requested.
  const speed = rand(80, 320) // px/sec

      if (side === 0) {
        // left -> move right
        x = -margin
        y = rand(-margin, r.height + margin)
        vx = rand(speed * 0.6, speed)
        vy = rand(-20, 20)
      } else if (side === 1) {
        // right -> move left
        x = r.width + margin
        y = rand(-margin, r.height + margin)
        vx = -rand(speed * 0.6, speed)
        vy = rand(-20, 20)
      } else if (side === 2) {
        // top -> move down
        x = rand(-margin, r.width + margin)
        y = -margin
        vy = rand(speed * 0.4, speed * 0.9)
        vx = rand(-30, 30)
      } else {
        // bottom -> move up
        x = rand(-margin, r.width + margin)
        y = r.height + margin
        vy = -rand(speed * 0.4, speed * 0.9)
        vx = rand(-30, 30)
      }

      s.x = x
      s.y = y
      s.vx = vx
      s.vy = vy
      s.rotation = rand(-12, 12)
      s.vRotation = rand(-10, 10)
  // slightly smaller average size so sprites traverse the area quicker visually
  s.size = rand(0.4, 0.9)
      s.z = Math.floor(rand(1, 10))
      s.el.src = IMAGES[Math.floor(Math.random() * IMAGES.length)]
      s.el.style.zIndex = String(s.z)
      s.el.style.opacity = String(rand(0.7, 1))
      s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`
  s.el.style.width = `${100 * s.size}px`
      s.el.style.height = 'auto'
    }

    // initialize sprites
    spritesRef.current = []
    for (let i = 0; i < count; i++) {
      spritesRef.current.push(createSprite())
    }

    function step(t: number) {
      if (lastRef.current === null) lastRef.current = t
      const dt = (t - lastRef.current) / 1000
      lastRef.current = t
      const rct = rect()
      const marginOff = Math.max(rct.width, rct.height) * 0.2

      for (const s of spritesRef.current) {
        s.x += s.vx * dt
        s.y += s.vy * dt
        s.rotation += s.vRotation * dt
        s.el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${s.rotation}deg) scale(${s.size})`

        // off-screen check
        if (
          s.x < -marginOff ||
          s.x > rct.width + marginOff ||
          s.y < -marginOff ||
          s.y > rct.height + marginOff
        ) {
          // reset to opposite side
          resetSprite(s)
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    // on resize, reposition sprites within new bounds
    const onResize = () => {
      const r = rect()
      for (const s of spritesRef.current) {
        // clamp current positions inside new rect to avoid huge jumps
        s.x = Math.max(-r.width * 0.5, Math.min(s.x, r.width * 1.5))
        s.y = Math.max(-r.height * 0.5, Math.min(s.y, r.height * 1.5))
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      for (const s of spritesRef.current) {
        if (s.el && s.el.parentNode === container) container.removeChild(s.el)
      }
      spritesRef.current = []
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: '0',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
