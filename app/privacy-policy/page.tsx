import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | PaintRite Painters San Diego",
  description:
    "PaintRite Painters privacy policy — how we collect, use, and protect your personal information. Serving San Diego County since 1994.",
};

const SECTIONS: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Information We Collect",
    body: (
      <>
        <p className="mb-3">
          <span className="font-semibold text-ink">Personal Information:</span> When you contact us or
          use our services, we may collect personal information such as your name, email address,
          phone number, and address.
        </p>
        <p>
          <span className="font-semibold text-ink">Usage Data:</span> We may also collect information
          about how you interact with our website, including your IP address, browser type, and pages
          visited.
        </p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    body: (
      <>
        <p className="mb-3">
          <span className="font-semibold text-ink">To Provide Services:</span> We use personal data to
          fulfill your requests for painting services and to communicate with you about your project.
        </p>
        <p className="mb-3">
          <span className="font-semibold text-ink">To Improve Our Services:</span> Usage information
          helps us analyze trends and improve the functionality and performance of our website.
        </p>
        <p>
          <span className="font-semibold text-ink">To Protect Our Rights:</span> We may use information
          to investigate and prevent fraudulent or illegal activities.
        </p>
      </>
    ),
  },
  {
    heading: "Information Sharing",
    body: (
      <>
        <p className="mb-3">We do not sell, trade, or rent your personal information to third parties.</p>
        <p>
          We may share data with trusted service providers who assist us in operating our website or
          providing services to you.
        </p>
      </>
    ),
  },
  {
    heading: "Data Security",
    body: (
      <>
        <p className="mb-3">
          We take reasonable measures to protect your personal information from unauthorized access,
          disclosure, alteration, or destruction.
        </p>
        <p>
          However, please note that no method of transmission over the internet or electronic storage
          is 100% secure.
        </p>
      </>
    ),
  },
  {
    heading: "Policy Updates",
    body: (
      <p>
        We reserve the right to modify this policy, with changes becoming effective immediately upon
        posting on our website.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    body: (
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href={PHONE_HREF} className="text-navy font-semibold hover:underline">
          {PHONE_DISPLAY}
        </a>{" "}
        or visit our{" "}
        <Link href="/contact" className="text-navy font-semibold hover:underline">
          contact page
        </Link>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="Privacy Policy"
          title="Privacy Policy"
          intro="Your privacy matters to us. This policy explains what information PaintRite Painters collects, how we use it, and the steps we take to keep it secure."
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted mb-10">Last updated: July 17, 2026</p>
            <div className="space-y-10 text-body leading-relaxed">
              {SECTIONS.map((s) => (
                <div key={s.heading}>
                  <h2 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-3">
                    <span className="inline-block w-8 h-1 rounded-full bg-yellow" />
                    {s.heading}
                  </h2>
                  {s.body}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
