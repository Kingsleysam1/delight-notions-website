import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Wedding Photography",
    category: "Events",
    description:
      "Your wedding day deserves to be remembered in every perfect detail. We blend seamlessly into your celebration, capturing candid emotions, heartfelt moments, and the joy that defines your special day. From the ceremony to the reception, every frame is a timeless memory.",
    highlights: [
      "Full-day coverage from preparation to reception",
      "Candid and posed shots for a comprehensive story",
      "Edited gallery delivered within 1 week",
      "Unlimited photo prints & digital files included",
    ],
    imageUrl: "/images/lady_2.png",
  },
  {
    id: 2,
    title: "Portrait Sessions",
    category: "Portrait",
    description:
      "Whether it's a family portrait, maternity shoot, or personal branding session, our portrait photography brings out the best in every subject. We create a relaxed and comfortable environment so your personality shines through every image.",
    highlights: [
      "Studio and outdoor session options",
      "Professional lighting & backdrop setups",
      "Same-week delivery of edited images",
      "Wardrobe consultation included",
    ],
    imageUrl: "/images/lady_1.png",
  },
  {
    id: 3,
    title: "Commercial Photography",
    category: "Commercial",
    description:
      "From product photography to brand campaigns, we help businesses communicate their story through striking visuals. Our commercial photography is crafted to meet the demands of marketing, advertising, and e-commerce.",
    highlights: [
      "Product photography for e-commerce & catalogues",
      "Brand campaign and advertising imagery",
      "High-resolution files ready for print & digital",
      "Creative direction and prop styling available",
    ],
    imageUrl: "/images/box.png",
  },
  {
    id: 4,
    title: "Corporate Headshots",
    category: "Corporate",
    description:
      "Make a powerful first impression with professional corporate headshots. We work with businesses and professionals across Nigeria to produce polished, confident portraits for websites, LinkedIn, press releases, and corporate directories.",
    highlights: [
      "Individual and group headshot packages",
      "On-site studio setup available",
      "Background options: solid, environmental, or branded",
      "Quick turnaround for corporate teams",
    ],
    imageUrl: "/images/damien.png",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₦50,000",
    description: "Perfect for individuals and small sessions.",
    features: [
      "2-hour session",
      "20 edited photos",
      "1 location",
      "Digital delivery",
      "Print-ready files",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₦120,000",
    description: "Our most popular package for events and businesses.",
    features: [
      "5-hour session",
      "60 edited photos",
      "2 locations",
      "Digital delivery",
      "Print-ready files",
      "1 free reprint included",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₦250,000",
    description: "Full-day coverage for weddings and major events.",
    features: [
      "Full-day session (8+ hrs)",
      "150+ edited photos",
      "Unlimited locations",
      "Digital delivery",
      "Premium print album",
      "2 photographers on-site",
      "Priority support",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0 px-4 md:px-[6rem]">

        {/* Page Header */}
        <section className="py-[5rem] md:py-[8rem]">
          <p className="text-customGray uppercase text-[1.1rem] font-[500] mb-4">What We Offer</p>
          <h1 className="text-white font-[700] text-[3rem] md:text-[5rem] uppercase leading-tight mb-6 max-w-[800px]">
            Our Photography Services
          </h1>
          <p className="text-customGrayAlt2 text-[1.125rem] leading-relaxed max-w-[700px]">
            Delight Notions Studio&apos;s offers a complete range of professional photography services
            tailored to meet the diverse needs of individuals, couples, and industry-leading businesses.
          </p>
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Services */}
        <section className="flex flex-col gap-[8rem] mb-[8rem]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                <p className="text-customGray uppercase text-[0.875rem] font-[500] mb-3">{service.category}</p>
                <h2 className="text-white font-[700] text-[2rem] md:text-[3rem] uppercase mb-6">{service.title}</h2>
                <p className="text-customGrayAlt2 text-[1.125rem] leading-relaxed mb-8">{service.description}</p>
                <div className="flex flex-col gap-3 mb-8">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-superGray flex items-center justify-center flex-shrink-0">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <p className="text-customGrayAlt2 text-[1rem]">{h}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <MainButton text="Book This Service" rightIconComponent={<ArrowRight />} classes="w-[14rem]" />
                </Link>
              </div>
              <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="rounded-[1.25rem] rounded-bl-[6.25rem] w-full object-cover max-h-[500px]"
                />
              </div>
            </div>
          ))}
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Pricing Packages */}
        <section className="mb-[8rem]">
          <div className="text-center mb-[3rem]">
            <Header title="Pricing" description="Choose Your Package" />
            <p className="text-customGrayAlt2 text-[1.125rem] mt-4 max-w-[600px] mx-auto">
              Transparent pricing with no hidden fees. All packages include professional editing and digital delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`border rounded-[1.25rem] p-8 flex flex-col gap-6 relative ${pkg.popular
                    ? "border-white bg-superGray"
                    : "border-lightDark"
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-background text-[0.875rem] font-[700] px-6 py-1 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <div>
                  <p className="text-customGray uppercase text-[0.875rem] font-[500]">{pkg.name}</p>
                  <p className="text-white font-[700] text-[3rem] mt-2">{pkg.price}</p>
                  <p className="text-customGrayAlt2 text-[1rem] mt-2">{pkg.description}</p>
                </div>
                <Separator className="bg-lightDark" />
                <div className="flex flex-col gap-3 flex-1">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <Check className="text-white w-4 h-4 flex-shrink-0" />
                      <p className="text-customGrayAlt2 text-[1rem]">{f}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <MainButton
                    text="Get Started"
                    classes="w-full"
                    variant={pkg.popular ? "secondary" : "primary"}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
      <FooterSection />
    </main>
  );
}
