import Link from 'next/link'
import NavLink from './components/NavLink'

const Header = () => {
  return (
    <div className='flex gap-10'>
        <NavLink href="/">Home</NavLink>  
        <NavLink href="/about">About</NavLink>  
        <NavLink href="/contact">Contact Us</NavLink>
    </div>
  )
}

export default Header