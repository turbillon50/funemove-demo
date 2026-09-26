'use client'
import {useEffect} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'
import Image from 'next/image'

export default function Splash() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window === 'undefined') return
    const shown = sessionStorage.getItem('funemove-splash')
    const dest = localStorage.getItem('funemove-onboarded') ? '/home' : '/onboarding'
    if (shown) { router.replace(dest); return }
    const t = setTimeout(() => { sessionStorage.setItem('funemove-splash','1'); router.replace(dest) }, 2800)
    return () => clearTimeout(t)
  }, [router])

  return (
    <div style={{position:'relative', height:'100svh', overflow:'hidden', background:'#F2EDE4'}}>
      <Image src="/splash/bg.png" alt="" fill style={{objectFit:'cover', objectPosition:'center'}} priority/>
      {/* Overlay crema suave — no negro */}
      <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(242,237,228,0.3) 0%, rgba(242,237,228,0.75) 60%, rgba(242,237,228,0.97) 100%)'}}/>

      <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', paddingBottom:'4rem', gap:'0.6rem'}}>
        <motion.div
          animate={{scale:[1,1.08,1], opacity:[0.3,0.6,0.3]}}
          transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
          style={{width:'100px', height:'100px', borderRadius:'50%', border:'1px solid #B8935A', position:'absolute', bottom:'4rem', marginBottom:'5rem'}}
        />
        <motion.h1
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3, duration:1}}
          style={{fontFamily:'var(--font-cormorant),serif', color:'#B8935A', fontSize:'3rem', letterSpacing:'0.2em', fontWeight:300, position:'relative'}}
        >
          FUNEMOVE
        </motion.h1>
        <motion.p
          initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9, duration:1}}
          style={{color:'#6B5A3E', fontSize:'0.65rem', letterSpacing:'0.35em', textTransform:'uppercase', position:'relative'}}
        >
          Te llevamos con respeto
        </motion.p>
      </div>
    </div>
  )
}
