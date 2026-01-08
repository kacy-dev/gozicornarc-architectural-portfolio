"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="relative w-full min-h-screen bg-gray-50/5 overflow-hidden">
            {/* Watermark Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Text watermark */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-20">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span
                            key={i}
                            className="text-8xl lg:text-[7rem] font-bold text-gray-300 rotate-[-15deg] m-6 select-none font-nosifer"
                        >
                            Gozicornarc
                        </span>
                    ))}
                </div>

                {/* Optional project images watermark */}
                <img
                    src="/img/gozie-design.JPG"
                    alt="Watermark"
                    className="absolute top-20 left-10 w-1/3 opacity-10 rotate-[-10deg]"
                />
                <img
                    src="/img/gozie-consult.JPG"
                    alt="Watermark"
                    className="absolute bottom-10 right-0 w-1/3 opacity-10 rotate-[10deg]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 lg:px-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-2xl lg:text-3xl font-extrabold font-michroma text-gray-900">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-gray-700 text-lg lg:text-xl">
                        Have a project in mind? Fill out the form and let’s make it happen.
                    </p>
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    {/* <div className="space-y-8 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-orange-400" />
              <p className="text-gray-700 text-lg">Lagos, Nigeria</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-orange-400" />
              <p className="text-gray-700 text-lg">+234 123 456 7890</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-orange-400" />
              <p className="text-gray-700 text-lg">contact@gozicornarc.com</p>
            </div>

           
            <img
              src="/img/gozie-design.JPG"
              alt="Gozicornarc"
              className="rounded-xl shadow-lg w-full max-w-sm hidden md:block"
            />
          </div> */}

                    <div className="space-y-8 flex flex-col justify-center">
                        {/* Location Card */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300">
                            <MapPin className="w-7 h-7 text-orange-400" />
                            <div className="flex-1">
                                <p className="text-gray-900 font-semibold text-lg">Spera, Deo</p>
                                <p className="text-gray-700 text-sm">Abakaliki, Ebonyi State, Nigeria</p>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.796020208742!2d8.105781174134543!3d6.324676324059441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10411c1f8f1a2b8f%3A0x4c0b905d83680b4f!2sSpera%2C%20Deo%2C%20Abakaliki%2C%20Ebonyi%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1702070400000!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                className="border-0"
                            ></iframe>
                        </div>

                        <div className="flex flex-col lg:flex-row sm:flex-col gap-5 ">
                            {/* Phone Card */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300">
                                <Phone className="w-7 h-7 text-orange-400" />
                                <div>
                                    <p className="text-gray-900 font-semibold text-lg">+234 123 456 7890</p>
                                    <p className="text-gray-700 text-sm">Call us anytime</p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/20 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300">
                                <Mail className="w-7 h-7 text-orange-400" />
                                <div>
                                    <p className="text-gray-900 font-semibold text-lg">contact@gozicornarc.com</p>
                                    <p className="text-gray-700 text-sm">We reply within 24h</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>


                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6"
                    >
                        {submitted && (
                            <p className="text-green-500 font-semibold text-center">
                                Thank you! Your message has been sent.
                            </p>
                        )}

                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                        </div>

                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows={5}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

