import Link from 'next/link';
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";





function Navigation(){

  const MenuLink = forwardRef((props, ref) => {
    MenuLink.displayName = "MenuLink";
    let { href, children, ...rest } = props;
    
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  });

  return(
    <>
      <Menu>
        {({ open }) => (
          <>
            <div className='mb-10'>
              <div className='flex items-center justify-between pt-2 pb-2 bg-white border-b-2 border-opacity-10 border-colorDark'>
                <div>
                  <Link href="/"><h1 className='font-semibold tracking-wider cursor-pointer text-colorAccentBlue hover:text-colorAccentDarkBlue'>Chad Fernandez</h1></Link>
                </div>

                <div>
                  <nav>
                    <div className='flex lg:hidden'>
                      <Menu.Button>
                        {open ? (
                          <XIcon className="w-6 h-6" />
                        ) : (
                          <MenuIcon className="w-6 h-6" />
                        )}
                      </Menu.Button>
                    </div>

                    <div className='items-center hidden align-middle lg:flex'>
                      <Link href="/"><a className='px-4 py-[0.05rem] border-0 rounded-md hover:bg-colorAccentBlue hover:bg-opacity-10 hover:text-colorAccentDarkBlue'>Home</a></Link>
                      <Link href="#"><a className='px-4 py-[0.05rem] border-0 rounded-md hover:bg-colorAccentBlue hover:bg-opacity-10 hover:text-colorAccentDarkBlue'>About</a></Link>
                      <Link href="#"><a className='px-4 py-[0.05rem] border-0 rounded-md hover:bg-colorAccentBlue hover:bg-opacity-10 hover:text-colorAccentDarkBlue'>Contact</a></Link>
                    </div>
                  </nav>
                </div>
              </div>

              <Menu.Items as='div' className='absolute lg:hidden z-[100] bg-white w-full max-h-[40vh] shadow-2xl rounded-lg border-[1px] border-colorAccentDarkBlue'>
                <div className='flex flex-col mx-4 my-4 font-semibold gap-y-2'>
                  <Menu.Item>
                    <MenuLink className='px-4 py-3 border-[0.5px] rounded-lg border-colorAccentBlue' href="/">Home</MenuLink>
                  </Menu.Item>
                  <Menu.Item>
                    <MenuLink className='px-4 py-3 border-[0.5px] rounded-lg border-colorAccentBlue' href="#">About</MenuLink>
                  </Menu.Item>
                  <Menu.Item>
                    <MenuLink className='px-4 py-3 border-[0.5px] rounded-lg border-colorAccentBlue' href="#">Contact</MenuLink>
                  </Menu.Item>
                </div>
              </Menu.Items>

              {open ? 
                <div className='fixed inset-0 backdrop-blur-[2px] lg:hidden bg-slate-100 bg-opacity-50' />
                  : 
                ''
              }
            </div>
          </>
        )}
      </Menu>
    </>
  );
};

export default Navigation;