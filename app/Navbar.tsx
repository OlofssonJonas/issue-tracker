
'use client'

import { Box } from '@radix-ui/themes'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'

const links = [
    { label: 'Dashboad', href: '/' },
    { label: 'Issues', href: '/issues/list' }
]

const Navbar = () => {
    const currentPath = usePathname()
    const { status, data: session} = useSession()

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <li key={link.href}>
                <Link 
               className={classNames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true
               })}
                href={link.href}>{link.label}</Link></li>)}
        </ul>
        <Box>
          { status === "authenticated" && <Link href="/api/auth/signout">Log out</Link>}
          { status === "unauthenticated" && <Link href="/api/auth/signin">Log in</Link> }
        </Box>
    </nav>
  )
}

export default Navbar