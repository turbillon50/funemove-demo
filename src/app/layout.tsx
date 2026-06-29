import type {Metadata} from 'next'
import {Inter,Cormorant_Garamond} from 'next/font/google'
import './globals.css'
import {BottomNav} from '@/components/bottom-nav'
import {DemoModeSwitcher} from '@/components/demo-mode-switcher'

const inter=Inter({subsets:['latin'],variable:'--font-inter'})
const cormorant=Cormorant_Garamond({subsets:['latin'],variable:'--font-cormorant',weight:['300','400','600']})

export const metadata:Metadata={title:'FUNEMOVE',description:'Te llevamos con respeto'}

export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-bg text-white min-h-screen pb-16">
        {children}
        <BottomNav/>
        <DemoModeSwitcher/>
      </body>
    </html>
  )
}
