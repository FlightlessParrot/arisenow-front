import Link from '@/components/Link'
import React from 'react'

export default function Navigation() {
  return (
    <nav className='bg-slate-200 dark:bg-slate-800 p-2 flex gap-2 flex-wrap m-2 rounded-xl'>
        <Link href={'/'}>Home</Link>
        <Link href='/other'>City</Link>
        <Link href='go-together/login'>Log in</Link>
        <Link href='/go-together/register'>Sign in</Link>
       
    </nav>
  )
}
