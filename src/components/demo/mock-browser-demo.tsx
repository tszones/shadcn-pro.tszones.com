"use client"

import { BrowserComponent } from '@/components/ui-pro/mock-browser'

export const BrowserComponentDemo = () => (
  <BrowserComponent className={'w-full max-w-[600px] h-[300px]'}>
    <section className={'w-full h-full flex items-center justify-center'}>
      <h1 className={'md:text-xl text-base'}>Hi!</h1>
    </section>
  </BrowserComponent>
)
