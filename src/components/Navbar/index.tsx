"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

import { gsap } from "gsap";
import { FaChevronDown } from "react-icons/fa";

import Drawer from "../ui/Drawer";
import Text from "../ui/Text";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <>
      <nav className="relative w-full px-5  bg-[#14205A]">
        <div className="relative max-w-[1242px] rounded-[24px] bg-transparent w-full flex flex-wrap items-center justify-between mx-auto">
          <div className="flex w-full justify-between md:gap-[35px] items-center">
            <Link
              href="/"
              className="flex justify-start space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/Logo.svg"
                alt="Flowbite Logo"
                width={103}
                height={103}
              />
            </Link>

            {/* Desktop nav (md and up) */}
            <div className="hidden md:flex gap-[70px]">
              <ul className="font-medium flex items-center gap-[30px]">
                <li>
                  <Link
                    href="/"
                    className="block text-[16px] font-normal leading-[25px] text-[#FAF9F6]"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-me"
                    className="block text-[16px] font-normal leading-[25px] text-[#FAF9F6]"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recipes"
                    className="block text-[16px] font-normal leading-[25px] text-[#FAF9F6]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <Button className="p-[10px] w-[156px] h-10">
                Partner with Us
              </Button>
            </div>

            {/* Mobile hamburger + drawer (mobile only) */}
            <div className="md:hidden block">
              <div
                className="relative cursor-pointer flex pr-4"
                onClick={onOpen}
              >
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#00297A] rounded-lg  "
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative z-40">
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <div className="flex items-center h-[70vh] md:h-full w-full justify-center">
                    <ul className="font-medium w-full left-0 z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]">
                      <a
                        href="/"
                        className="block text-[16px] font-medium leading-7 text-[#FFFFFF] uppercase"
                      >
                        <li className="flex justify-center py-[15px] list-items font-dmSans">
                          Our Story
                        </li>
                      </a>
                      <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                      <a
                        href="/about-me"
                        className="block  text-[16px] font-medium leading-7 text-[#FFFFFF] uppercase"
                      >
                        <li className="flex justify-center py-[15px] list-items">
                          Our Team
                        </li>
                      </a>
                      <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                      <a
                        href="/shop"
                        className="block text-[16px] font-medium leading-7 text-[#FFFFFF]"
                      >
                        <li className="flex justify-center py-[15px] list-items">
                          Contact
                        </li>
                      </a>
                      <hr className="h-px my- bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                      <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                    </ul>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
