'use client'
import {useEffect} from 'react'
import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'

export default function Splash(){
  const router=useRouter()
  useEffect(()=>{
    if(typeof window==='undefined') return
    const shown=sessionStorage.getItem('funemove-splash')
    if(shown){
      const onboarded=localStorage.getItem('funemove-onboarded')
      router.replace(onboarded?'/home':'/onboarding')
      return
    }
    const t=setTimeout(()=>{
      sessionStorage.setItem('funemove-splash','1')
      const onboarded=localStorage.getItem('funemove-onboarded')
      router.replace(onboarded?'/home':'/onboarding')
    },2500)
    return ()=>clearTimeout(t)
  },[router])

  return(
    <div className="flex items-center justify-center h-screen bg-bg flex-col gap-4">
      <motion.div className="relative flex items-center justify-center w-40 h-40"
        animate={{rotate:360}} transition={{repeat:Infinity,duration:8,ease:'linear'}}>
        <motion.div className="absolute inset-0 rounded-full border-2 border-gold"
          animate={{opacity:[0.2,0.8,0.2],scale:[0.9,1.1,0.9]}}
          transition={{repeat:Infinity,duration:2}}/>
      </motion.div>
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}}
        className="font-heading text-gold text-5xl tracking-widest">
        FUNEMOVE
      </motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:0.6}} transition={{delay:0.8}}
        className="text-sm tracking-[0.3em] text-white uppercase">
        Te llevamos con respeto
      </motion.p>
    </div>
  )
}
