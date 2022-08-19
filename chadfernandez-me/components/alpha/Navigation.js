import Link from 'next/link';
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navigation(){

  const navigation = [
    {"name": "Home", "href": "/"},
    {"name": "About", "href": "#"},
    {"name": "Contact", "href": "#"},
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

  return(
    <>
      <Menu>
        {({ open }) => (
          <div className={"mb-4"}>
            <div className={"flex justify-center py-2 border-b"}>
              <div className={"flex justify-between items-center w-[90vw] md:w-[80vw]"}>
                
                <div>
                  <Link href="/"><h1 className={"font-medium cursor-pointer"}>Chad Fernandez</h1></Link>
                </div>
                
                <div>
                  <nav>
                    <Menu.Button as={"div"} className={"md:hidden"}>
                      {open ? (
                        <XIcon className="w-6 h-6" />
                      ) : (
                        <MenuIcon className="w-6 h-6" />
                      )}
                    </Menu.Button>
                    <div className={"hidden md:flex items-center"}>
                      {navigation.map((item) =>(
                        <Link href={item.href}><a className={"text-sm hover:bg-blue-200 bg-white px-4 py-1 border-[0.5px] first:border-r-0 first:rounded-l-lg last:border-l-0 last:rounded-r-lg"}>{item.name}</a></Link>
                      ))}
                    </div>
                  </nav>
                </div>
                
              </div>
            </div>

            <Menu.Items as={"div"} className={"flex justify-center md:hidden absolute max-h-[60vh] w-full bg-slate-50 rounded-b-xl border-b-[0.5px] shadow-sm"}>
              <div className={"flex flex-col w-[90vw] my-2"}>
                {navigation.map((item) => (
                  <Menu.Item>
                    <MenuLink className={"bg-white shadow-sm py-3 pl-2 border rounded-xl my-0.5 text-sm font-semibold"} href={item.href}>{item.name}</MenuLink>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </div>
        )}
      </Menu>
    </>
  );
};

export default Navigation;