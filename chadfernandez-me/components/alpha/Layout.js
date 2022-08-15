import Navigation from "./Navigation";

function Layout({ children }){
 return(
  <> 
    <main className="flex justify-center mx-4 my-2">
      <div className="w-[85vw] md:w-[75vw] lg:w-[65vw]">
        <div className='z-[100] sticky top-0'>
          <Navigation />
        </div>
        {children}
      </div>
    </main>
  </>
 ); 
};

export default Layout;