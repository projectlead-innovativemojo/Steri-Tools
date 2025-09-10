"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5">
      {/* Heading */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Get in touch</h3>
        <p className="mt-1 text-sm text-gray-500">
          Our team would love to hear from you.
        </p>
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
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
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
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
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
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
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
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
        />
      </div>

      {/* Privacy Policy */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="policy"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400"
        />
        <label htmlFor="policy" className="ml-2 text-sm text-gray-600">
          You agree to our friendly{" "}
          <a href="#" className="text-yellow-600 hover:underline">
            privacy policy
          </a>
          .
        </label>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-md bg-[#EDD98A] py-2 px-4 text-sm font-semibold text-gray-800 shadow-sm hover:bg-[#e3cd73] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        Send message
      </button>
    </form>
  );
}
