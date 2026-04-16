import GrassFooter from '@/components/GrassFooter'
import Button from '@/components/Button'
import Image from 'next/image'
import PixelCard from '@/components/PixelCard'
import BrowserFrame from '@/components/BrowserFrame'

export default function Home() {
    return (
        <main className="font-pixel">
            <div className="flex flex-col items-center gap-12 pb-52">
                <div className="flourish-title mt-10 flex items-end gap-4">
                    <h1 className="text-4xl text-[var(--green-primary)] text-shadow-[4px_4px_0_var(--green-highlight)] md:text-7xl">
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
                    <PixelCard className="w-full max-w-[400px] bg-transparent p-0 text-[var(--green-primary)]">
                        <BrowserFrame src="/steps/step-1.png" alt="Step 1" />
                        <div className="mt-2 border-2 border-[var(--green-primary)]">
                            <div className="bg-[var(--green-primary)] px-4 pt-3 pb-2 text-xs text-[var(--green-highlight)]">
                                Fill
                            </div>
                            <div className="bg-white px-4 py-1.5 text-sm">
                                Fill in the sites that keep you productive or
                                unproductive
                            </div>
                        </div>
                    </PixelCard>
                    <PixelCard className="w-full max-w-[400px] bg-transparent p-0 text-[var(--green-primary)]">
                        <BrowserFrame src="/steps/step-2.png" alt="Step 2" />
                        <div className="mt-2 border-2 border-[var(--green-primary)]">
                            <div className="bg-[var(--green-primary)] px-4 pt-3 pb-2 text-xs text-[var(--green-highlight)]">
                                Focus
                            </div>
                            <div className="bg-white px-4 py-1.5 text-sm">
                                Now just concentrate on your work and check your
                                progress
                            </div>
                        </div>
                    </PixelCard>
                    <PixelCard className="w-full max-w-[400px] bg-transparent p-0 text-[var(--green-primary)]">
                        <BrowserFrame src="/steps/step-3.png" alt="Step 3" />
                        <div className="mt-2 border-2 border-[var(--green-primary)]">
                            <div className="bg-[var(--green-primary)] px-4 pt-3 pb-2 text-xs text-[var(--green-highlight)]">
                                Grow
                            </div>
                            <div className="bg-white px-4 py-1.5 text-sm">
                                ... now both you and your forest can{' '}
                                <strong>flourish</strong> together
                            </div>
                        </div>
                    </PixelCard>
                </div>
                <Button
                    url={
                        'https://chromewebstore.google.com/detail/flourish/iccillecglphkmiabieinpcanicelidj'
                    }
                >
                    Download
                </Button>
            </div>
            <GrassFooter />
        </main>
    )
}
