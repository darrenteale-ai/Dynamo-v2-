"use client";
import { useMemo, useState } from "react";

const initialShifts = [
 {id:"1",callSign:"PUM101",area:"Luton",date:"2026-09-17",start:"10:00",end:"22:00",status:"Open",crew:"—"},
 {id:"2",callSign:"PUM102",area:"Stevenage",date:"2026-09-17",start:"10:00",end:"22:00",status:"Assigned",crew:"Paramedic + ECA"},
 {id:"3",callSign:"PUM104",area:"Luton",date:"2026-09-17",start:"19:00",end:"05:00",status:"Assigned",crew:"Paramedic + ECA"},
 {id:"4",callSign:"PUM105",area:"Stevenage",date:"2026-09-17",start:"19:00",end:"05:00",status:"Open",crew:"—"},
];
export default function RotaPage(){
 const [shifts,setShifts]=useState(initialShifts); const [filter,setFilter]=useState("");
 const filtered=useMemo(()=>shifts.filter(s=>`${s.callSign} ${s.area} ${s.status}`.toLowerCase().includes(filter.toLowerCase())),[shifts,filter]);
 function assign(id:string){setShifts(x=>x.map(s=>s.id===id?{...s,status:"Assigned",crew:"Paramedic + ECA"}:s));}
 return <section className="content"><h1 className="page-title">Rota</h1><p className="muted">Operational shift planning and crew allocation.</p><div className="card" style={{marginTop:20}}><div style={{display:"flex",gap:10,justifyContent:"space-between",marginBottom:15}}><input placeholder="Search call sign, area or status" value={filter} onChange={e=>setFilter(e.target.value)} style={{padding:10,border:"1px solid #dbe3ec",borderRadius:6,width:320}}/><button onClick={()=>setShifts([...shifts,{id:String(Date.now()),callSign:"NEW",area:"Unallocated",date:"2026-09-17",start:"19:00",end:"05:00",status:"Open",crew:"—"}])} style={{padding:"10px 14px",background:"#005eb8",color:"white",border:0,borderRadius:6}}>+ Add shift</button></div><table className="table"><thead><tr><th>Call sign</th><th>Area</th><th>Date</th><th>Time</th><th>Crew</th><th>Status</th><th></th></tr></thead><tbody>{filtered.map(s=><tr key={s.id}><td>{s.callSign}</td><td>{s.area}</td><td>{s.date}</td><td>{s.start}–{s.end}</td><td>{s.crew}</td><td><span className={`badge ${s.status==="Assigned"?"green":"amber"}`}>{s.status}</span></td><td>{s.status==="Open"&&<button onClick={()=>assign(s.id)} style={{padding:"6px 9px"}}>Assign</button>}</td></tr>)}</tbody></table></div></section>
}
