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
        <div className={"mb-4"}>
          <div className={"flex justify-center border-b py-2"}>
            <div
              className={
                "flex w-[90vw] items-center justify-between md:w-[80vw]"
              }
            >
              <div>
                <Link href="/">
                  <h1 className={"cursor-pointer font-medium"}>
                    Chad Fernandez
                  </h1>
                </Link>
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
                  <div className={"hidden items-center md:flex"}>
                    {navigation.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <a
                          className={
                            "border-[0.5px] bg-white px-4 py-1 text-sm first:rounded-l-lg first:border-r-0 last:rounded-r-lg last:border-l-0 hover:bg-blue-200"
                          }
                        >
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
            className={
              "absolute flex max-h-[60vh] w-full justify-center rounded-b-xl border-b-[0.5px] bg-slate-50 shadow-sm md:hidden"
            }
          >
            <div className={"my-2 flex w-[90vw] flex-col"}>
              {navigation.map((item, index) => (
                <Menu.Item key={index}>
                  <MenuLink
                    className={
                      "my-0.5 rounded-xl border bg-white py-3 pl-2 text-sm font-semibold shadow-sm"
                    }
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
