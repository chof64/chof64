import NavPrimary from "../components/nav-primary";
import HeroUnderConstruction from "../components/hero-under-construction";

function Index(){
  return(
    <>
    <div className="fixed top-0 z-50 w-screen">
      <NavPrimary className='' />
    </div>
    <HeroUnderConstruction className='z-0' />
    <div className="h-[200vw]" />
    </>
  )
}

export default Index