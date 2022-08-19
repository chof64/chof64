import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <main className="subpixel-antialiased">
      <div className="sticky top-0 z-[100]">
        <Navigation />
      </div>
      {/* usable height after navigation bar is 91.45vh */}
      <div className="mt-2 flex flex-col items-center">
        <div className="w-[90vw] md:w-[80vw]">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
