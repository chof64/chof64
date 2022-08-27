import { classMerge } from '/src/utils/tailwind-utils';
import { forwardRef } from "react";
import { Menu } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Navigation() {

  
  const navigation = [
    { name: "Home", href: "/", pin: true },
    { name: "About", href: "/#about", pin: false },
    { name: "Contact", href: "/#contact", pin: true },
  ];
  
  
  const socials = [
    { name: "Github", href: "https://github.com/chof64", icon: "/icons/socials/github.svg", external: true },
    { name: "Polywork", href: "https://polywork.chadfernandez.me", icon: "/icons/socials/polywork.svg", external: true },
  ];

  // Check if isActive up to the query string
  const isActive = (href) => {
    const router = useRouter();
    return router.asPath === href;
  }

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
          <div className='flex justify-center bg-white select-none items-cetner'>
            <div className='flex items-center justify-between py-3 w-[90vw] md:w-[75vw] lg:w-[60vw]'>
              <Link href='/'><h1 className='font-semibold cursor-pointer md:text-lg text-neutral-700 md:text-neutral-500 hover:text-neutral-800'>Chad Fernandez</h1></Link>
              <nav className='flex items-center gap-x-0.5'>
                {/* Filter navigation, only list if pin is true and map it out */}
                {navigation.filter(item => item.pin).map(item => (
                  <MenuLink className={classMerge('hidden md:block font-mono text-sm font-bold px-4 py-1.5 hover:bg-gray-200 rounded-lg ', isActive(item.href) ? 'text-blue-500': 'text-neutral-700 md:text-neutral-500 hover:text-neutral-800' )} href={item.href} key={item.name}>
                    {item.name}
                  </MenuLink>
                ))}
                <Menu.Button as='div' className='cursor-pointer flex items-center justify-center p-1 bg-gray-200 rounded-lg md:p-1.5 md:bg-transparent md:hover:bg-gray-200'>
                  {open ? (
                    <XIcon className='w-5 h-5 stroke-[2.25] stroke-neutral-700'/>
                  ):(
                    <MenuIcon className='w-5 h-5 stroke-[2.25] stroke-neutral-700'/>
                  )}
                </Menu.Button>
              </nav>
            </div>
          </div>
          <div className={classMerge('select-none absolute',open ? 'w-full h-[92.405vh] bg-gray-100/10 backdrop-blur':null)}>
            <div className='absolute max-h-[60vh] flex justify-center w-full mt-10'>
              <Menu.Items as='div' className='overflow-auto focus:outline-none w-[90vw] md:w-[75vw] lg:w-[60vw] flex flex-col gap-y-2 p-4 bg-white shadow-md shadow-gray-200/50 border border-neutral-300 rounded-lg'>
                <div className='flex flex-col gap-y-0.5'>
                  <p className='font-mono text-xs text-neutral-400 md:text-xs'>Pages</p>
                  {navigation.map((item, index) => (
                    <Menu.Item key={index}>
                      <MenuLink className={classMerge('flex items-center px-4 py-3 text-sm font-medium md:text-base tracking-wide rounded-lg', isActive(item.href) ? 'text-blue-500 bg-blue-50 hover:bg-gray-200':'hover:bg-gray-200 bg-gray-50 text-neutral-700 md:text-neutral-500 hover:text-neutral-800')} href={item.href}>
                        <ArrowRightIcon className="w-4 h-4 mr-2 stroke-[3] stroke-neutral-500" />
                        {item.name}
                      </MenuLink>
                    </Menu.Item>
                  ))}
                </div>
                <div className='flex flex-col gap-y-0.5'>
                  <p className='font-mono text-xs text-neutral-400 md:text-xs'>Socials</p>
                  {socials.map((item, index) => (
                    <Menu.Item key={index}>
                      <MenuLink className='flex items-center px-4 py-3 text-sm font-medium tracking-wide rounded-lg md:text-base hover:bg-gray-200 bg-gray-50 text-neutral-700 md:text-neutral-500 hover:text-neutral-800' href={item.href} target='_blank' rel='noreferrer'>
                      <div className="relative w-4 h-4 mr-2">
                        <Image src={item.icon} layout="fill" />
                      </div>
                      {item.name}
                      <ExternalLinkIcon className="w-3 h-3 ml-1 stroke-sky-500" />
                      </MenuLink>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </div>
          </div>
        </>
      )}
    </Menu>
  );
}

export default Navigation;