import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link> & {
  children: React.ReactNode;
};

//======================================
export const Link_v2 = ({ children, ...rest }: LinkProps) => {
  return (
    <Link
      {...rest}
      className={cn(
        'hover:no-underline',
        '!no-underline',
        "relative ease-in  after:content-[''] after:absolute after:left-1/2 after:right-1/2 after:bottom-0    after:h-[2px] after:bg-foreground after:transition-all hover:after:left-0 hover:after:right-0 pb-2",
        rest.className
      )}
    >
      {children}
    </Link>
  );
};