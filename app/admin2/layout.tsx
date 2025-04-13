import Header from '@/src/components/Header'
import React, { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren) {
  return (
    <div>
        <Header />
        {props.children}
    </div>
  )
}
