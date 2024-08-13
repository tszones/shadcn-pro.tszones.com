'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
   const { theme, setTheme } = useTheme()

   return (
      <Button
         variant="ghost"
         type="button"
         size="icon"
         className="px-2 rounded-full"
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
         <Sun className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
         <Moon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
   )
}
