"use client";

import { useState } from "react";

import Image from "next/image";

import closeBtn from "@/public/images/story/close-x-icon.svg";
import caretDownBtn from "@/public/images/story/CaretDown.svg";

type InvestPopupFormProps = {
  closeModal: () => void;
};

export default function InvestPopupForm({ closeModal }: InvestPopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [unitSelected, setUnitSelected] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setUnitSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative rounded-3xl bg-white shadow-[0px_3px_8px_0px_#0000003D] w-full max-w-[604px] hide-scrollbar py-[66px] md:py-[37px] px-[19px] max-h-[95vh] overflow-y-auto ">
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-[23px] md:top-[13px] right-[26px] md:right-[28px] cursor-pointer"
      >
        <Image src={closeBtn} alt="close_btn" width={30} height={30} />
      </button>
      <form className="space-y-[24px] max-w-[507px] mx-auto  bg-white">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@company.com"
            className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone number
          </label>
          <div className="flex">
            <input
              type="text"
              id="phone"
              placeholder="+1 (555) 000-0000"
              className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            placeholder="Name company"
            className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
          />
        </div>

        {/* How Many Units? */}
        <div className="w-full">
          {/* Dropdown button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex justify-between items-center rounded-md border border-gray-300 bg-white py-2 px-3 text-sm "
            >
              <span className="text-left">
                {unitSelected !== null
                  ? `${unitSelected} unit${unitSelected > 1 ? "s" : ""}`
                  : "Interested in how many units?"}
              </span>
              <Image src={caretDownBtn} alt="icon" width={24} height={24} />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <ul className="absolute left-0 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-md z-10 max-h-[900px] overflow-y-auto">
                <li
                  onClick={() => handleSelect(1)}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                >
                  1
                </li>
                <li
                  onClick={() => handleSelect(2)}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                >
                  2
                </li>
                <li
                  onClick={() => handleSelect(3)}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                >
                  3
                </li>
                <li
                  onClick={() => handleSelect(4)}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                >
                  4
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Message"
            className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-[#EDD98A] mt-[8px] py-[12.5px] px-4 text-[18px] leading-[20px] font-bold text-[#14205A] shadow-sm hover:bg-[#e3cd73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
