
import { NavLink as NavLinkRR } from 'react-router-dom'

export default function NavaLink({to, children, ...props}) {
  return (
    <NavLinkRR 
      {...props}
    className={( { isActive }) =>{
     return isActive ? 'is-active': undefined
    }}
    to={ to }>
      { children }
    </NavLinkRR>
  )
}


