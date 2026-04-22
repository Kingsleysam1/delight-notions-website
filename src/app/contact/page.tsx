"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/common/Header";
import MainButton from "@/components/common/MainButton";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Phone className="text-white w-6 h-6" />,
    label: "Phone",
    value: "08160813750",
    sub: "Mon–Sat, 9am–6pm",
  },
  {
    icon: <Mail className="text-white w-6 h-6" />,
    label: "Email",
    value: "delightnotions@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <MapPin className="text-white w-6 h-6" />,
    label: "Location",
    value: "Nigeria",
    sub: "Available nationwide",
  },
  {
    icon: <Clock className="text-white w-6 h-6" />,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "7:00am – 6:00pm",
  },
];

const services = [
  "Wedding Photography",
  "Portrait Sessions",
  "Commercial Photography",
  "Corporate Headshots",
  "Event Coverage",
  "Product Photography",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0 px-4 md:px-[6rem]">

        {/* Page Header */}
        <section className="py-[5rem] md:py-[8rem]">
          <p className="text-customGray uppercase text-[1.1rem] font-[500] mb-4">Let&apos;s Connect</p>
          <h1 className="text-white font-[700] text-[3rem] md:text-[5rem] uppercase leading-tight mb-6 max-w-[800px]">
            Get In Touch With Us
          </h1>
          <p className="text-customGrayAlt2 text-[1.125rem] leading-relaxed max-w-[700px]">
            Ready to work with Delight Notions Studio&apos;s? Fill out the form below and we&apos;ll get back to you within 24 hours.
            We&apos;d love to hear about your project.
          </p>
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-[5rem]">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="border border-lightDark rounded-[0.75rem] p-6 flex flex-col gap-4 hover:border-superGray transition-colors"
            >
              <div className="w-12 h-12 bg-superGray rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-customGray uppercase text-[0.875rem] font-[500]">{item.label}</p>
                <p className="text-white text-[1.125rem] font-[600] mt-1">{item.value}</p>
                <p className="text-customGrayAlt2 text-[0.875rem] mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </section>

        <Separator className="bg-lightDark mb-[5rem]" />

        {/* Contact Form */}
        <section className="mb-[8rem]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            <div>
              <Header title="Send a Message" description="Book a Session" />
              <Separator className="bg-lightDark my-8" />
              <p className="text-customGrayAlt2 text-[1.125rem] leading-relaxed mb-8">
                Tell us a little about your project — what type of photography you need,
                when the session is planned, and any other details that would help us understand
                your vision. Momoh Elias will personally respond to every inquiry.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-customGrayAlt2">
                  <img src="/images/few_legs_star.png" alt="star" />
                  <p>We serve clients across Nigeria</p>
                </div>
                <div className="flex items-center gap-3 text-customGrayAlt2">
                  <img src="/images/few_legs_star.png" alt="star" />
                  <p>Custom packages available</p>
                </div>
                <div className="flex items-center gap-3 text-customGrayAlt2">
                  <img src="/images/few_legs_star.png" alt="star" />
                  <p>Quick response within 24 hours</p>
                </div>
                <div className="flex items-center gap-3 text-customGrayAlt2">
                  <img src="/images/few_legs_star.png" alt="star" />
                  <p>Investment starts at ₦50,000</p>
                </div>
              </div>
            </div>

            <div className="border border-lightDark rounded-[1.25rem] p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                  <div className="w-20 h-20 bg-superGray rounded-full flex items-center justify-center">
                    <Send className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-white text-[2rem] font-[700] uppercase">Message Sent!</h3>
                  <p className="text-customGrayAlt2 text-[1.125rem]">
                    Thank you for reaching out. Momoh Elias will get back to you within 24 hours.
                  </p>
                  <MainButton
                    text="Send Another"
                    action={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-customGray uppercase text-[0.875rem] font-[500]">Full Name *</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-transparent border border-lightDark rounded-[0.625rem] px-4 py-3 text-white placeholder:text-customGrayAlt2 focus:outline-none focus:border-superGray transition-colors text-[1rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-customGray uppercase text-[0.875rem] font-[500]">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-transparent border border-lightDark rounded-[0.625rem] px-4 py-3 text-white placeholder:text-customGrayAlt2 focus:outline-none focus:border-superGray transition-colors text-[1rem]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-customGray uppercase text-[0.875rem] font-[500]">Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="08xxxxxxxxxx"
                        className="bg-transparent border border-lightDark rounded-[0.625rem] px-4 py-3 text-white placeholder:text-customGrayAlt2 focus:outline-none focus:border-superGray transition-colors text-[1rem]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-customGray uppercase text-[0.875rem] font-[500]">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="bg-background border border-lightDark rounded-[0.625rem] px-4 py-3 text-white focus:outline-none focus:border-superGray transition-colors text-[1rem]"
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-background">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-customGray uppercase text-[0.875rem] font-[500]">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, event date, location, and any special requirements..."
                      className="bg-transparent border border-lightDark rounded-[0.625rem] px-4 py-3 text-white placeholder:text-customGrayAlt2 focus:outline-none focus:border-superGray transition-colors text-[1rem] resize-none"
                    />
                  </div>

                  <MainButton
                    text="Send Message"
                    isSubmitable
                    rightIconComponent={<Send className="w-4 h-4" />}
                    classes="w-full"
                  />
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
      <FooterSection />
    </main>
  );
}
