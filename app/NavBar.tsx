import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

export const NavBar = () => {
    const linkList = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Issues',
            href: '/issues'
        }
    ]
  return (
    <nav className='flex space-x-5 border-b-1 items-center h-14 mb-5 px-5'>
          <Link href="/"><AiFillBug /></Link>  
          <ul >
              {linkList.map(link =>
              (<Link
                  className='px-5 py-1 rounded hover:bg-gray-200'
                  key={link.href}
                  href={link.href}>{link.title}</Link>))}
          </ul>  
    </nav>
  )
}
