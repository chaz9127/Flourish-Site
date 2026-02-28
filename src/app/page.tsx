import GrassFooter from "@/components/GrassFooter";
import PixelCard from "@/components/PixelCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-pixelfy">
      <div className="flex flex-col gap-12 items-center">
        <div className="flourish-title flex mt-10 items-end gap-4">
          <h1 className="text-9xl text-[#297C18] leading-24">Flourish</h1>
          <Image
            src={'/icons/plants/apple_tree_5.png'}
            alt={'Apple Tree'}
            width={52}
            height={66}
            className="h-[66px]"
          />
        </div>
        <PixelCard />
        <button className="pixel-btn max-w-32">
          Download
        </button>
        <div className="relative w-full max-w-[600px]">
          <Image
            src='/images/flourish_example.gif'
            alt='Example of Flourish Video'
            fill  
            className="relative"
          />
        </div>
      </div>
      <GrassFooter />
    </main>
  );
}
