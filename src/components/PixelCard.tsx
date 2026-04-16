import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export default function PixelCard({
    className,
    children,
    url,
}: {
    className?: string
    children: ReactNode
    url?: string
}) {
    return (
        <div
            onClick={() => (url ? (window.location.href = url) : '')}
            className={cn('bg-[var(--green-highlight)] px-4 py-2', className)}
        >
            {children}
        </div>
    )
}
