import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <main className="subpixel-antialiased bg-gray-50">
      <div className="sticky top-0 z-[100]">
        <Navigation />
      </div>
      {/* usable height after navigation bar is 91.45vh */}
      <div className="flex flex-col items-center min-h-screen mt-2">
        <div className="w-[90vw] md:w-[80vw] lg:w-[70vw]">{children}</div>
      </div>
    </main>
  );
}

export default Layout;
