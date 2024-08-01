"use client"

import * as React from 'react'
import { StarRating } from '@/components/ui-pro/star-rating'

export function StarRatingDemo() {
   const [value, setValue] = React.useState<number>(3)
   return <StarRating value={value} setValue={setValue} />
}
