"use client";
import { motion } from "framer-motion";

const badges = [
  { emoji: "🚀", title: "Launching Soon", sub: "Be the first to experience Kallali" },
  { emoji: "🌾", title: "Early Access Open", sub: "Join the waitlist today" },
  { emoji: "🇮🇳", title: "Built for Indian Farmers", sub: "Designed for Telangana & beyond" },
  { emoji: "🤖", title: "AI Powered Platform", sub: "Kemraj is ready to help you grow" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-kallali-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The future of Indian farming is here
          </h2>
          <p className="mt-3 text-green-100 text-base">Join thousands of farmers on the waitlist.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors"
            >
              <p className="text-4xl mb-3">{b.emoji}</p>
              <p className="text-lg font-bold text-white">{b.title}</p>
              <p className="text-sm text-green-200/80 mt-1">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
