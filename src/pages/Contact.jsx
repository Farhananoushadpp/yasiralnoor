import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import SEO from "../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "#14 B6 Block, Xavier Business Center, Burj Nahar Mall, Al Muteena, Dubai",
      link: "https://www.google.com/maps/dir/25.2737404,55.3162521/Yasir+Alnoor+Construction,+Al+Muteena+-+Deira+-+Dubai/@25.2737411,55.313511,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5d9e06b50917:0x9db0bbc0236bcb4f!2m2!1d55.3162067!2d25.2736559?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: Phone,
      title: "Mobile",
      content: "+971 58 236 5647",
      link: "tel:+971582365647",
    },
    {
      icon: PhoneCall,
      title: "Landline",
      content: "+971 4 346 0608",
      link: "tel:+97143460608",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@yasiralnoorbc.com",
      link: "mailto:info@yasiralnoorbc.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Sun - Thu: 8:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <div>
      <SEO
        title="Contact Us - Get in Touch with Dubai Construction Experts"
        description="Contact Yasir Alnoor Contracting LLC for your construction needs in Dubai UAE. Call +971 58 236 5647 or email info@yasiralnoorbc.com. Office at Al Saqr Tower, Sheikh Zayed Road."
        keywords="contact construction company Dubai, UAE contractor contact, construction consultation, Dubai construction office, building contractor contact"
        canonicalUrl="https://www.yasiralnoorbc.com/contact"
        ogImage="/contact-og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Yasir Alnoor Contracting LLC",
          description:
            "Contact Yasir Alnoor Contracting LLC for your construction needs in Dubai UAE. Call or email us for consultation.",
          url: "https://www.yasiralnoorbc.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Yasir Alnoor Contracting LLC",
            url: "https://www.yasiralnoorbc.com",
            telephone: "+971582365647",
            email: "info@yasiralnoorbc.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Office 1201, Al Saqr Tower, Sheikh Zayed Road",
              addressLocality: "Dubai",
              addressRegion: "Dubai",
              addressCountry: "AE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971582365647",
              contactType: "customer service",
              email: "info@yasiralnoorbc.com",
              availableLanguage: ["English", "Arabic"],
              hoursAvailable: "24/7",
            },
            openingHours: "Mo-Su 00:00-23:59",
          },
        }}
      />
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#005baa] via-[#1F4E79] to-[#2d3e5f]"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project?
              <span className="text-white font-semibold">
                {" "}
                Reach out to us today
              </span>{" "}
              and let's discuss how we can bring your vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <AnimatedSection className="lg:col-span-1">
              <div className="bg-[#005baa] rounded-xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-300 mb-8">
                  Ready to start your project? Contact us today and let's
                  discuss how we can help bring your vision to life.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="w-12 h-12 bg-[#ffffff] rounded-lg flex items-center justify-center flex-shrink-0 mr-4 hover:bg-gray-100 transition-colors"
                          aria-label={info.title}
                        >
                          <info.icon className="text-[#005baa]" size={20} />
                        </a>
                      ) : (
                        <div className="w-12 h-12 bg-[#ffffff] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                          <info.icon className="text-[#005baa]" size={20} />
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-300 hover:text-[#ffffff] transition"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {/* <a
                      href="#"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffffff] transition"
                    >
                      <Facebook size={14} />
                    </a> */}
                    {/* <a
                      href="#"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ffffff] transition"
                    >
                      <Twitter size={14} />
                    </a> */}
                    <a
                      href="https://wa.me/971544018604"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#005baa] transition"
                    >
                      <MessageCircle size={14} />
                    </a>
                    <a
                      href="https://www.instagram.com/yasiralnoorcontracting?igsh=MW9wODdoYjlhYTRnbA=="
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#005baa] transition"
                    >
                      <Instagram size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-[#005baa] mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-green-600">
                      Thank you for contacting us. Our team will review your
                      inquiry and get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a2e5] focus:ring-1 focus:ring-[#00a2e5] transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a2e5] focus:ring-1 focus:ring-[#00a2e5] transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a2e5] focus:ring-1 focus:ring-[#00a2e5] transition"
                          placeholder="+971 00 000 0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a2e5] focus:ring-1 focus:ring-[#00a2e5] transition"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="residential">
                            Residential Project
                          </option>
                          <option value="commercial">Commercial Project</option>
                          <option value="industrial">Industrial Project</option>
                          <option value="renovation">Renovation</option>
                          <option value="quote">Request Quote</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a2e5] focus:ring-1 focus:ring-[#00a2e5] transition resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-[#ffffff] font-semibold text-sm uppercase tracking-wider">
              Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005baa] mt-4 mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to discuss your project in person. We're
              conveniently located in Dubai.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center relative">
              {/* Map Placeholder */}
      {/* <div className="text-center">
                <MapPin className="mx-auto mb-4 text-[#ffffff]" size={48} />
                <h3 className="text-xl font-bold text-[#005baa] mb-2">
                  Yasir Alnoor Contracting LLC
                </h3>
                <p className="text-gray-600 mb-4">
                  Dubai, United Arab Emirates
                </p>
                <a
                  href="https://maps.google.com/?q=Dubai,UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  Get Directions
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
