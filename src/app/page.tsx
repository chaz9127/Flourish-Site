import GrassFooter from '@/components/GrassFooter'
import PixelCard from '@/components/PixelCard'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="font-pixelfy">
            <div className="flex flex-col items-center gap-12">
                <div className="flourish-title mt-10 flex items-end gap-4">
                    <h1 className="text-9xl leading-24 text-[#297C18]">
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
                <PixelCard className="cursor-pointer">Download</PixelCard>
                <div className="relative w-full max-w-[600px]">
                    <Image
                        src="/images/flourish_example.gif"
                        alt="Example of Flourish Video"
                        fill
                        className="relative"
                    />
                </div>
            </div>
            <GrassFooter />
        </main>
    )
}
