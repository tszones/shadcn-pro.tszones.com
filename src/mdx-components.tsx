import type { MDXComponents } from 'mdx/types';
// Assume you're using Fumadocs UI
import defaultComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { MDXTable } from './components/ui-pro/mdx-table';
import { Callout } from 'fumadocs-ui/components/callout';
import { CodeBlockWrapper } from '@/components/code-block-wrapper';
import { Step, Steps } from 'fumadocs-ui/components/steps';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Tab,
    Tabs,
    MDXTable,
    Callout,
    CodeBlockWrapper,
    Step, 
    Steps,
    ul: (props) => <ul className="my-6 ml-6 list-disc" {...props} />,
    li: (props) => <li className="mt-2 list-disc [&_p]:inline" {...props} />,
  };
}