import Image from "next/image";

function HeroUnderConstruction() {
  return (
    <>
      <div className="flex h-[95vh] flex-col items-center justify-center max-w-[100vw]">
        <div className="w-[75vw] rounded-3xl bg-[#FFFCFF] bg-opacity-50 px-6 py-8 font-medium text-[#50514F] shadow-2xl sm:w-[70vw] md:w-[60vw] lg:max-w-[40vw] xl:max-w-[35vw]">
          <div className="flex justify-center">
            <Image
              src={"/android-chrome-512x512.png"}
              width={70}
              height={70}
              alt={"chadfernandez.me icon"}
            />
          </div>
          <div className="flex justify-center mt-4">
            <p>
              Sorry,
              <br />
              <br />
              My website is not ready yet. I will update this page as new things
              are up and running.
              <br />
              <br />
              You can visit this website&apos;s repository at{" "}
              <a
                className="text-sky-700 hover:text-sky-500"
                href="https://github.com/chof64/chof64"
              >
                github.com/chof64/chof64
              </a>{" "}
              to keep track of my progress.
              <br />
              <br />
              All the best for now!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-50 h-screen w-screen animate-gradient-xy bg-gradient-to-r from-[#FB8D89] via-[#FEF085] to-[#A9DAC8] blur-xl" />
    </>
  );
}

export default HeroUnderConstruction;
