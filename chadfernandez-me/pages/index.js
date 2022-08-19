import LayoutGlobal from "../components/LayoutGlobal";
import Layout from "../components/alpha/Layout";
import Image from "next/image";

function Index(){
  const socialLinks = [
    {name: "GitHub", href: "https://github.com/chof64"},
    {name: "Polywork", href: "https://polywork.chadfernandez.me"},
  ]

  return(
    <div>
      <div className="px-4 py-2 text-sm font-medium text-center border border-orange-500 shadow rounded-xl">
        <p>Hello, my website is still under development. New changes are uploaded every week. Visit the <a className="text-blue-800 underline text-medium" href="https://github.com/chof64/chof64/tree/main/chadfernandez-me" target="_blank"><b>GitHub repository</b></a> to learn more.</p>
      </div>
      <div className="flex flex-col items-center py-2 gap-y-4 lg:flex-row-reverse md:justify-between">
        <div className="flex items-center justify-center">
          <div className="p-1 rounded-full bg-gradient-to-tl from-teal-300 to-green-300 animate-gradient-xy">
            <div className="p-0.5 bg-white rounded-full w-44 h-44 md:w-56 md:h-56">
              <Image
                priority
                className="border rounded-full"
                src='/portrait-800x800.png' 
                alt='Personal portrait'
                width={600}
                height={600}
                layout='responsive'
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:max-w-md">
          <div className="flex flex-col px-4 py-6 text-center border border-b-[0.5px] border-green-600 shadow-md bg-gradient-to-br from-cyan-100 to-green-200 animate-gradient-x md:text-start rounded-t-xl gap-y-3 shadow-zinc-200">
            <h1 className="text-2xl font-semibold md:text-3xl">👋Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600 animate-gradient-x">Chad Fernandez.</span></h1>
            <p>
              I&apos;m an aspiring <b>Python</b> and <b>Web Developer</b>.
              I&apos;m from the Philippines and a <b>freshman</b> at the
              University of Antique, <b>studying</b> Bachelor of Science
              in Computer Science.
            </p>
          </div>
          <div className="flex flex-col w-full md:flex-row">
            {socialLinks.map((social, index) => (
              <a className="px-2 py-2 font-medium bg-white border border-t-0 border-green-600 shadow-md hover:bg-sky-100 hover:text-sky-900 md:border-0 md:border-r first:md:border-l md:first:rounded-bl-xl md:last:rounded-br-xl md:border-b last:rounded-b-xl md:last:rounded-none shadow-zinc-200 md:w-full" key={index} href={social.href} target="_blank">{social.name}</a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

Index.getLayout = function getLayout(page){
  return(
    <LayoutGlobal>
      <Layout>
        {page}
      </Layout>
    </LayoutGlobal>
  )
}

export default Index;