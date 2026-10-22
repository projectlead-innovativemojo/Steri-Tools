import React from "react";
import type { Metadata } from "next";

import Text from "@/components/ui/Text";

export const metadata: Metadata = {
  title: "Privacy Policy | SteriTools",
  description:
    "How Steri Tools collects, uses and protects personal information submitted through this website.",
};

const EFFECTIVE_DATE = "October 22, 2026";
const CONTACT_EMAIL = "Info@SteriToolsGlobal.com";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Who we are",
    body: (
      <>
        <p>
          This website is operated by Steri Tools (&ldquo;Steri Tools&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), the team
          behind SteriBasin Go. This Privacy Policy explains what personal
          information we collect when you use this website or contact us, how
          we use it, and the choices and rights you have.
        </p>
        <p>
          If you have any questions about this policy or how we handle your
          information, please email us at{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "2. Information we collect",
    body: (
      <>
        <p>
          <strong>Information you give us.</strong> When you use the contact
          form on this website, we collect the details you enter: your name,
          email address, phone number, company name and your message. If you
          email us directly, we receive your email address and anything you
          include in your message.
        </p>
        <p>
          <strong>Technical information.</strong> Like most websites, our
          hosting provider automatically processes limited technical
          information when you visit, such as your IP address, browser type,
          device information and the pages you request. This is used to
          deliver the website, keep it secure and diagnose problems.
        </p>
        <p>
          <strong>Cookies.</strong> This website does not use advertising or
          analytics tracking cookies. We do not sell or rent personal
          information, and we do not use it for third-party advertising.
        </p>
      </>
    ),
  },
  {
    heading: "3. How we use your information",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          To respond to your enquiry, including questions about SteriBasin Go,
          consultations, partnerships and investment.
        </li>
        <li>To send you a confirmation that we have received your message.</li>
        <li>
          To follow up with you about the subject of your enquiry, where you
          would reasonably expect us to.
        </li>
        <li>To operate, maintain and secure this website.</li>
        <li>To comply with our legal and regulatory obligations.</li>
      </ul>
    ),
  },
  {
    heading: "4. Legal basis for processing",
    body: (
      <p>
        Where data protection laws such as the UK GDPR or EU GDPR apply, we
        process your information on the basis of your consent (which you give
        by ticking the box on our contact form), our legitimate interests in
        responding to enquiries and running our business, taking steps at your
        request before entering into a contract, and complying with legal
        obligations. You can withdraw your consent at any time by contacting
        us.
      </p>
    ),
  },
  {
    heading: "5. Who we share your information with",
    body: (
      <>
        <p>
          Your enquiry is shared with the members of the Steri Tools team who
          need it to respond to you. We also use trusted service providers who
          process information on our behalf, only for the purposes described
          in this policy:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>our website hosting provider;</li>
          <li>our email service provider, which delivers form messages; and</li>
          <li>
            our website development and maintenance provider, which receives
            copies of form submissions to support and maintain the website.
          </li>
        </ul>
        <p>
          We may also disclose information if required by law, or to protect
          our rights, users or the public. We do not sell your personal
          information.
        </p>
      </>
    ),
  },
  {
    heading: "6. International transfers",
    body: (
      <p>
        Our service providers may store or process information in countries
        other than the one you live in, including the United States and the
        United Kingdom. Where required, we rely on appropriate safeguards for
        these transfers, such as standard contractual clauses.
      </p>
    ),
  },
  {
    heading: "7. How long we keep your information",
    body: (
      <p>
        We keep enquiry information for as long as needed to respond to you
        and manage any resulting business relationship, and afterwards only
        for as long as reasonably necessary for legitimate business or legal
        purposes. We then delete it securely.
      </p>
    ),
  },
  {
    heading: "8. How we protect your information",
    body: (
      <p>
        We use reasonable technical and organisational measures to protect your
        information, including encrypted (HTTPS) connections to this website.
        No method of transmission over the internet is completely secure, but
        we work to protect the information you share with us.
      </p>
    ),
  },
  {
    heading: "9. Your rights",
    body: (
      <>
        <p>
          Depending on where you live, you may have the right to access the
          personal information we hold about you, ask us to correct or delete
          it, object to or restrict how we use it, request a copy of it, and
          withdraw consent where we rely on consent.
        </p>
        <p>
          To exercise any of these rights, email{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . If you are in the UK or EU and are unhappy with how we have handled
          your information, you can also complain to your local data
          protection authority (in the UK, the Information Commissioner&rsquo;s
          Office).
        </p>
      </>
    ),
  },
  {
    heading: "10. Children",
    body: (
      <p>
        This website is intended for healthcare professionals, partners and
        investors. It is not directed at children, and we do not knowingly
        collect personal information from children.
      </p>
    ),
  },
  {
    heading: "11. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The latest
        version will always be available on this page, with the effective date
        shown at the top.
      </p>
    ),
  },
  {
    heading: "12. Contact us",
    body: (
      <p>
        For any privacy questions or requests, contact Steri Tools at{" "}
        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
];

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full max-w-[900px] mx-auto px-5 mt-[42px] md:mt-[80px] mb-[80px] md:mb-[142px]">
      <Text as="h1" className="text-[#292929] mb-[12px]">
        Privacy <span className="text-brand-yellow">Policy</span>
      </Text>
      <p className="text-[16px] leading-[26px] text-[#6D6D6D] mb-[40px]">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <div className="space-y-[36px] text-[16px] md:text-[18px] leading-[28px] text-[#3a3a3a]">
        {sections.map((section) => (
          <div key={section.heading} className="space-y-[12px]">
            <h2 className="font-montserrat text-[22px] md:text-[26px] leading-[32px] font-semibold text-[#14205A]">
              {section.heading}
            </h2>
            {section.body}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
