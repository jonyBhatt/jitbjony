"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Work",
      href: "/work",
    },
  ];
  return (
    <nav className="py-8 lg:py-12 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/** Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Jony<span className="text-purple">.</span>
          </h1>
        </Link>

        {/** Desktop Nav */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="">
                <span
                  className={`text-sm font-medium duration-500 transition-colors  hover:text-purple ${
                    href === pathname
                      ? "border-b-2 border-purple text-purple"
                      : ""
                  }  `}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
