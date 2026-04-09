import Image from 'next/image'

export default function BrowserFrame({
    src,
    alt,
    url,
}: {
    src: string
    alt: string
    url?: string
}) {
    return (
        <div className="w-full overflow-hidden border-2 border-[#3a6b24] shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.2)]">
            {/* Title bar */}
            <div
                className="flex h-8 items-center gap-1.5 px-3"
                style={{ backgroundColor: '#2d5a1e' }}
            >
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            {/* Viewport */}
            <div className="relative h-[216px] w-full">
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
        </div>
    )
}
