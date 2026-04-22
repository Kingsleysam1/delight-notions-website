import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/common/Header";
import { Separator } from "@/components/ui/separator";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

const stats = [
  { label: "Total Projects", value: "200+" },
  { label: "Wedding Sessions", value: "80+" },
  { label: "Corporate Clients", value: "50+" },
  { label: "Portrait Sessions", value: "150+" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0 px-4 md:px-[6rem]">

        {/* Page Header */}
        <section className="py-[5rem] md:py-[8rem]">
          <p className="text-customGray uppercase text-[1.1rem] font-[500] mb-4">Our Work</p>
          <h1 className="text-white font-[700] text-[3rem] md:text-[5rem] uppercase leading-tight mb-6 max-w-[800px]">
            Explore Our Photography Portfolio
          </h1>
          <p className="text-customGrayAlt2 text-[1.125rem] leading-relaxed max-w-[700px]">
            A curated collection of our finest work across wedding photography, portraits, 
            commercial shoots, corporate headshots, and events. Every frame tells a story.
          </p>
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

        {/* Portfolio Grid */}
        <section className="mb-[8rem]">
          <div className="flex justify-between items-center mb-[3rem]">
            <Header title="Portfolio" description="All Our Works" />
          </div>

          <PortfolioGrid />
        </section>

      </div>
      <FooterSection />
    </main>
  );
}
