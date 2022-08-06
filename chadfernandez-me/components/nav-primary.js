import Link from "next/link";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const MenuLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
  return(
      <Link href={href}>
        <a ref={ref} {...rest}>{children}
        </a>
      </Link>
  )
})

function NavPrimary(){
  return(
    <Menu>
      {({ open }) => (
        <>
          <div className="flex flex-col shadow-md text-[#312F2F]">
            <div className="flex items-center justify-between px-6 py-3 bg-[#F9FBF2] bg-opacity-90 backdrop-blur-lg">

              <div>
                <Link href='/'><h1 className="font-semibold">Chad Fernandez</h1></Link>
              </div>
              
              <div>
                <nav>

                  <div className="flex md:hidden">
                    <Menu.Button>
                      {open ? (
                        <XIcon className="w-6 h-6" />
                      ):(
                        <MenuIcon className="w-6 h-6" />
                      )}
                    </Menu.Button>
                  </div>
                  
                  <div className="hidden text-sm divide-x md:flex">
                    <Link href='/'><a className="px-4">Home</a></Link>
                    <Link href='#'><a className="px-4">About</a></Link>
                    <Link href='#'><a className="px-4">Contact</a></Link>
                  </div>
                  
                </nav>
              </div>
              
            </div>

            <Menu.Items className="md:hidden">
              <div className="border-t-[0.5px] border-[#EBEAEA] px-6 py-2 bg-[#F9FBF2] shadow bg-opacity-90 backdrop-blur-lg">
                <div className="flex flex-col text-lg text-right">
                  <Menu.Item>
                    <MenuLink className="py-3" href="/">Home</MenuLink>
                  </Menu.Item>
                  <Menu.Item>
                    <MenuLink className="py-3" href="#">About</MenuLink>
                  </Menu.Item>
                  <Menu.Item>
                    <MenuLink className="py-3" href="#">Contact</MenuLink>
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>

          </div>
          
          <div>{console.log('Open is',open)}</div>


          
        </>  
      )}
    </Menu>
  )
}

export default NavPrimary