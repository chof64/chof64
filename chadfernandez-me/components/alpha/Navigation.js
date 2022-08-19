import Link from "next/link";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navigation() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

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

  return (
    <Menu>
      {({ open }) => (
        <div>
          <div className="flex justify-center border-b border-slate-300 bg-white py-2">
            <div className="flex w-[90vw] items-center justify-between md:w-[80vw]">
              <div>
                <Link href="/">
                  <h1 className="cursor-pointer font-medium hover:text-blue-800">
                    Chad Fernandez
                  </h1>
                </Link>
              </div>
              <div>
                <nav>
                  <Menu.Button as="div" className="md:hidden">
                    {open ? (
                      <XIcon className="h-6 w-6" />
                    ) : (
                      <MenuIcon className="h-6 w-6" />
                    )}
                  </Menu.Button>
                  <div className="hidden items-center md:flex">
                    {navigation.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <a className="border-[0.5px] border-slate-300 bg-white px-4 py-1 text-sm first:rounded-l-lg first:border-r-0 last:rounded-r-lg last:border-l-0 hover:bg-blue-100 hover:text-blue-900">
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <Menu.Items
            as={"div"}
            className="absolute flex max-h-[60vh] w-full justify-center rounded-b-xl border-b-[0.5px] bg-gray-50 pb-1 shadow-sm focus:outline-0 md:hidden"
          >
            <div className="my-2 flex w-[90vw] flex-col gap-y-1">
              {navigation.map((item, index) => (
                <Menu.Item key={index}>
                  <MenuLink
                    className="rounded-md border border-zinc-400 bg-white py-3 pl-3 text-sm font-semibold shadow-sm"
                    href={item.href}
                  >
                    {item.name}
                  </MenuLink>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </div>
      )}
    </Menu>
  );
}

export default Navigation;
