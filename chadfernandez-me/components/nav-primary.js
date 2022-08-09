import Link from "next/link";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const MenuLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

MenuLink.displayName = "MenuLink";

function NavPrimary() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <div className="flex flex-col text-colorCharcoal shadow-md">
            <div className="flex items-center justify-between bg-colorCultured bg-opacity-90 px-6 py-3 backdrop-blur-lg">
              <div>
                <Link href="/">
                  <h1 className="cursor-pointer font-semibold hover:text-colorVerdigris">
                    Chad Fernandez
                  </h1>
                </Link>
              </div>

              <div>
                <nav>
                  <div className="flex md:hidden">
                    <Menu.Button>
                      {open ? (
                        <XIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )}
                    </Menu.Button>
                  </div>

                  <div className="hidden divide-x text-sm font-medium md:flex">
                    <Link href="/">
                      <a className="px-4 hover:text-colorVerdigris">Home</a>
                    </Link>
                    <Link href="#">
                      <a className="px-4 hover:text-colorVerdigris">About</a>
                    </Link>
                    <Link href="#">
                      <a className="px-4 hover:text-colorVerdigris">Contact</a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            <Menu.Items className="md:hidden">
              <div className="border-t-[1px] border-colorVerdigris bg-colorCultured bg-opacity-80 px-6 py-2 shadow backdrop-blur-lg">
                <div className="flex flex-col text-right text-lg font-semibold">
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

          <div>{console.log("Open is", open)}</div>
        </>
      )}
    </Menu>
  );
}

export default NavPrimary;
