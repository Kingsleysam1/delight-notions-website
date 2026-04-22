"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import { PORTFOLIO_OWNER_FIRSTNAME } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
];

function NavBar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-[9999] ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-background p-4 pt-0 pb-0 border-b border-b-superGray">
        <div className="flex justify-between mx-[41px] gap-8 items-center ">
          <div className="flex gap-[2.5rem] items-center">
            <div className="flex border-r border-r-superGray self-stretch h-[7.15rem]"></div>
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
              <Image 
                src="/images/logo-v2.png" 
                alt={`${PORTFOLIO_OWNER_FIRSTNAME} Logo`} 
                width={400} 
                height={83} 
                className="h-7 md:h-11 w-auto object-contain" 
                priority
              />
            </Link>
          </div>
          <div className="flex text-[16px] items-center select-none border border-superGray h-[5.34rem] rounded-t-[0.75rem] mt-[1.88rem]">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              const isFirst = index === 0;
              const isLast = index === navLinks.length - 1;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[3.12rem] gap-2 self-stretch font-[500] transition-colors
                    ${isActive ? "text-white bg-superGray" : "text-customGrayAlt2"}
                    ${isFirst ? "hover:rounded-tl-[0.75rem]" : ""}
                    ${isLast ? "hover:rounded-tr-[0.75rem]" : "border-r border-r-superGray"}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex gap-[2.5rem] items-center">
              <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
                <Link href="/contact">
                  <MainButton text="Contact Me" />
                </Link>
              </div>
              <div className="flex border-r border-r-superGray self-stretch h-[7.15rem]"></div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-background animate-in fade-in zoom-in border-b border-b-superGray  ${menu ? " bg-primary py-2" : ""
          } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div
            className={`flex gap-[50px] text-[16px] items-center select-none ${!menu ? "ml-[1rem]" : ""
              }`}
          >
            <div className="flex gap-4 items-center">
              {!menu && (
                <div className="flex border-r border-r-superGray self-stretch h-[6.4rem]"></div>
              )}
              <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                <Image 
                  src="/images/logo-v2.png" 
                  alt={`${PORTFOLIO_OWNER_FIRSTNAME} Logo`} 
                  width={400} 
                  height={83} 
                  className="h-7 md:h-8 w-auto object-contain" 
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
              />
            ) : (
              <div className="flex items-center gap-[40px] select-none">
                <div className="flex items-center">
                  <div className="text-2xl md:text-4xl font-extrabold uppercase mt-8  text-white outline outline-[1px] outline-superGray rounded-tl-[1.25rem] ">
                    <img
                      src="/images/hamburger.png"
                      alt="logo"
                      className="cursor-pointer animate-in fade-in zoom-in"
                      onClick={toggleMenu}
                    />
                  </div>
                  {!menu && (
                    <div className="flex border-r border-r-superGray self-stretch h-[4.15rem] mr-3"></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`cursor-pointer font-[500] text-[1.1rem] ${isActive ? "text-white underline" : "text-customGrayAlt2"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-[40px] select-none">
                <Link href="/contact" onClick={toggleMenu}>
                  <MainButton text="Contact Me" classes="hover:bg-background w-full" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
