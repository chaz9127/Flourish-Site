import GrassFooter from "@/components/GrassFooter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-pixelfy">
      <div className="flex flex-col gap-16 items-center">
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
        <button className="pixel-btn max-w-32">
          Download
        </button>
      </div>
      <GrassFooter />
    </main>
  );
}
