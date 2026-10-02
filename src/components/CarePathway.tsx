import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ClipboardCheck, HeartHandshake, ChartNoAxesCombined, Search, BookOpen } from 'lucide-react';
const steps = [
 {title:'Screen & assess',icon:ClipboardCheck,text:'Qualified clinicians use appropriate screening and assessment to understand trauma exposure, symptoms, functioning, and the need for further evaluation.'},
 {title:'Plan & treat',icon:HeartHandshake,text:'Clinical professionals bring the assessment together with the child’s circumstances and their own judgment to guide treatment and support.'},
 {title:'Re-measure',icon:ChartNoAxesCombined,text:'Repeating appropriate measures over time can help clinicians track change, review progress, and recognize when care may need to be adjusted.'},
 {title:'Study outcomes',icon:Search,text:'With appropriate permissions and governance, research could examine patterns in recovery and treatment response across participating settings.'},
 {title:'Apply learning',icon:BookOpen,text:'Findings may inform future research and implementation. Human professionals remain responsible for clinical diagnosis and treatment.'},
];
export default function CarePathway(){
 const [selected,setSelected]=useState(0); const reduced=useReducedMotion(); const step=steps[selected]; const Icon=step.icon;
 return <div className="care-explorer"><p className="eyebrow">Explore the care pathway</p><div className="care-steps" role="group" aria-label="Care pathway stages">{steps.map((s,i)=><button key={s.title} type="button" aria-pressed={selected===i} aria-controls="care-stage" onClick={()=>setSelected(i)}><span>{String(i+1).padStart(2,'0')}</span>{s.title}</button>)}</div><div id="care-stage" className="care-stage" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait" initial={false}><motion.div key={selected} initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={reduced?undefined:{opacity:0,y:-5}} transition={{duration:.18}}><Icon size={36} strokeWidth={1.4} aria-hidden="true"/><h3>{step.title}</h3><p>{step.text}</p></motion.div></AnimatePresence></div><p className="care-note">Illustrative care pathway · YTI’s data initiative is planned.</p></div>;
}
