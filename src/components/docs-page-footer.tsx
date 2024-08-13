import { Button } from '@/components/ui/button';
import { githubUrl } from '@/config/site';

export const DocsPageFooter = ({page}: {page: any}) => {
    return (
        <div className="flex-col-start gap-2 dark:text-zinc-300">
          <Button variant={'link'} asChild className="pl-1">
            <span className="flex-row-start gap-2">
              <a
                href={`${githubUrl}/blob/main/content${page.url}.mdx`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:font-semibold"
              >
                Edit this page
              </a>
            </span>
          </Button>
          <Button asChild className="w-[88%]" variant="outline">
            <a
              href={githubUrl}
              data-umami-event="gh-star"
              target="_blank"
            >
              Star us
            </a>
          </Button>
        </div>
    )
}