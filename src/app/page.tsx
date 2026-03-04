import GrassFooter from '@/components/GrassFooter'
import Button from '@/components/Button'
import Image from 'next/image'
import PixelCard from '@/components/PixelCard'

export default function Home() {
    return (
        <main className="font-pixel">
            <div className="flex flex-col items-center gap-12">
                <div className="flourish-title mt-10 flex items-end gap-4">
                    <h1 className="text-7xl text-[var(--green-primary)] text-shadow-[4px_4px_0_var(--green-highlight)]">
                        Flourish
                    </h1>
                    <Image
                        src={'/icons/plants/apple_tree_5.png'}
                        alt={'Apple Tree'}
                        width={52}
                        height={66}
                        className="h-[66px]"
                    />
                </div>
                <div className="grid w-full grid-cols-1 justify-items-center gap-8 px-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* TODO: Make into own cards */}
                    <PixelCard className="w-full max-w-[350px] cursor-pointer overflow-hidden bg-[rgba(255,255,255,.5)] p-0 text-[var(--green-primary)]">
                        <div className="image-container-bg h-60 w-full"></div>
                        <div className="bg-[var(--green-primary)] px-4 pt-3 pb-2 text-xs text-[var(--green-highlight)]">
                            Add Your Sites
                        </div>
                        <div className="h-full bg-white px-4 py-1.5 text-sm">
                            Add your productive and unproductive websites to
                            keep yourself accountable
                        </div>
                    </PixelCard>
                    <PixelCard className="w-full max-w-[350px] cursor-pointer overflow-hidden bg-[rgba(255,255,255,.5)] p-0 text-[var(--green-primary)]">
                        <div className="image-container-bg h-60 w-full"></div>
                        <div className="bg-[var(--green-primary)] px-4 pt-3 pb-2 text-xs text-[var(--green-highlight)]">
                            Focus
                        </div>
                        <div className="h-full bg-white px-4 py-1.5 text-sm">
                            Now just concentrate on your work with minimal
                            distractions...
                        </div>
                    </PixelCard>
                    <PixelCard className="w-full max-w-[350px] cursor-pointer overflow-hidden bg-[rgba(255,255,255,.5)] p-0 text-[var(--green-primary)]">
                        <div className="image-container-bg h-60 w-full"></div>
                        <div className="bg-[var(--green-primary)] px-4 pt-3 pb-2 text-xs text-[var(--green-highlight)]">
                            Grow
                        </div>
                        <div className="h-full bg-white px-4 py-1.5 text-sm">
                            ... and then watch your forest start to{' '}
                            <span className="underline">flourish</span> just
                            like you!
                        </div>
                    </PixelCard>
                </div>
                <Button>Download</Button>
            </div>
            <GrassFooter />
        </main>
    )
}
