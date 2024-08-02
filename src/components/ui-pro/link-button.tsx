import Link from 'next/link';
import { Button, ButtonProps } from '@/components/ui/button';
import { ReactNode } from 'react';

interface LinkButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export const LinkButton = ({ href, target='_self', children, ...props }: LinkButtonProps) => {
  return (
    <Button asChild {...props}>
      <Link 
        href={href}
        target={target}
      >{children}</Link>
    </Button>
  );
};

