import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/magic-button";

export const Hero = () => {
  return (
    <div className="">
      <div>
        <div className="absolute top-0 right-0 bg-pink-600   blur-[150px] w-56  -z-10  h-32 rounded-full"></div>
        <div className="absolute bottom-0 left-0 bg-blue-600 blur-[120px] w-56  animate-pulse z-20  h-32 rounded-full"></div>
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100   dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center -z-10">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="flex justify-center relative my-56 md:my-40 z-10">
          <div className="max-w-[89vw] md:maz-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic web magic with Nextjs
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl text-white-100"
              words="Transforming Concepts into Seamless Experience "
            />

            <p className="text-center md:tracking-wider  text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Jony, a Nextjs Developer based on Bangladesh
            </p>

            <Link href="#about">
              <MagicButton text="Show My Work" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
