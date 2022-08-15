import Link from "next/link";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

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


function NavPrimary() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <div className="flex flex-col shadow-md text-colorDarkSlateGray">
            <div className="flex items-center justify-between px-6 py-3 bg-colorWhite bg-opacity-90 backdrop-blur-lg">
              <div>
                <Link href="/">
                  <h1 className="font-semibold cursor-pointer hover:text-colorPersianGreen">
                    Chad Fernandez
                  </h1>
                </Link>
              </div>

              <div>
                <nav>
                  <div className="flex md:hidden">
                    <Menu.Button>
                      {open ? (
                        <XIcon className="w-6 h-6" />
                      ) : (
                        <MenuIcon className="w-6 h-6" />
                      )}
                    </Menu.Button>
                  </div>

                  <div className="hidden text-sm font-medium divide-x md:flex">
                    <Link href="/">
                      <a className="px-4 hover:text-colorPersianGreen">Home</a>
                    </Link>
                    <Link href="#">
                      <a className="px-4 hover:text-colorPersianGreen">About</a>
                    </Link>
                    <Link href="#">
                      <a className="px-4 hover:text-colorPersianGreen">Contact</a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            <Menu.Items className="md:hidden">
              <div className="border-t-[1px] border-colorPersianGreen bg-colorWhite bg-opacity-80 px-6 py-2 shadow backdrop-blur-lg">
                <div className="flex flex-col text-lg font-semibold text-right">
                  <Menu.Item>
                    <MenuLink className="py-3" href="/">
                      Home
                    </MenuLink>
                  </Menu.Item>
                  <Menu.Item>
                    <MenuLink className="py-3" href="#">
                      About
                    </MenuLink>
                  </Menu.Item>
                  <Menu.Item>
                    <MenuLink className="py-3" href="#">
                      Contact
                    </MenuLink>
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </div>

        </>
      )}
    </Menu>
  );
}

export default NavPrimary;