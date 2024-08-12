import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

//======================================
export const Link_v1 = ({ children, ...rest }: LinkProps) => {
  return (
    <Link
      {...rest}
      className={cn(
        'hover:no-underline',
        '!no-underline',
        "relative ease-in  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-2",
        rest.className
      )}
    >
      {children}
    </Link>
  );
};