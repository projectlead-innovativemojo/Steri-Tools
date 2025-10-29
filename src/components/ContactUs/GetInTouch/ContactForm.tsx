"use client";
import { useState } from "react";
import Text from "@/components/ui/Text";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, message, phone, company }),
      });
      // Check status before parsing
      if (!response.ok) {
        const errText = await response.text(); // might be HTML
        throw new Error(`Request failed: ${response.status} ${errText}`);
      }
      // Only parse JSON if your route returns JSON
      // const data = await response.json();
      alert("Email sent successfully!");
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
      setCompany("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-[24px]" onSubmit={submitForm}>
      {/* Heading */}
      <div className="mb-[48px] text-center md:text-left">
        <Text className="text-[28px] md:text-[28px] leading-[34px] md:leading-[34px] font-medium ">
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
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="tel"
          id="phone"
          required
          placeholder="+1 (555) 000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
        />
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
          required
          placeholder="Name company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
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
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-[6px] block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-yellow-400 focus:ring-yellow-400"
        />
      </div>
      {/* Privacy Policy */}
      <div className="flex items-center ">
        <input
          type="checkbox"
          id="policy"
          checked={policyAccepted}
          onChange={(e) => setPolicyAccepted(e.target.checked)}
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
      <button
        type="submit"
        disabled={!policyAccepted || loading}
        className={`w-full rounded-md mt-[8px] py-[12.5px] px-4 text-[18px] leading-[20px] font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
          policyAccepted && !loading
            ? "bg-[#EDD98A] text-[#14205A] hover:bg-[#E3CD73]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
