import { Icon } from "@iconify/react";
import Title from "./Title";
import { useEffect, useRef, useState } from "react";


interface TitleType {
  name: string;
  imgUrl: string;
  genres: string[];
  maturityRating: string;
  [key: string]: any;
}

interface SideScrollProps {
  label: string;
  titles: TitleType[];
}

export default function SideScroll({ label, titles }: SideScrollProps) {
  const sideScrollRef = useRef<HTMLDivElement>(null);
  const [sideScrollWidth, setSideScrollWidth] = useState(0);

  useEffect(() => {
    if (sideScrollRef.current) {
      const sideScrollAttributes = sideScrollRef.current.getBoundingClientRect();
      setSideScrollWidth(sideScrollAttributes.width);
    }
    // console.log();
  }, []);

  const handleSideScroll = () => {
    if (sideScrollRef.current) {
      sideScrollRef.current.style.transform =
        "translateX(-" + sideScrollWidth + "px)";
      // console.log(sideScrollRef.current);
    }
  };

  return (
    <section className="my-5 w-full group/sidescroll">
      <h3 className="font-medium text-lg text-zinc-200 flex items-center mb-2">
        {label}
        <Icon
          icon="heroicons:chevron-right-20-solid"
          className="ml-2 text-red-500 invisible group-hover/sidescroll:visible"
        />
      </h3>
      {/* outline outline-1 outline-offset-1 outline-red-400 */}
      <div className="transition-all duration-150 relative">
        <div
          ref={sideScrollRef}
          className="flex items-start space-x-2 [&>*]:shrink-0"
        >
          {titles.map((title: TitleType, index: number) => (
            <Title key={index} title={title} />
          ))}
        </div>
        <button
          className="w-[calc(10%-1rem+1px)] sm:w-[calc(10%-1.5rem+1px)] min-[840px]:w-[calc(8%-2rem+1px)] lg:w-[calc(8%-2rem+1px)] xl:w-[calc(6.25%-2.5rem+1px)] h-full absolute right-0 top-0 bg-gradient-to-r from-zinc-900/40 to-zinc-900 z-30 rounded-l-md flex items-center justify-center"
          onClick={handleSideScroll}
        >
          <Icon icon="heroicons:chevron-right-20-solid" className="text-3xl" />
        </button>
      </div>
    </section>
  );
}