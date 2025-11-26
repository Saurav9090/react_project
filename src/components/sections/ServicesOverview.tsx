
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */


"use client";

import React from "react";
import { motion } from "framer-motion";

// Services data (use images from public/ or local paths).
const services = [
  {
    title: "Beach Photography",
    description:
      "Capture the pristine beauty of Andaman's world-famous beaches with golden hour lighting and crystal-clear waters.",
    image: "/images/service section/beach photography.jpg",
    features: [
      "Golden Hour Sessions",
      "Drone Photography",
      "High-Resolution Images",
      "Same Day Editing",
    ],
    price: "₹8,000",
    duration: "2-3 hours",
    icon: "🏖️",
  },
  {
    title: "Underwater Photography",
    description:
      "Explore the vibrant marine life and coral reefs with our professional underwater photography equipment.",
    image: "/images/service section/underwater photography.avif",
    features: [
      "Professional Diving Gear",
      "Waterproof Equipment",
      "Marine Life Focus",
      "Editing Included",
    ],
    price: "₹15,000",
    duration: "Half Day",
    icon: "🤿",
  },
  {
    title: "Sunset Photography",
    description:
      "Witness and capture the breathtaking sunsets that paint the sky in magnificent colors over the Andaman Sea.",
    image: "/images/service section/sunset photography.jpg",
    features: [
      "Best Sunset Locations",
      "Couple Sessions",
      "Family Portraits",
      "Romantic Ambiance",
    ],
    price: "₹6,000",
    duration: "1-2 hours",
    icon: "🌅",
  },
  {
    title: "Adventure Photography",
    description:
      "Document your thrilling water sports and adventure activities with action-packed photography.",
    image: "/images/service section/adventure photography.jpg",
    features: [
      "Water Sports Coverage",
      "Action Shots",
      "GoPro Footage",
      "Adventure Albums",
    ],
    price: "₹12,000",
    duration: "Full Day",
    icon: "🚤",
  },
  {
    title: "Full Wedding Photography",
    description:
      "Create magical memories of your destination wedding in the tropical paradise of Andaman Islands.",
    image: "/images/service section/wedding.JPG",
    features: [
      "Pre-Wedding Shoot",
      "Ceremony Coverage",
      "Reception Photos",
      "Highlight Reel",
    ],
    price: "₹50,000",
    duration: "2-3 Days",
    icon: "💍",
  },
  {
    title: "Tour Photography",
    description:
      "Professional photography services for your complete Andaman tour with all major attractions covered.",
    image: "/images/service section/tour photography.jpg",
    features: [
      "Multi-Location Shoots",
      "Group Photography",
      "Itinerary Planning",
      "Travel Coverage",
    ],
    price: "₹20,000",
    duration: "Multi-Day",
    icon: "📸",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Animated gradient heading */}
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400"
          >
            Our Photography <span className="block sm:inline text-gray-700 font-medium">Services</span>
          </motion.h2>

          {/* decorative animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4.5rem' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto h-1 mt-4 rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300"
            style={{ willChange: 'width' }}
          />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Choose from our premium photography experiences across the Andaman Islands. Hover any card to see a subtle lift and color accent.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ translateY: -6, scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all"
            >
              {/* Image area with overlays */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full group">
                {/* encodeURI used to safely handle spaces in file names/paths */}
                <img src={typeof window !== 'undefined' ? encodeURI(svc.image) : svc.image} alt={svc.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />

                {/* overlay gradient on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-400 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* price bottom-left */}
                <div className="absolute left-4 bottom-4 bg-white/95 px-3 py-1 rounded-md text-sm font-semibold shadow backdrop-blur-sm">
                  <span className="text-indigo-600">{svc.price}</span>
                </div>

                {/* duration bottom-right */}
                <div className="absolute right-4 bottom-4 bg-white/95 px-3 py-1 rounded-md text-xs text-gray-700 shadow backdrop-blur-sm">
                  {svc.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                    <span className="text-2xl">{svc.icon}</span>
                    <span className="leading-tight">{svc.title}</span>
                  </h3>

                  {/* Contact button (small) */}
                  <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="ml-auto px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm rounded-md shadow"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.alert(`Contact us about: ${svc.title}`);
                      }
                    }}
                  >
                    Contact
                  </motion.button>
                  </a>
                </div>

                <p className="mt-3 text-sm text-gray-600">{svc.description}</p>

                <ul className="mt-4 grid gap-2 text-sm">
                  {svc.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 opacity-90 hover:opacity-100 transition">
                      <span className="mt-1 flex-none w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold bg-gradient-to-r from-yellow-300 via-pink-300 to-indigo-300 text-white shadow">
                        ✓
                      </span>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* big Contact Us CTA */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a href="#contact">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined") window.alert(`Contact us about ${svc.title}`);
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-lg shadow hover:scale-102 transform transition"
                    >
                      Contact Us
                    </button>
                    </a>
                  </div>

                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-900">{svc.price}</div>
                    <div className="text-xs">{svc.duration}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Need a custom package? Reach out and we'll craft the perfect shoot for you.</p>
        </div>
      </div>
    </section>
  );
}
