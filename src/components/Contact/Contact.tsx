"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import ContactCard from "./ContactCard";
import { contacts } from "./ContactData";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Let's{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl leading-8 mb-16">
          Interested in collaborating, discussing AI, Data Science,
          or Software Engineering opportunities? I'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.title}
                {...contact}
              />
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <div className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={form.from_name}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={form.from_email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none resize-none focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-cyan-400">
                  {success}
                </p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}