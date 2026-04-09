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
                'cursor-pointer border-3 border-[var(--green-primary)] text-[var(--green-primary)] shadow-[4px_4px_0px_var(--green-primary)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--green-primary)]',
                className
            )}
        >
            {children}
        </PixelCard>
    )
}
