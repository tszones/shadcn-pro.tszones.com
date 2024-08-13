"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check
} from "lucide-react";
import { LoadingButton } from "@/components/ui-pro/loading-button";
import { LinkButton } from "@/components/ui-pro/link-button";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: [
      "1 team member",
      "1 GB storage",
      "Upto 2 pages",
      "Community support",
      "AI assistance",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 45,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get started",
    benefitList: [
      "4 team member",
      "8 GB storage",
      "Upto 6 pages",
      "Priority support",
      "AI assistance",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 120,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 team member",
      "20 GB storage",
      "Upto 10 pages",
      "Phone & email support",
      "AI assistance",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='mb-2 text-center text-lg tracking-wider text-primary'>
        Pricing
      </div>

      <div className='mb-4 text-center text-3xl font-bold md:text-4xl'>
        Get unlimitted access
      </div>

      <div className='mx-auto pb-14 text-center text-xl text-muted-foreground md:w-1/2'>
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </div>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
        {plans.map(({
          title, popular, price, description, buttonText, benefitList
        }) => (
          <Card
            key={title}
            className={
              popular === PopularPlan?.YES
                ? "border-[1.5px] border-primary shadow-black/10 drop-shadow-xl dark:shadow-white/10 lg:scale-110"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className='pb-2'>{title}</CardTitle>

              <CardDescription className='pb-4'>
                {description}
              </CardDescription>

              <div>
                <span className='text-3xl font-bold'>${price}</span>
                <span className='text-muted-foreground'> /month</span>
              </div>
            </CardHeader>

            <CardContent className='flex'>
              <div className='space-y-4'>
                {benefitList.map((benefit) => (
                  <span key={benefit} className='flex'>
                    <Check className='mr-2 text-primary' />
                    <div>{benefit}</div>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              {title === 'Premium' ? <LoadingButton
                variant={
                  popular === PopularPlan?.YES ? "default" : "secondary"
                }
                className='w-full'
              >
                {buttonText}
              </LoadingButton> :
                <LinkButton
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className='w-full'
                  href="/dashboard"
                >
                  {buttonText}
                </LinkButton>
              }
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
