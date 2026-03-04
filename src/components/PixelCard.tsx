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
        <div
            className={cn(
                'border-3 border-[var(--green-primary)] bg-[var(--green-highlight)] px-4 py-2 shadow-[4px_4px_0px_var(--green-primary)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--green-primary)]',
                className
            )}
        >
            {children}
        </div>
    )
}
