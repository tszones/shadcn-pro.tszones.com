import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui-pro/credenza"


export function CredenzaDemo() {
  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button>Open modal</Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Credenza</CredenzaTitle>
          <CredenzaDescription>
            A responsive modal component for shadcn/ui.
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody className="space-y-4 pb-4 text-center text-sm sm:pb-0 sm:text-left">
          <p>
            This component is built using shadcn/ui&apos;s dialog and drawer
            component, which is built on top of Vaul.
          </p>
          <p>
            It shows a{" "}
            <Link
              href="https://ui.shadcn.com/docs/components/dialog"
              target="_blank"
              className="underline"
            >
              dialog modal
            </Link>{" "}
            for desktop view and a{" "}
            <Link
              href="https://vaul.emilkowal.ski/"
              target="_blank"
              className="underline"
            >
              bottom drawer
            </Link>{" "}
            for mobile view.
          </p>
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button variant="outline">Close</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}