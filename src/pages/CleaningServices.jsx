import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Wind,
  Shield,
  Clock,
  Award,
  Users,
  ArrowRight,
  Star,
  Quote,
  ChevronRight,
  Phone,
  CheckCircle2,
  Home,
  Building,
  Factory,
} from "lucide-react";
import SEO from "../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CleaningServices = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      desc: "Comprehensive home cleaning services for apartments, villas, and townhouses",
      features: [
        "Deep cleaning",
        "Regular maintenance",
        "Move-in/out cleaning",
        "Post-renovation cleaning",
      ],
    },
    {
      icon: Building,
      title: "Commercial Cleaning",
      desc: "Professional cleaning solutions for offices, retail spaces, and commercial buildings",
      features: [
        "Office cleaning",
        "Retail cleaning",
        "Window cleaning",
        "Floor maintenance",
      ],
    },
    {
      icon: Factory,
      title: "Industrial Cleaning",
      desc: "Specialized cleaning for warehouses, factories, and industrial facilities",
      features: [
        "Warehouse cleaning",
        "Factory floor cleaning",
        "Equipment cleaning",
        "Safety compliance",
      ],
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      desc: "Thorough and detailed cleaning service for complete sanitation and hygiene",
      features: [
        "Kitchen deep clean",
        "Bathroom sanitization",
        "Carpet cleaning",
        "Upholstery cleaning",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Trained Professionals",
      desc: "Experienced and background-checked cleaning staff",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      desc: "High standards with satisfaction guarantee",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Available 24/7 to fit your schedule",
    },
    {
      icon: Users,
      title: "Customized Plans",
      desc: "Tailored cleaning solutions for your needs",
    },
  ];

  const testimonials = [
    {
      name: "Fatima Al-Mansouri",
      role: "Homeowner, Dubai Marina",
      text: "Their residential cleaning service is exceptional. My home has never been cleaner, and the team is always professional and punctual.",
    },
    {
      name: "Khalid Hassan",
      role: "Office Manager, Business Bay",
      text: "We've been using their commercial cleaning service for over a year. Excellent service, reliable staff, and great value for money.",
    },
    {
      name: "Sarah Johnson",
      role: "Property Manager, JBR",
      text: "Outstanding deep cleaning service for our properties. They always exceed our expectations and handle everything professionally.",
    },
  ];

  return (
    <div>
      <SEO
        title="Cleaning Services - Professional Cleaning Solutions in Dubai UAE"
        description="Professional cleaning services in Dubai, UAE. Residential, commercial, and industrial cleaning with trained professionals and quality assurance. Call +971503366801."
        keywords="cleaning services Dubai, residential cleaning, commercial cleaning, industrial cleaning, deep cleaning, professional cleaners, Dubai cleaning company, maid service, office cleaning"
        canonicalUrl="https://www.yasiralnoorbc.com/cleaning-services"
        ogImage="/cleaning-services-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Cleaning Services",
          description:
            "Comprehensive cleaning solutions for residential, commercial, and industrial properties in Dubai, UAE",
          provider: {
            "@type": "Organization",
            name: "Yasir Alnoor Contracting LLC",
            url: "https://www.yasiralnoorbc.com",
            telephone: "+971503366801",
            email: "info@yasiralnoorbc.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "#14 B6 Block, Xavier Business Center, Burj Nahar Mall, Al Muteena",
              addressLocality: "Dubai",
              addressCountry: "AE",
            },
          },
          areaServed: {
            "@type": "Place",
            name: "Dubai, UAE",
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] xs:min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 xs:pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/clean.webp")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#005baa]/85 via-[#005baa]/75 to-[#005baa]/65">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 xs:top-20 left-5 xs:left-10 w-48 xs:w-72 h-48 xs:h-72 bg-[#ffffff] rounded-full blur-[80px] xs:blur-[120px]" />
                <div className="absolute bottom-10 xs:bottom-20 right-5 xs:right-10 w-64 xs:w-96 h-64 xs:h-96 bg-[#ffffff] rounded-full blur-[100px] xs:blur-[150px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-12 xs:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 xs:px-6"
          >
            <span className="inline-block px-4 xs:px-6 py-2 xs:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs xs:text-sm font-bold uppercase tracking-wider mb-6 xs:mb-8">
              Professional Cleaning Services
            </span>
            <div className="flex justify-center mb-6 xs:mb-8">
              <div className="w-28 xs:w-36 h-28 xs:h-36 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border-3 border-white/70 shadow-2xl ring-4 ring-white/20 transform hover:scale-105 transition-all duration-300">
                <img
                  src="/clean1.svg"
                  alt="Cleaning Services Logo"
                  className="w-20 xs:w-24 h-20 xs:h-24 filter drop-shadow-xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                <div className="hidden items-center justify-center text-white text-4xl xs:text-5xl font-bold">
                  🧹
                </div>
              </div>
            </div>
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6 leading-tight text-center">
              Sparkling Clean Every Time
            </h1>
            <p className="text-base xs:text-lg md:text-xl text-gray-200 mb-6 xs:mb-8 max-w-3xl xs:max-w-4xl mx-auto leading-relaxed px-4 xs:px-6 text-center">
              Professional cleaning solutions for homes, offices, and industrial
              spaces
              <span className="text-white font-semibold">
                {" "}
                across Dubai
              </span>{" "}
              with guaranteed satisfaction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 justify-center items-center px-4 xs:px-6">
              <a
                href="tel:+971503366801"
                className="group bg-white hover:bg-gray-50 text-[#005baa] font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm xs:text-base"
              >
                <Phone className="mr-2" size={16} />
                Call +971 50 336 6801
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </a>
              <Link
                to="/contact"
                className="group bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 text-sm xs:text-base"
              >
                Get a Free Quote
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8 mt-12 xs:mt-16 max-w-4xl xs:max-w-5xl mx-auto px-4 xs:px-6"
          >
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Properties Cleaned" },
              { number: "24/7", label: "Availability" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group px-2 xs:px-4">
                <div className="relative mb-2 xs:mb-3">
                  <div className="text-3xl xs:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 text-3xl xs:text-4xl md:text-5xl font-bold text-white/20 blur-xl"></div>
                </div>
                <div className="text-gray-300 text-xs xs:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#005baa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a2e5]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <img
                src="/clean2.svg"
                alt="Professional Cleaning"
                className="w-16 xs:w-20 h-16 xs:h-20"
              />
            </div>
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
              Our Cleaning Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                Cleaning Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From regular maintenance to deep cleaning, we provide professional
              cleaning services tailored to your specific needs with attention
              to detail.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#005baa]/20 transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-48 bg-white overflow-hidden rounded-t-2xl flex items-center justify-center p-2">
                  <img
                    src={
                      service.title === "Residential Cleaning"
                        ? "/clean1.webp"
                        : service.title === "Commercial Cleaning"
                          ? "/clean2.webp"
                          : service.title === "Industrial Cleaning"
                            ? "/clean3.webp"
                            : "/clean4.webp"
                    }
                    alt={service.title}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-[#005baa]/5 to-[#00a2e5]/5">
                    <service.icon className="text-[#005baa]/30" size={64} />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-5 xs:p-6">
                  <div className="flex items-start mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#005baa] to-[#00a2e5] rounded-xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                      <service.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg xs:text-xl font-bold text-gray-900 group-hover:text-[#005baa] transition-colors duration-300 mb-2">
                        {service.title}
                      </h3>
                      <div className="h-1 w-10 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full transition-all duration-300 group-hover:w-16" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm xs:text-base">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <CheckCircle2
                          className="text-[#005baa] mr-2 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-xs xs:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+971503366801"
                      className="inline-flex items-center text-[#005baa] font-semibold hover:text-[#00a2e5] transition-colors duration-300 group text-sm xs:text-base"
                    >
                      <span className="mr-2">Book This Service</span>
                      <ArrowRight
                        size={16}
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                    <div className="text-xs text-gray-500 font-medium">
                      Available 24/7
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-[#005baa] to-[#1F4E79] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Why Choose Our Cleaning Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              The Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Cleaning Advantage
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We combine expertise, quality products, and dedication to deliver
              exceptional cleaning services that exceed your expectations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index}>
                <div className="text-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
                  <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-[#005baa]" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#005baa]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a2e5]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-[#005baa]/10 to-[#00a2e5]/10 text-[#005baa] rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-[#005baa]/20">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              What Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#005baa] to-[#00a2e5]">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our satisfied clients about their experience with our
              professional cleaning services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full flex flex-col border border-gray-100 hover:border-[#005baa]/20 transform hover:-translate-y-2">
                  <Quote className="text-[#005baa] mb-6" size={40} />
                  <p className="text-gray-700 mb-8 flex-grow italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#00a2e5] fill-[#00a2e5]"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#005baa]/5 to-[#00a2e5]/5"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#005baa]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00a2e5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center">
            <div className="bg-gradient-to-r from-[#005baa] to-[#00a2e5] rounded-3xl p-16 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready for a Spotless Space?
                </h2>
                <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Contact us today for a free consultation and let our
                  professional cleaning team transform your space with
                  excellence and attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+971503366801"
                    className="group bg-white hover:bg-gray-50 text-[#005baa] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Call +971 50 336 6801
                    <ArrowRight
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </a>
                  <Link
                    to="/contact"
                    className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CleaningServices;
