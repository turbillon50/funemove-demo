import type {Metadata} from 'next'
import {Inter, Cormorant_Garamond} from 'next/font/google'
import './globals.css'
import {BottomNav} from '@/components/bottom-nav'
import {DemoModeSwitcher} from '@/components/demo-mode-switcher'

const inter = Inter({subsets:['latin'], variable:'--font-inter'})
const cormorant = Cormorant_Garamond({subsets:['latin'], variable:'--font-cormorant', weight:['300','400','600']})

export const metadata: Metadata = {title:'FUNEMOVE · Te llevamos con respeto', description:'Servicio funerario de traslado con dignidad'}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body style={{background:'#F2EDE4', color:'#1A1008', minHeight:'100svh', paddingBottom:'64px'}}>
        {children}
        <BottomNav/>
        <DemoModeSwitcher/>
      </body>
    </html>
  )
}
