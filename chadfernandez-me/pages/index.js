import LayoutGlobal from "../components/LayoutGlobal";
import Layout from "../components/alpha/Layout";
import Image from "next/image";

function Index() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/chof64" },
    { name: "Polywork", href: "https://polywork.chadfernandez.me" },
  ];

  return (
    <div>
      <div className="relative px-4 py-2 text-sm font-medium text-center border border-red-300 shadow bg-red-50 rounded-xl">
        <p>
          Hello, my website is still under development. New changes are uploaded
          every week. Visit the{" "}
          <a
            className="text-blue-800 underline text-medium"
            href="https://github.com/chof64/chof64/tree/main/chadfernandez-me"
            target="_blank"
            rel="noreferrer"
          >
            <b>GitHub repository</b>
          </a>{" "}
          to learn more.
        </p>
        <div className="absolute flex -top-0.5 -right-0.5">
          <span className="absolute w-3 h-3 bg-red-600 border-0 rounded-full shadow-sm animate-ping" />
          <span className="relative w-3 h-3 bg-red-600 border-0 rounded-full shadow-sm" />
        </div>
      </div>
      <div className="flex flex-col items-center py-2 gap-y-4 md:justify-between lg:flex-row-reverse">
        <div className="flex items-center justify-center">
          <div className="p-1 rounded-full animate-gradient-xy bg-gradient-to-tl from-teal-300 to-green-300">
            <div className="h-44 w-44 rounded-full bg-white p-0.5 md:h-56 md:w-56">
              <Image
                priority
                className="border rounded-full"
                src="/portrait-800x800.png"
                alt="Personal portrait"
                width={600}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:max-w-md">
          <div className="rounded-t-xl border border-b-[0.5px] border-green-600 bg-gradient-to-br shadow-md shadow-zinc-200 from-cyan-100 to-green-200 ">
            <div className="flex flex-col px-4 py-6 text-center border-0 rounded-t-xl animate-gradient-x gap-y-3 md:text-start backdrop-blur-3xl bg-white/0">
              <h1 className="text-2xl font-semibold md:text-3xl">
                👋Hi, I&apos;m{" "}
                <span className="text-transparent animate-gradient-x bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text">
                  Chad Fernandez.
                </span>
              </h1>
              <p>
                I&apos;m an aspiring <b>Python</b> and <b>Web Developer</b>.
                I&apos;m from the Philippines and a <b>freshman</b> at the
                University of Antique, <b>studying</b> Bachelor of Science in
                Computer Science.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row">
            {socialLinks.map((social, index) => (
              <a
                className="px-6 py-2 font-medium border border-t-0 border-green-600 shadow-md bg-white/20 backdrop-blur-xl shadow-zinc-200 last:rounded-b-xl hover:bg-sky-100/50 hover:text-blue-600 md:w-full md:border-0 md:border-r md:border-b md:first:rounded-bl-xl first:md:border-l md:last:rounded-none md:last:rounded-br-xl"
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};

export default Index;
