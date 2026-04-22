import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "7+" },
  { label: "Projects Completed", value: "200+" },
  { label: "Happy Clients", value: "150+" },
  { label: "Awards Won", value: "12" },
];

const skills = [
  "Wedding Photography",
  "Portrait Sessions",
  "Commercial Photography",
  "Corporate Headshots",
  "Event Coverage",
  "Product Photography",
  "Photo Editing & Retouching",
  "Studio Lighting",
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0 px-4 md:px-[6rem]">

        {/* Hero Banner */}
        <section className="py-[5rem] md:py-[8rem] flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1">
            <p className="text-customGray uppercase text-[1.1rem] font-[500] mb-4">Meet the Photographer</p>
            <h1 className="text-white font-[700] text-[3rem] md:text-[5rem] uppercase leading-tight mb-6">
              Momoh<br />Elias
            </h1>
            <p className="text-customGrayAlt2 text-[1.125rem] leading-relaxed max-w-[600px] mb-8">
              Led by a visionary photographer with 7 years of experience (4 years in apprenticeship and 3 years professionally),
              Delight Notions Studio&apos;s is founded on a passion for visual storytelling and a commitment to excellence.
              We specialize in wedding photography, portrait photography, commercial photography, and corporate headshots —
              capturing moments that tell stories, evoke emotions, and leave a lasting impression.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact">
                <MainButton text="Work With Us" rightIconComponent={<ArrowRight />} />
              </Link>
              <Link href="/portfolio">
                <MainButton text="View Portfolio" rightIconComponent={<ArrowRight />} />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/damien_alt.png"
              alt="Momoh Elias - Lead Creative"
              className="rounded-[1.25rem] w-full max-w-[500px] object-cover"
            />
          </div>
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-[8rem]">
          {stats.map((stat) => (
            <div key={stat.label} className="border border-lightDark rounded-[0.75rem] p-8 text-center">
              <p className="text-white font-[700] text-[3rem] md:text-[4rem]">{stat.value}</p>
              <p className="text-customGrayAlt2 text-[1rem] mt-2 uppercase font-[500]">{stat.label}</p>
            </div>
          ))}
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Our Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-[8rem]">
          <div>
            <Header title="Our Story" description="From Vision to Studio" />
            <Separator className="bg-lightDark my-8" />
            <div className="flex flex-col gap-6 text-customGrayAlt2 text-[1.125rem] leading-relaxed">
              <p>
                Delight Notions Studio&apos;s was born out of a deep passion for visual storytelling.
                Momoh Elias began his journey in photography as an apprentice, spending 4 years mastering
                the craft before launching the studio professionally 3 years ago.
              </p>
              <p>
                Our studio is built on the belief that every photograph has the power to convey a narrative.
                Whether it&apos;s a couple&apos;s first dance, a CEO&apos;s headshot, or a product on a shelf —
                we approach every shot with the same dedication and artistry.
              </p>
              <p>
                Today, Delight Notions Studio&apos;s serves clients across Nigeria, from industry giants
                and businesses to engaged couples and families, redefining the photography standard through
                unparalleled creativity, professionalism, and client satisfaction.
              </p>
            </div>
          </div>
          <div>
            <Header title="Our Skills" description="What We Bring" />
            <Separator className="bg-lightDark my-8" />
            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 border border-lightDark p-4 rounded-[0.75rem]"
                >
                  <img src="/images/legged_stars_gray.png" alt="star" />
                  <p className="text-customGrayAlt2 text-[1.125rem] uppercase">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Contact Info */}
        <section className="mb-[8rem]">
          <Header title="Contact Information" description="Get In Touch" />
          <Separator className="bg-lightDark my-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: <Phone className="text-white w-6 h-6" />, label: "Phone", value: "08160813750" },
              { icon: <Mail className="text-white w-6 h-6" />, label: "Email", value: "delightnotions@gmail.com" },
              { icon: <MapPin className="text-white w-6 h-6" />, label: "Location", value: "Nigeria" },
              { icon: <Clock className="text-white w-6 h-6" />, label: "Working Hours", value: "Mon–Sat, 9am–6pm" },
            ].map((item) => (
              <div key={item.label} className="border border-lightDark rounded-[0.75rem] p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-superGray rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-customGray uppercase text-[0.875rem] font-[500]">{item.label}</p>
                <p className="text-white text-[1.125rem] font-[500]">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <FooterSection />
    </main>
  );
}
