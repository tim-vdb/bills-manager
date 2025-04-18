'use client';

import Link from 'next/link'
import React from 'react'

export function Header() {

  return (
    <div className='flex justify-between items-center py-4 px-6 border-b-2 border-black print:hidden'>
      <Link href={"/"} className="flex items-center gap-2">
        {/* <ion-icon name="file-tray-full"></ion-icon> */}
        <p>Bills Manager</p>
      </Link>
      <div className='flex items-center gap-8'>
        <Link href="/login">
          <p>Login</p>
        </Link>
        <Link href="/register">
          <p>Sign up</p>
        </Link>
      </div>
    </div>
  )
}
