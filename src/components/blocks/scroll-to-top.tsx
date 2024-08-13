'use client';

import { ChevronUp } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';


interface RollButtonProps {
  /**
   * Percentage of scroll position to display the roll button
   *
   * @defaultValue 0.1
   */
  percentage?: number;
}

/**
 * A button that scrolls to the top
 */
export function ScrollToTopButton({
  percentage = 0.1,
}: RollButtonProps): React.ReactElement {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
 

  useEffect(() => {
    const listener = (): void => {
      const element = document.scrollingElement;
      if (!element) return;

      const nearTop =
        element.scrollHeight === element.clientHeight ||
        element.scrollTop / (element.scrollHeight - element.clientHeight) <
          percentage;

      setShow(!nearTop);
    };

    listener();
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [percentage]);

  return (
    <button
      type="button"
      aria-label="Scroll to Top"
      className={cn(
        buttonVariants({
          className:
            'fixed bottom-[72px] [&_svg]:size-4 gap-1 right-20 translate-x-[-50%] z-10 shadow-md rounded-full transition-all md:bottom-12 lg:bottom-4',
        }),
        !show && 'pointer-events-none translate-y-20 opacity-0',
      )}
      onClick={useCallback(() => {
        document.scrollingElement?.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, [])}
    >
      <ChevronUp />
    </button>
  );
}
