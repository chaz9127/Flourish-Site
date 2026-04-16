import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function PixelCard({
    className,
    children,
    onClick,
}: {
    className?: string
    children: ReactNode
    onClick?: () => void
}) {
    return (
        <div
            onClick={onClick}
            className={cn('bg-[var(--green-highlight)] px-4 py-2', className)}
        >
            {children}
        </div>
    )
}
