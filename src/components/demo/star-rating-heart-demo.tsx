"use client"

import * as React from 'react'
import { Heart } from 'lucide-react'
import { StarRating } from '@/components/ui-pro/star-rating'

export function StarRatingHeartDemo() {
   const [value, setValue] = React.useState<number>(3)
   return <StarRating value={value} setValue={setValue} icon={Heart} />
}
