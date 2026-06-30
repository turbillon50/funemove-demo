import type {Metadata} from 'next'
import {Inter, Playfair_Display, JetBrains_Mono} from 'next/font/google'
import './globals.css'
import {BottomNav} from '@/components/bottom-nav'
import {DemoModeSwitcher} from '@/components/demo-mode-switcher'

const inter = Inter({subsets:['latin'], variable:'--font-inter'})
const playfair = Playfair_Display({subsets:['latin'], variable:'--font-playfair', weight:['400','700','800']})
const mono = JetBrains_Mono({subsets:['latin'], variable:'--font-mono', weight:['500','700']})

export const metadata: Metadata = {
  title: 'FUNEMOVE · Te llevamos con respeto',
  description: 'Traslados funerarios con dignidad. Operadores certificados, en minutos.',
}

export const viewport = {themeColor: '#0C1E3C'}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>
      <body style={{background:'#F8F5EF', color:'#0C1E3C', minHeight:'100svh', paddingBottom:'70px'}}>
        {children}
        <BottomNav/>
        <DemoModeSwitcher/>
      </body>
    </html>
  )
}
