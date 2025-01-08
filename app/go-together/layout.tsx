import Link from 'next/link';
import React from 'react'

export default function layout({children}: Readonly<{
    children: React.ReactNode;
  }>)
  {
  return (
    <div className='min-h-screen bg-slate-200 flex items-center'>
        <div className='max-w-2xl m-auto'>
          <div className='flex justify-center mb-4'>
        <Link href='/'><img width={100} src='/home-icon-silhouette-svgrepo-com.svg' /></Link></div>
        <div className='bg-[background] rounded-md  p-4'>
        {children}
        </div></div>

    </div>
  )
}
