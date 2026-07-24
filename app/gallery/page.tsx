import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABand from "@/app/components/CTABand";
import GalleryGrid from "@/app/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery | PaintRite Painters San Diego",
  description:
    "Browse residential and commercial painting projects completed by PaintRite Painters across San Diego County — home exteriors, commercial buildings, and custom stain-work.",
};

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PageHero
          eyebrow="Project Gallery"
          title="Project Gallery"
          intro="A look at recent residential and commercial work across San Diego County. Every one of these started with a free estimate."
          image="/images/gallery-02.jpg"
        />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
            <p className="mt-12 text-center text-sm text-muted">
              Want to see work like this in person? We&apos;re happy to share references from projects
              near you.
            </p>
          </div>
        </section>

        <CTABand heading="Your project could be next." sub="Free estimates across San Diego County." />
      </main>
      <Footer />
    </>
  );
}
