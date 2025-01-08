'use client'

import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';



export default function Link({href, children} :{href: string, children:React.ReactNode} ) {
    const pathname = usePathname();
    const active = pathname === href;
    const activeClass = active ? 'text-gray-400 ' : ' hover:text-amber-600 ';

  return (
    <NextLink className={'tracking-wide p-2 '+activeClass} href={href}>{children}</NextLink>
  )
}
