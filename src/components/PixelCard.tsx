import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function PixelCard({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
    return (
        <div className={cn('bg-[var(--green-highlight)] px-4 py-2', className)}>
            {children}
        </div>
    )
}
