'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import classnames from 'classnames'

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

    const pathName = usePathname()
    console.log(pathName)
    
  return (
    <nav className='flex space-x-5 border-b-1 items-center h-14 mb-5 px-5'>
          <Link href="/"><AiFillBug /></Link>  
          <ul >
              {linkList.map(link =>
              (<Link
                  className={classnames({
                      'bg-gray-200': pathName === link.href,
                      'px-5': true,
                      'py-1': true,
                      'rounded': true,
                      'hover:bg-gray-200': true 
                  })}
                  key={link.href}
                  href={link.href}>{link.title}</Link>))}
          </ul>  
    </nav>
  )
}
