'use client'
import {useDemoStore,AppMode} from '@/lib/demo-store'
import {motion} from 'framer-motion'
import {useRouter} from 'next/navigation'

const ROUTES:Record<AppMode,string>={cliente:'/home',operador:'/operador',admin:'/admin'}

export const DemoModeSwitcher=()=>{
  const {mode,setMode}=useDemoStore()
  const router=useRouter()
  const toggle=(m:AppMode)=>{setMode(m);router.push(ROUTES[m])}
  return(
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
      className="fixed bottom-16 right-3 z-50 bg-[#1a1a1a] border border-[#333] rounded-full flex overflow-hidden shadow-xl">
      {(['cliente','operador','admin'] as AppMode[]).map(m=>(
        <button key={m} onClick={()=>toggle(m)}
          className={`px-3 py-1.5 text-xs font-ui transition-colors ${mode===m?'bg-gold text-[#0A0A0A] font-bold':'text-[#888] hover:text-white'}`}>
          {m[0].toUpperCase()+m.slice(1)}
        </button>
      ))}
    </motion.div>
  )
}
