import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <header className='bg-emerald-200'>
      <nav className='flex justify-between items-center max-w-4xl mx-auto'>
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <Link href='/' className='text-2xl font-bold text-gray-800'>
      trav-host
      </Link>

      <ul className='flex space-x-4'>
        <li>
          <Link href='/blogs'
          className='text-slate hover:underline'>
            Blogs
          </Link>
        </li>
      </ul>

      <ul className='flex space-x-4'>
        <li>
          <Link href='/api/auth/signin'
          className='text-slate hover:underline'>
            Login
          </Link>
        </li>
      </ul>


      </nav>
    </header>
  )
}

export default header