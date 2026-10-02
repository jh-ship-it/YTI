import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
const navigation = [{name:'Mission',href:'/mission'},{name:'Programs',href:'/programs'},{name:'Data Initiative',href:'/data-initiative'},{name:'For Organizations',href:'/clinicians'},{name:'About',href:'/about'},{name:'Contact',href:'/contact'}];
export default function Navbar() {
 const [open,setOpen]=useState(false); const {pathname}=useLocation(); const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false);},[pathname]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[]);
 const links=navigation.map(item=><Link key={item.href} to={item.href} aria-current={pathname===item.href?'page':undefined}>{item.name}</Link>);
 return <header className="sticky top-0 z-50 bg-white border-b border-accent"><a href="#main-content" className="skip-link">Skip to content</a><nav className="site-nav" aria-label="Main navigation"><Link to="/" aria-label="Youth Trauma Initiative home"><Logo/></Link><div className="nav-links">{links}</div><Link to="/donate" className="nav-support desktop-support">Support YTI</Link><button ref={toggle} type="button" className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>{open&&<nav className="mobile-links" id="mobile-navigation" aria-label="Mobile navigation">{links}<Link to="/research">Research</Link><Link to="/donate" className="nav-support">Support YTI</Link></nav>}</header>;
}
