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
    const t = setTimeout(() => { sessionStorage.setItem('funemove-splash','1'); router.replace(dest) }, 2600)
    return () => { clearTimeout(t); clearTimeout(t0) }
  }, [router])

  return (
    <div style={{position:'fixed', inset:0, zIndex:9999, overflow:'hidden', background:'#0C1E3C'}}>
      {/* Foto Higgsfield de fondo */}
      <Image src="/splash/bg.png" alt="" fill style={{objectFit:'cover', objectPosition:'center'}} priority/>

      {/* Overlay navy sutil — solo para legibilidad del texto, sin elementos decorativos */}
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(180deg, rgba(12,30,60,0.35) 0%, rgba(12,30,60,0.45) 45%, rgba(10,22,40,0.88) 100%)',
      }}/>

      <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', paddingBottom:'14%', gap:'14px'}}>

        <Image src="/brand/emblem.png" alt="FUNEMOVE" width={88} height={88}
          style={{
            objectFit:'contain',
            filter:'drop-shadow(0 4px 24px rgba(0,0,0,0.5))',
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(8px)',
            transition:'all 0.8s cubic-bezier(0.22,1,0.36,1)',
            marginBottom:'4px',
          }}/>

        <h1 style={{
          fontFamily:'var(--font-playfair),serif', fontSize:'2.4rem', fontWeight:700,
          color:'#F8F5EF', letterSpacing:'4px', margin:0,
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(8px)',
          transition:'all 0.8s ease 0.15s',
          textShadow:'0 2px 16px rgba(0,0,0,0.35)',
        }}>
          FUNEMOVE
        </h1>

        <div style={{
          width: show ? '32px' : '0px', height:'1px', background:'#B8965A',
          transition:'width 0.6s ease 0.5s',
        }}/>

        <p style={{
          color:'rgba(248,245,239,0.75)', letterSpacing:'2.5px', fontSize:'10px', fontWeight:600,
          margin:0, textTransform:'uppercase',
          opacity: show ? 1 : 0, transition:'opacity 0.8s ease 0.6s',
        }}>
          Te llevamos con respeto
        </p>
      </div>
    </div>
  )
}
