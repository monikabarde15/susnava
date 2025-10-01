import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import solarHome from "@/assets/solar-home.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://susnavabackend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + data.message);
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen relative bg-green-50 overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto max-w-4xl text-center px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <Badge
              className="mb-4 uppercase tracking-widest text-green-700"
              variant="outline"
            >
              About SUSNAVA
            </Badge>
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-green-900">
              Driving Sustainable Innovations
            </h1>
            <p className="text-lg text-green-800 max-w-3xl mx-auto">
              We lead innovation with power systems, engineering, and sustainable
              solutions.
            </p>
             <p className="text-lg text-green-800 max-w-3xl mx-auto">
              Support Our Mission:
At Susnava, we’re not only driving the next generation of innovation — we’re equally committed to maximizing
the sustainability of existing resources, creating a smarter, more resilient ecosystem for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Address */}
      <motion.section
        className="container mx-auto px-6 py-16 max-w-7xl flex flex-col lg:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Get In Touch Form */}
        <motion.div
          className="flex-1 bg-white bg-opacity-80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-green-300 flex flex-col cursor-pointer"
          variants={fadeInUp}
          whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-green-900 text-center drop-shadow-sm">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 flex-1">
            <input
              type="text"
              name="firstName"
              placeholder="Your Full Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-green-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-green-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-green-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-green-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-tr from-green-600 to-green-400 text-white font-semibold hover:brightness-110 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>

        {/* Our Address */}
        <motion.div
            className="flex-1 bg-gradient-to-tr from-green-600 to-green-500 text-white rounded-3xl p-12 shadow-2xl flex flex-col cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="flex items-center mb-8"> {/*Reduced margin*/}
              <MapPin className="w-12 h-12 drop-shadow-lg" />
              <h3 className="text-4xl font-extrabold ml-4 drop-shadow-lg uppercase">
                Our Address
              </h3>
            </div>

            <address className="not-italic prose max-w-none mb-4 drop-shadow-sm"> {/*Reduced margin*/}
              <p>SusNava Tech LLP</p>
              <p>Village Dadhpa, Post Amba</p>
              <p>Thana Kutumba, District Aurangabad</p>
              <p>Bihar - 824111</p>
              <p>
                Phone:{" "}
                <a href="tel:+917295025895" className="underline hover:text-green-200">
                  +91 72950 25895
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:connect@susnava.com" className="underline hover:text-green-200">
                  connect@susnava.com
                </a>
              </p>
            </address>

            {/* Dummy Image */}
            <div className="h-68 flex items-center text-lg drop-shadow-md mt-3">
              <div className="w-full h-49 rounded-lg overflow-hidden mb-2 top-17 flex justify-center items-center bg-white/10">
              <img
  src={solarHome}
  alt="Dummy Company"
  className="object-cover w-full h-full"
/>

            </div>
            </div>
          </motion.div>

      </motion.section>

      {/* Map Below Sections */}
      <motion.div
        className="container mx-auto px-6 mb-16 rounded-xl overflow-hidden shadow-lg border-2 border-green-600 h-96"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        <iframe
          title="SUSNAVA Location"
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactUs;
