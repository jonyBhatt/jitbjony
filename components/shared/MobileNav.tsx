"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLinks {
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const MobileNav = ({ navLinks }: NavLinks) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="z-50">
        <Menu size={25} className="text-purple" />
      </SheetTrigger>
      <SheetContent className="flex flex-col border-0">
        <Link href={"/"} className="mt-24 mb-10 text-2xl">
          <h1 className="text-4xl font-semibold">
            Jony<span className="text-purple">.</span>
          </h1>
        </Link>
        <div className="flex flex-col items-start  gap-8">
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
      </SheetContent>
    </Sheet>
  );
};
