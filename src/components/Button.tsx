import { type ReactNode } from 'react'
import PixelCard from './PixelCard'

import { cn } from '@/lib/utils'

export default function Button({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <PixelCard
            className={cn(
                'cursor-pointer text-[var(--green-primary)]',
                className
            )}
        >
            {children}
        </PixelCard>
    )
}
