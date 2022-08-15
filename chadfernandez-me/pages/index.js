import LayoutGlobal from "../components/LayoutGlobal";
import Layout from "../components/alpha/Layout";
import Image from "next/image";
import Link from "next/link";

function Index(){
  return(
    <>
      <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between gap-y-8 lg:gap-0">
        <div className="rounded-full shadow-sm w-44 h-44 md:w-52 md:h-52">
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
        <div className="flex flex-col text-center md:max-w-md gap-y-2 md:text-left">
            <h1 className="text-2xl tracking-wide">👋Hi, I&apos;m <span className="text-colorAccentBlue">Chad Fernandez</span>.</h1>
            <p>
              I&apos;m an aspiring <b>Python</b> and <b>Web Developer</b>.
              I&apos;m from the Philippines and a <b>freshman</b> at the University of Antique, <b>studying </b> 
              Bachelor of Science in Computer Science.
            </p>
            {/* <div>
              <div><Link href="https://github.com/chof64"><a className="after:content-['_->']">GitHub</a></Link></div>
            </div> */}
        </div>
      </div>
    </>
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

export default Index 