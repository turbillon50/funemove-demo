'use client'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

export default function Splash() {
  const router = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t0 = setTimeout(() => setShow(true), 50)
    if (typeof window === 'undefined') return
    const shown = sessionStorage.getItem('funemove-splash')
    const dest = localStorage.getItem('funemove-onboarded') ? '/home' : '/onboarding'
    if (shown) { router.replace(dest); return }
    const t = setTimeout(() => { sessionStorage.setItem('funemove-splash','1'); router.replace(dest) }, 2400)
    return () => { clearTimeout(t); clearTimeout(t0) }
  }, [router])

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:9999,
      background:'linear-gradient(160deg, #0C1E3C 0%, #16294d 60%, #0a1628 100%)',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'20px',
    }}>
      <div style={{position:'absolute', width:'280px', height:'280px', background:'radial-gradient(circle, rgba(184,150,90,.5) 0%, transparent 70%)', borderRadius:'50%'}}/>
      <Image src="/brand/emblem.png" alt="FUNEMOVE" width={120} height={120}
        style={{
          objectFit:'contain', position:'relative', zIndex:1,
          filter:'drop-shadow(0 6px 32px rgba(184,150,90,.55))',
          opacity: show ? 1 : 0, transform: show ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.75)',
          transition:'all 0.7s cubic-bezier(0.22,1,0.36,1)',
        }}/>
      <h1 style={{
        fontFamily:'var(--font-playfair),serif', fontSize:'40px', fontWeight:800,
        color:'#F8F5EF', letterSpacing:'6px', position:'relative', zIndex:1, margin:0,
        opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(10px)',
        transition:'all 0.7s ease 0.2s',
      }}>
        FUNEMOVE
      </h1>
      <p style={{
        color:'#B8965A', letterSpacing:'3px', fontSize:'11px', fontWeight:700,
        position:'relative', zIndex:1, margin:0,
        opacity: show ? 1 : 0, transition:'opacity 0.7s ease 0.4s',
      }}>
        TE LLEVAMOS CON RESPETO
      </p>
    </div>
  )
}
