import Head from "next/head";
import Link from "next/link";

import HeroUnderConstruction from "../components/hero-under-construction";
import NavPrimary from "../components/nav-primary";

function Index() {
  return (
    <>
      <Head>
        <title>Chad Fernandez, 🇵🇭, Student</title>
      </Head>

      <div className="h-[92vh]">
        <HeroUnderConstruction />
      </div>
      <div className="sticky top-0">
        <NavPrimary />
      </div>
      <div className="max-w-[50vw]">
        <div className="h-[200vh]" />
      </div>
    </>
  );
}

export default Index;
