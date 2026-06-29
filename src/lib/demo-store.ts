import {create} from 'zustand'
import {persist} from 'zustand/middleware'
export type AppMode = 'cliente'|'operador'|'admin'
type Store = {mode:AppMode; setMode:(m:AppMode)=>void}
export const useDemoStore = create<Store>()(persist(
  (set)=>({mode:'cliente', setMode:(mode)=>set({mode})}),
  {name:'funemove-mode'}
))
