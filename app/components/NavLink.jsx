'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children }) => {
    const path = usePathname();
    const isActive = path === href;
  return (
      <Link href={href} className={ isActive  ? 'text-red-400' : ''}>{children}</Link>
  )
}

export default NavLink