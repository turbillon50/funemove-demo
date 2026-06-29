export type Operator = {id:string;name:string;city:string;rating:number;plate:string}
export type Service = {id:string;date:string;amount:number;status:'completado'|'en curso'|'cancelado';operatorId:string}
export type KPIs = {todayServices:number;activeOperators:number;monthRevenue:number;avgRating:number}

export const operators: Operator[] = [
  {id:'op1',name:'Carlos Mendoza',city:'CDMX',rating:4.9,plate:'FNR-2341'},
  {id:'op2',name:'Roberto Sánchez',city:'Monterrey',rating:4.8,plate:'FNR-1892'},
  {id:'op3',name:'Ana Gutiérrez',city:'Guadalajara',rating:5.0,plate:'FNR-3017'},
  {id:'op4',name:'Miguel Torres',city:'Querétaro',rating:4.7,plate:'FNR-4421'},
]

export const services: Service[] = [
  {id:'srv1',date:new Date(Date.now()-2*86400000).toISOString(),amount:3500,status:'completado',operatorId:'op1'},
  {id:'srv2',date:new Date(Date.now()-5*86400000).toISOString(),amount:7200,status:'cancelado',operatorId:'op2'},
  {id:'srv3',date:new Date(Date.now()-9*86400000).toISOString(),amount:14500,status:'completado',operatorId:'op3'},
  {id:'srv4',date:new Date(Date.now()-15*86400000).toISOString(),amount:18000,status:'en curso',operatorId:'op1'},
  {id:'srv5',date:new Date(Date.now()-23*86400000).toISOString(),amount:9000,status:'completado',operatorId:'op2'},
]

export const kpis: KPIs = {
  todayServices:24,
  activeOperators:18,
  monthRevenue:142500,
  avgRating:4.87
}
