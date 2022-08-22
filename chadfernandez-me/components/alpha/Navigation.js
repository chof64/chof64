import Link from "next/link";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import Image from "next/image";
import { Menu as MenuIcon, X as XIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon } from "lucide-react";

function Navigation() {
  const navigation = [
    { name: "Home", href: "/", external: false },
    { name: "About", href: "#", external: false },
    { name: "Contact", href: "#", external: false },
  ];

  const socials = [
    { name: "Github", href: "https://github.com/chof64", icon: "/icons/socials/github.svg", external: true },
    { name: "Polywork", href: "https://polywork.chadfernandez.me", icon: "/icons/socials/polywork.svg", external: true },
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
    <Menu as="div">
      {({ open }) => (
        <>
          <div className="z-10 flex items-center justify-center">
            <div className="flex items-center justify-between py-3 w-[90vw] md:w-[75vw] lg:w-[60vw]">
              <div className="">
                <Link href="/"><h1 className="text-lg font-semibold cursor-pointer text-neutral-600 lg:text-neutral-500 hover:text-neutral-800">Chad Fernandez</h1></Link>
              </div>
              <nav>
                <Menu.Button as="div" className="flex items-center justify-center p-1 rounded-md bg-gray-200/50 lg:hidden">
                  {open ? (
                    <XIcon className="w-6 h-6 stroke-[3] stroke-neutral-600 lg:stroke-neutral-500 hover:stroke-neutral-800" />
                  ) : (
                    <MenuIcon className="w-6 h-6 stroke-[3] stroke-neutral-600 lg:stroke-neutral-500 hover:stroke-neutral-800" />
                  )}
                </Menu.Button>
                <div className="items-center hidden gap-x-0.5 lg:flex">
                  {navigation.map((item) => (
                    <MenuLink className="px-4 py-2 font-medium rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-gray-200" key={item.name} href={item.href}>
                      {item.name}
                    </MenuLink>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <div className="z-30 absolute mt-4 flex justify-center w-full max-h-[60vh] lg:hidden">
            <Menu.Items as="div" className="focus:outline-none overflow-scroll flex flex-col w-[90vw] md:w-[75vw] bg-white px-4 gap-y-4 py-4 border shadow-xl shadow-gray-100 border-gray-300 rounded-lg">
              <div className="flex flex-col gap-y-0.5">
                <p className="text-xs font-medium text-neutral-300">Pages</p>
                {navigation.map((item, index) => (
                  <Menu.Item key={index}>
                    <MenuLink className="flex items-center px-4 py-3 font-medium bg-gray-100 rounded-md text-neutral-600 hover:text-neutral-800 hover:bg-gray-200" href={item.href} target={ item.external ? ("_blank") : ("_self") } rel={ item.external ? ("noreferrer") : null }>
                      <ArrowRightIcon className="w-4 h-4 mr-2 stroke-[3] stroke-neutral-500" />
                      {item.name}
                      {item.external ? (
                        <ExternalLinkIcon className="w-3 h-3 ml-1 stroke-neutral-400" />
                        ) : null
                      }
                    </MenuLink>
                  </Menu.Item>
                ))}
              </div>
              <div className="flex flex-col gap-y-0.5">
                <p className="text-xs font-medium text-neutral-300">Social Links</p>
                {socials.map((item, index) => (
                  <Menu.Item key={index}>
                    <MenuLink className="flex items-center px-4 py-3 font-medium bg-gray-100 rounded-md text-neutral-600 hover:text-neutral-800 hover:bg-gray-200" href="https://github.com/chof64" target={ item.external ? ("_blank") : ("_self") } rel={ item.external ? ("noreferrer") : null }>
                      <div className="relative w-4 h-4 mr-2">
                        <Image src={item.icon} layout="fill" />
                      </div>
                      {item.name}
                      {item.external ? (
                        <ExternalLinkIcon className="w-3 h-3 ml-1 stroke-neutral-400" />
                        ) : null
                      }
                    </MenuLink>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </div>
          {open ? (
            <div  className="fixed inset-0 z-20 w-full h-full bg-gray-100/25 backdrop-blur backdrop-opacity-50 lg:hidden"/>
          ):
            null
          }
        </>
      )}
    </Menu>
  );
}

export default Navigation;