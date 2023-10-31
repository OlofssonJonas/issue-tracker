
import Link  from 'next/link'
import { AiFillBug } from 'react-icons/ai'

const links = [
    { label: 'Dashboad', href: '/' },
    { label: 'Issues', href: '/issues' }
]

const Navbar = () => {
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link key={link.href}
                className='text-zinc-500 hover:text-zinc-900 transition-colors'
                href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar