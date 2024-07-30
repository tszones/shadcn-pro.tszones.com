"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Plus
} from "lucide-react";
import * as React from "react";

import {
  cn
} from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({
  className, ...props 
}, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "my-4 rounded-lg border border-secondary bg-muted/50 px-4 dark:bg-card",
      className
    )}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({
  className, children, ...props 
}, ref) => (
  <div className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-4 py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-[135deg]",
        className
      )}
      {...props}
    >
      {children}
      <Plus className='size-4 shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </div>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({
  className, children, ...props 
}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div
      className={cn("pb-4 pt-0 text-[16px] text-muted-foreground", className)}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
};

