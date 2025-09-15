"use client";

import Text from "@/components/ui/Text";

export default function ContactForm() {
  return (
    <form className="space-y-[24px]">
      {/* Heading */}
      <div className="mb-[48px] text-center md:text-left">
        <Text className="text-[28px] md:text-[28px] leading-[34px] md:leading-[34px]   font-medium ">
          Get in touch
        </Text>
        <Text className="mt-5 text-[18px] leading-[26px] text-[#6D6D6D]">
          Our team would love to hear from you.
        </Text>
      </div>

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
          {/* <select className="rounded-l-md border border-gray-300 bg-gray-50 px-2 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400">
            <option>US</option>
            <option>UK</option>
            <option>PK</option>
          </select> */}
          <input
            type="number"
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

      {/* Privacy Policy */}
      <div className="flex items-center ">
        <input
          type="checkbox"
          id="policy"
          className="h-4 w-4 rounded-md md:border-[#D5D7DA] text-yellow-500 focus:ring-yellow-400"
        />
        <label
          htmlFor="policy"
          className="ml-3 text-[16px] leading-[26px] text-[#6D6D6D]"
        >
          You agree to our friendly{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
          .
        </label>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-md bg-[#EDD98A] mt-[8px] py-[12.5px] px-4 text-[18px] leading-[20px] font-bold text-[#14205A] shadow-sm hover:bg-[#e3cd73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        Send message
      </button>
    </form>
  );
}
