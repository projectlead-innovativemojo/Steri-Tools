"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

import { gsap } from "gsap";

import Drawer from "../ui/Drawer";
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
      <nav className="relative w-full px-5 py-[16px] bg-[#14205A]">
        <div className="relative max-w-[1242px] rounded-[24px] bg-transparent w-full flex flex-wrap items-center justify-between mx-auto">
          <div className="flex w-full justify-between md:gap-[35px] items-center">
            <Link
              href="/"
              className="flex justify-start space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/Logo.svg"
                alt="Flowbite Logo"
                width={132}
                height={132}
              />
            </Link>

            {/* Desktop nav (md and up) */}
            <div className="hidden md:flex gap-[70px]">
              <ul className="font-medium flex items-center gap-[40px]">
                <li>
                  <Link
                    href="/our-story"
                    className="block text-[18px] font-normal leading-[26px] text-[#FAF9F6]"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="block text-[18px] font-normal leading-[26px] text-[#FAF9F6]"
                  >
                    Our Team & Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="block text-[18px] font-normal leading-[26px] text-[#FAF9F6]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <a href="/our-partners">
                <Button className="p-[10px] w-[156px] h-10">
                  Partner with Us
                </Button>
              </a>
            </div>

            {/* Mobile hamburger + drawer (mobile only) */}
            <div className="md:hidden block">
              <div
                className="relative cursor-pointer flex pr-[31px]"
                onClick={onOpen}
              >
                <button
                  // onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center text-sm text-[#00297A] rounded-lg  "
                  aria-controls="navbar-default"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
                      fill="#EDD98A"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative z-40">
                <Drawer isOpen={isOpen} onClose={onClose}>
                  <div className="flex items-center h-[70vh] md:h-full w-full justify-center">
                    <ul className="font-medium w-full left-0 z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]">
                      <a
                        href="/our-story"
                        className="block text-[18px] font-medium leading-7 text-[#FFFFFF] uppercase"
                      >
                        <li className="flex justify-center py-[20px] list-items font-dmSans">
                          Our Story
                        </li>
                      </a>
                      <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                      <a
                        href="/our-team"
                        className="block  text-[18px] font-medium leading-7 text-[#FFFFFF] uppercase"
                      >
                        <li className="flex justify-center py-[20px] list-items">
                          Our Team & Partners
                        </li>
                      </a>
                      <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                      <a
                        href="/contact-us"
                        className="block text-[18px] font-medium leading-7 text-[#FFFFFF]"
                      >
                        <li className="flex justify-center py-[20px] list-items uppercase">
                          Contact
                        </li>
                      </a>
                      <hr className="h-px my- bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                      <a href="/our-partners">
                        <Button className="p-[15px] w-full my-5 mx-auto h-[50px]">
                          Partner with Us
                        </Button>
                      </a>

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
