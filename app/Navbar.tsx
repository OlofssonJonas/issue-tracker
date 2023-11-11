
'use client'

import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'
import Skeleton from './components/Skeleton'

const links = [
    { label: 'Dashboad', href: '/' },
    { label: 'Issues', href: '/issues/list' }
]

const Navbar = () => {
 
  return (
    <nav className=' border-b mb-5 px-5 h-14 py-3'>
      <Container>
        <Flex justify='between'>
          <Flex align='center' gap='3'>
            <Link href="/"><AiFillBug /></Link>
              <NavLinks />
          </Flex>
            <AuthStatus />
        </Flex>
      </Container>
    </nav>
  )
}
export default Navbar


const AuthStatus = () => {
  const { status, data: session} = useSession()

  if( status === 'loading') return <Skeleton width="3rem" />
  
  if( status === 'unauthenticated') return (
  <Link className="nav-link" href="/api/auth/signin">Log in</Link>)

   return (
      <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar src={session!.user?.image!} fallback='?' 
            radius='full' size='2' className='cursor-pointer' />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
            <Text size='3'>
            {session!.user?.email}
            </Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
                <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        </Box>
   )
}

const NavLinks = () => {
  const currentPath = usePathname()

  return (
    <ul className='flex space-x-6'>
            {links.map(link => 
            <li key={link.href}>
                <Link 
               className={classNames({
                "nav-link": true,
                 '!text-zinc-900': link.href === currentPath,
                })}
                href={link.href}>{link.label}</Link></li>)}
        </ul>
  )
}
